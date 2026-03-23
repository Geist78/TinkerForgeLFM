const Tinkerforge = require('tinkerforge');
const fs   = require('fs');
const path = require('path');
const { HOST, PORT } = require('../utilities/constants');

const TemperatureSensor = require('../bricks/sensors/temperature');
const HumiditySensor    = require('../bricks/sensors/humidity');
const RGBButton         = require('../bricks/actors/rgb-button');
const LCDDisplay        = require('../bricks/actors/lcd');
// const Speaker        = require('../bricks/actors/speaker');

// -- Thresholds --------------------------------------------------------------
const TEMP = {
  COLD:   18,   // < 18  -> blau
  NORMAL: 27,   // 18-27 -> gruen
  WARN:   30,   // 27-30 -> gelb + LCD
  ALARM:  35    // 30-35 -> rot + E-Mail  |  > 35 -> kritisch
};

const HUM = {
  DRY:    30,   // < 30  -> "Zu trocken"
  NORMAL: 60,   // 30-60 -> normal
  WARN:   75    // 60-75 -> Warnung + Log  |  > 75 -> kritischer Alarm
};

// -- History (rolling buffer -> saved to file) --------------------------------
const HISTORY_FILE = path.join(__dirname, '..', 'data', 'temp_history.json');
const HISTORY_MAX  = 200;
let   tempHistory  = [];

function recordTemp(celsius) {
  tempHistory.push({ ts: new Date().toISOString(), celsius });
  if (tempHistory.length > HISTORY_MAX) tempHistory.shift();
  try {
    fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(tempHistory, null, 2));
  } catch (_) {}
}

// -- Dashboard state ----------------------------------------------------------
let firstRender   = true;
let lastCelsius   = null;
let lastTempState = null;
let lastColor     = null;
let lastHumidity  = null;
let lastHumState  = null;

function bar(value, max, width) {
  width = width || 24;
  const filled = Math.round(Math.max(0, Math.min(1, value / max)) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

// W = inner width (between the vertical borders, excluding the 2 spaces padding)
const W = 50;
function top()  { return '  ╔' + '═'.repeat(W) + '╗'; }
function mid()  { return '  ╠' + '═'.repeat(W) + '╣'; }
function sep()  { return '  ╟' + '─'.repeat(W) + '╢'; }
function bot()  { return '  ╚' + '═'.repeat(W) + '╝'; }
function row(txt) {
  const s = String(txt);
  return '  ║ ' + s + ' '.repeat(Math.max(0, W - 2 - s.length)) + ' ║';
}

function stateLabel(state) {
  if (!state) return ' -- ';
  if (state.startsWith('KRITISCH')) return '!!! KRITISCH !!!';
  if (state.startsWith('ALARM'))    return '**  ALARM     **';
  if (state.startsWith('WARNUNG'))  return ' ~  WARNUNG    ~';
  if (state.startsWith('Normal'))   return ' OK Normal      ';
  if (state.startsWith('Kalt'))     return '    Kalt         ';
  return state;
}

function humLabel(state) {
  if (!state) return ' -- ';
  if (state.startsWith('KRIT'))   return '!!! KRITISCH !!!';
  if (state.startsWith('WARN'))   return ' ~  Warnung    ~ ';
  if (state.startsWith('NORMAL')) return ' OK Normal       ';
  if (state.startsWith('DRY'))    return ' ~  Zu trocken   ';
  return state;
}

function printHeader() {
  console.log('');
  console.log(top());
  console.log(row('      ENVIRONMENT MONITOR'));
  console.log(row('  Host  : ' + HOST + ':' + PORT));
  console.log(mid());
  console.log(row('  TEMPERATURE                    HUMIDITY'));
  console.log(row('  [BLUE]   < '   + TEMP.COLD   + 'C                 [WARN]  < '    + HUM.DRY    + '%'));
  console.log(row('  [GREEN]  '     + TEMP.COLD   + '-' + TEMP.NORMAL  + 'C               [OK]    ' + HUM.DRY    + '-' + HUM.NORMAL  + '%'));
  console.log(row('  [YELLOW] '     + TEMP.NORMAL + '-' + TEMP.WARN    + 'C               [WARN]  ' + HUM.NORMAL + '-' + HUM.WARN    + '%'));
  console.log(row('  [ORANGE] '     + TEMP.WARN   + '-' + TEMP.ALARM   + 'C               [CRIT]  > ' + HUM.WARN + '%'));
  console.log(row('  [RED]    > '   + TEMP.ALARM  + 'C'));
  console.log(bot());
  console.log('');
}

function renderDataBlock() {
  console.log(top());
  console.log(row('  TEMPERATURE'));
  console.log(sep());
  if (lastCelsius != null) {
    const b    = bar(lastCelsius, 50);
    const pct  = (lastCelsius / 50 * 100).toFixed(0);
    console.log(row('  ' + b + '  ' + String(lastCelsius).padEnd(6) + 'C'));
    console.log(row('  Status : ' + stateLabel(lastTempState)));
    console.log(row('  LED    : ' + (lastColor || '...')));
  } else {
    console.log(row('  Waiting for temperature sensor...'));
    console.log(row(''));
    console.log(row(''));
  }
  console.log(mid());
  console.log(row('  HUMIDITY'));
  console.log(sep());
  if (lastHumidity != null) {
    const b = bar(lastHumidity, 100);
    console.log(row('  ' + b + '  ' + String(lastHumidity).padEnd(6) + '%'));
    console.log(row('  Status : ' + humLabel(lastHumState)));
  } else {
    console.log(row('  Waiting for humidity sensor...'));
    console.log(row(''));
  }
  console.log(bot());
  console.log('');
  console.log('  Ctrl+C to stop');
}

function renderDashboard() {
  console.clear();
  printHeader();
  renderDataBlock();
  firstRender = false;
}


// -- Admin alert --------------------------------------------------------------
function sendAdminAlert(subject, message) {
  console.error('[ALERT] ' + subject + ': ' + message);
  // TODO: nodemailer / webhook / SMS hier
}

// -- Temperature handler ------------------------------------------------------
function handleTemperature(celsius, led, lcd) {
  recordTemp(celsius);

  let state, color;

  if (celsius > TEMP.ALARM) {
    led.setColor(255, 0, 0);
    lcd.displayMessage(['KRITISCH!', celsius + ' C', '> ' + TEMP.ALARM + ' C']);
    // speaker.beep(3000, 800);
    state = 'KRITISCH  (> ' + TEMP.ALARM + 'C)';
    color = 'rot';
    sendAdminAlert('KRITISCH: Temperatur', celsius + ' C > ' + TEMP.ALARM + ' C');

  } else if (celsius > TEMP.WARN) {
    led.setColor(255, 0, 0);
    lcd.displayMessage(['ALARM!', celsius + ' C', '> ' + TEMP.WARN + ' C']);
    // speaker.beep(2000, 500);
    state = 'ALARM     (' + TEMP.WARN + '-' + TEMP.ALARM + 'C)';
    color = 'rot';
    sendAdminAlert('ALARM: Hohe Temperatur', celsius + ' C > ' + TEMP.WARN + ' C');

  } else if (celsius >= TEMP.NORMAL) {
    led.setColor(255, 255, 0);
    lcd.displayMessage(['WARNUNG', celsius + ' C', TEMP.NORMAL + '-' + TEMP.WARN + ' C']);
    state = 'WARNUNG   (' + TEMP.NORMAL + '-' + TEMP.WARN + 'C)';
    color = 'gelb';

  } else if (celsius >= TEMP.COLD) {
    led.setColor(0, 255, 0);
    lcd.displayMessage(['Normal', celsius + ' C']);
    state = 'Normal    (' + TEMP.COLD + '-' + TEMP.NORMAL + 'C)';
    color = 'gruen';

  } else {
    led.setColor(0, 0, 255);
    lcd.displayMessage(['Kalt', celsius + ' C', '< ' + TEMP.COLD + ' C']);
    state = 'Kalt      (< ' + TEMP.COLD + 'C)';
    color = 'blau';
  }

  const changed = celsius !== lastCelsius || state !== lastTempState;
  lastCelsius   = celsius;
  lastTempState = state;
  lastColor     = color;
  if (firstRender || changed) renderDashboard();
}

// -- Humidity handler ---------------------------------------------------------
function handleHumidity(rh) {
  let state;

  if (rh > HUM.WARN) {
    state = 'KRIT      (> ' + HUM.WARN + '%)';
    sendAdminAlert('KRITISCH: Feuchtigkeit', rh + '% > ' + HUM.WARN + '%');

  } else if (rh > HUM.NORMAL) {
    state = 'WARN      (' + HUM.NORMAL + '-' + HUM.WARN + '%)';
    console.error('[LOG] Hohe Feuchtigkeit: ' + rh + '%');

  } else if (rh >= HUM.DRY) {
    state = 'NORMAL    (' + HUM.DRY + '-' + HUM.NORMAL + '%)';

  } else {
    state = 'DRY       (< ' + HUM.DRY + '% - Zu trocken)';
  }

  const changed = rh !== lastHumidity || state !== lastHumState;
  lastHumidity = rh;
  lastHumState = state;
  if (firstRender || changed) renderDashboard();
}

// -- Main controller ----------------------------------------------------------
async function runTemperatureController() {
  process.env.SENSORS_SILENT = '1';

  const ipcon      = new Tinkerforge.IPConnection();
  const tempSensor = new TemperatureSensor(ipcon);
  const humSensor  = new HumiditySensor(ipcon);
  const led        = new RGBButton(ipcon);
  const lcd        = new LCDDisplay(ipcon);
  // const speaker = new Speaker(ipcon);

  await new Promise((resolve, reject) => {
    ipcon.connect(HOST, PORT, (err) => { if (err) reject(new Error(err)); });
    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, resolve);
  });

  await Promise.all([tempSensor.init(), humSensor.init(), led.init(), lcd.init()]);

  tempSensor.bricklet.on(
    Tinkerforge.BrickletPTCV2.CALLBACK_TEMPERATURE,
    (raw) => handleTemperature(raw / 100, led, lcd)
  );

  humSensor.bricklet.on(
    Tinkerforge.BrickletHumidityV2.CALLBACK_HUMIDITY,
    (raw) => handleHumidity(raw / 100)
  );

  renderDashboard();

  process.on('SIGINT',  () => { try { ipcon.disconnect(); } catch (_) {} process.exit(0); });
  process.on('SIGTERM', () => { try { ipcon.disconnect(); } catch (_) {} process.exit(0); });
}

module.exports = { runTemperatureController, handleTemperature, handleHumidity };

if (require.main === module) {
  runTemperatureController().catch((err) => {
    console.error('[CTRL] Fatal: ' + err.message);
    process.exit(1);
  });
}
