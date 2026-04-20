const http = require('http');
const { URL } = require('url');

const DEFAULT_WEB_PORT = Number(process.env.WEB_PORT || 3001);

let latestData = {
  timestamp: new Date().toISOString(),
  temperature: null,
  humidity: null,
  light: null,
  motion: null,
  nfc: null,
  access: {
    isAdminLoggedIn: false,
    lastLoginAt: null,
    lastCardId: null,
    lastCardRole: 'Unbekannter Benutzer'
  },
  accessLogs: []
};

function normalizeSensorData(sensorData = {}) {
  return {
    timestamp: new Date().toISOString(),
    temperature: sensorData.temperature?.celsius ?? null,
    humidity: sensorData.humidity?.relativeHumidity ?? null,
    light: sensorData.light?.lux ?? null,
    motion: sensorData.motion?.motion ?? null,
    nfc: sensorData.nfc?.tagHex ?? null
  };
}

function updateLiveData(sensorData, accessData = null, accessLogs = null) {
  latestData = {
    ...latestData,
    ...normalizeSensorData(sensorData),
    access: accessData ? { ...latestData.access, ...accessData } : latestData.access,
    accessLogs: Array.isArray(accessLogs) ? accessLogs : latestData.accessLogs
  };
  return latestData;
}

function startWebServer(port = DEFAULT_WEB_PORT) {
  const server = http.createServer((req, res) => {
    const baseUrl = `http://${req.headers.host || `localhost:${port}`}`;
    const requestUrl = new URL(req.url || '/', baseUrl);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/api/live-data') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(latestData));
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/health') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
      return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found' }));
  });

  server.listen(port, () => {
    console.log(`[Web] Live data API running on http://localhost:${port}`);
  });

  return { server };
}

module.exports = {
  startWebServer,
  updateLiveData
};
