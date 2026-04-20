const fs = require('fs');
const path = require('path');
const Tinkerforge = require('tinkerforge');
const { getAllSensorData } = require('./bricks/sensors/_return_sensor_data');
const Speaker = require('./bricks/actors/speaker');
const { HOST, PORT } = require('./utilities/constants');
const { startWebServer, updateLiveData } = require('./web-server');

// NFC-Benutzer Datei
const NFC_USERS_FILE = path.join(__dirname, 'data', 'nfc_users.json');
const ADMIN_CARD_ID = '04DA7B7AFE1D90';
const EMPLOYEE_CARD_ID = '04E3F4B78F6180';
const ANONYM_NAME = 'Unbekannter Benutzer';
const ADMIN_NAME = 'Administration';
const EMPLOYEE_NAME = 'Mitarbeiter';

let accessState = {
  isAdminLoggedIn: false,
  lastLoginAt: null,
  lastCardId: null,
  lastCardRole: ANONYM_NAME
};
let accessLogs = [];
const MAX_ACCESS_LOGS = 100;

// Benutzer-Mapping aus Datei laden oder initialisieren
function loadNFCUsers() {
  if (fs.existsSync(NFC_USERS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(NFC_USERS_FILE, 'utf-8'));
    } catch (err) {
      console.error('Error loading NFC users:', err);
      return {};
    }
  }
  return {};
}

// Benutzer-Mapping speichern
function saveNFCUsers(users) {
  try {
    fs.writeFileSync(NFC_USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving NFC users:', err);
  }
}

// NFC-Benutzer registrieren/aktualisieren
function registerNFCUser(nfcId, userName) {
  const users = loadNFCUsers();
  users[nfcId] = {
    name: userName,
    firstSeen: users[nfcId]?.firstSeen || new Date().toISOString(),
    lastSeen: new Date().toISOString()
  };
  saveNFCUsers(users);
  return users[nfcId];
}

// NFC-Benutzer abrufen
function getNFCUser(nfcId) {
  const users = loadNFCUsers();
  return users[nfcId];
}

// Speaker initialisieren
async function initializeSpeaker() {
  return new Promise((resolve, reject) => {
    const ipcon = new Tinkerforge.IPConnection();
    const speaker = new Speaker(ipcon);

    ipcon.connect(HOST, PORT, (error) => {
      if (error) {
        console.error('Speaker connect error:', error);
        reject(error);
        return;
      }
    });

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
      try {
        await speaker.init();
        console.log('[Speaker] Initialized successfully');
        resolve({ speaker, ipcon });
      } catch (err) {
        console.error('[Speaker] Init error:', err);
        reject(err);
      }
    });
  });
}

// Alarm basierend auf Temperatur/Luftfeuchte abspielen
async function playAlarmIfNeeded(temp, humidity, speaker) {
  try {
    if (temp >= 31) {
      await speaker.alarm_critical();
    } else if (humidity > 75) {
      await speaker.alarm_warning();
    }
  } catch (err) {
    console.error('[Speaker] Error playing alarm:', err);
  }
}

function resolveNfcUserName(nfcId) {
  const normalizedId = String(nfcId || '').trim().toUpperCase();
  if (normalizedId === ADMIN_CARD_ID) {
    return ADMIN_NAME;
  }
  if (normalizedId === EMPLOYEE_CARD_ID) {
    return EMPLOYEE_NAME;
  }
  return ANONYM_NAME;
}

function updateAccessStateFromCard(nfcId) {
  const normalizedId = String(nfcId || '').trim().toUpperCase();
  const compactId = normalizedId.replace(/^0+/, '') || '0';
  const role = resolveNfcUserName(normalizedId);
  accessState = {
    isAdminLoggedIn: role === ADMIN_NAME,
    lastLoginAt: new Date().toISOString(),
    lastCardId: compactId,
    lastCardRole: role
  };
}

function pushAccessLog({ cardId, userName, success }) {
  const now = new Date();
  const entry = {
    time: now.toLocaleTimeString('de-DE', { hour12: false }),
    user: userName,
    action: 'NFC Login',
    result: success ? 'GEWAEHRT' : 'ABGELEHNT',
    status: success ? 'success' : 'danger',
    cardId: cardId || '-',
    timestamp: now.toISOString()
  };
  accessLogs = [entry, ...accessLogs].slice(0, MAX_ACCESS_LOGS);
}

// Sensor-Daten verarbeiten (ohne Sensor-Console-Logs)
async function processSensorData(sensorData, speaker) {
  const { temperature, humidity, nfc } = sensorData;

  const temp = temperature?.celsius || null;
  const humi = humidity?.relativeHumidity || null;
  const nfcData = nfc || {};

  // NFC-ID zu Benutzer auflösen (ID 31 => Administration)
  if (nfcData.tagHex) {
    const wasAdminLoggedIn = accessState.isAdminLoggedIn;
    const previousCardId = accessState.lastCardId;
    updateAccessStateFromCard(nfcData.tagHex);
    const user = getNFCUser(nfcData.tagHex);
    const mappedName = resolveNfcUserName(nfcData.tagHex);
    registerNFCUser(nfcData.tagHex, user?.name === mappedName ? user.name : mappedName);

    // Login-Sound nur bei neuem/erneutem Admin-Login
    const isNewAdminLogin = accessState.isAdminLoggedIn && (!wasAdminLoggedIn || previousCardId !== accessState.lastCardId);
    const isDeniedLoginAttempt = !accessState.isAdminLoggedIn && previousCardId !== accessState.lastCardId;
    const isNewCardScan = previousCardId !== accessState.lastCardId;
    if (isNewCardScan) {
      pushAccessLog({
        cardId: accessState.lastCardId,
        userName: accessState.lastCardRole,
        success: accessState.isAdminLoggedIn
      });
    }
    if (speaker && isNewAdminLogin) {
      try {
        await speaker.login_success();
      } catch (err) {
        console.error('[Speaker] Error playing login success sound:', err);
      }
    }
    if (speaker && isDeniedLoginAttempt) {
      try {
        await speaker.login_denied();
      } catch (err) {
        console.error('[Speaker] Error playing login denied sound:', err);
      }
    }
  }

  // Play Alarm wenn nötig
  if (speaker && temp !== null) {
    await playAlarmIfNeeded(temp, humi, speaker);
  }
}

// Main Funktion mit kontinuierlicher Aktualisierung
async function runSensorMonitoring() {
  let speaker = null;
  let ipcon = null;
  let webServer = null;

  try {
    // Speaker initialisieren
    const speakerData = await initializeSpeaker();
    speaker = speakerData.speaker;
    ipcon = speakerData.ipcon;
    console.log('[Main] Speaker ready for alarms');
  } catch (err) {
    console.error('[Main] Failed to initialize speaker:', err);
    console.log('[Main] Continuing without speaker...');
  }

  console.log('[Main] Starting live sensor monitoring...');
  console.log('[Main] Press Ctrl+C to stop');

  try {
    webServer = startWebServer();
  } catch (err) {
    console.error('[Main] Failed to start web server:', err);
  }

  // Kontinuierliche Aktualisierung alle 5 Sekunden
  const updateInterval = setInterval(async () => {
    try {
      const sensorData = await getAllSensorData();
      await processSensorData(sensorData, speaker);
      updateLiveData(sensorData, accessState, accessLogs);
    } catch (err) {
      console.error('[Main] Error updating sensor data:', err);
    }
  }, 5000); // 5000ms = 5 Sekunden

  // Softe Beendigung mit Ctrl+C
  process.on('SIGINT', () => {
    console.log('\n[Main] Stopping sensor monitoring...');
    clearInterval(updateInterval);
    if (ipcon) {
      try {
        ipcon.disconnect();
      } catch (_) {}
    }
    if (webServer?.server) {
      try {
        webServer.server.close();
      } catch (_) {}
    }
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n[Main] Stopping sensor monitoring...');
    clearInterval(updateInterval);
    if (ipcon) {
      try {
        ipcon.disconnect();
      } catch (_) {}
    }
    if (webServer?.server) {
      try {
        webServer.server.close();
      } catch (_) {}
    }
    process.exit(0);
  });
}

runSensorMonitoring();