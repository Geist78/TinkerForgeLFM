const Tinkerforge = require('tinkerforge');
const readline = require('readline');
const { HOST, PORT } = require('../utilities/constants');

process.env.SENSORS_SILENT = '1';

const refreshMs = Math.max(500, Number(process.env.SENSORS_REFRESH_MS || 2000));
const readMs = Math.max(500, Number(process.env.SENSORS_READ_MS || refreshMs));

const TemperatureSensor = require('../bricks/sensors/temperature');
const LightSensor = require('../bricks/sensors/light');
const HumiditySensor = require('../bricks/sensors/humidity');
const MotionSensor = require('../bricks/sensors/motion');
const NFCSensor = require('../bricks/sensors/nfc');

const host = process.env.TF_HOST || HOST || '127.0.0.1';
const port = Number(process.env.TF_PORT || PORT || 4223);

const ipcon = new Tinkerforge.IPConnection();
const sensors = [
  new TemperatureSensor(ipcon),
  new LightSensor(ipcon),
  new HumiditySensor(ipcon),
  new MotionSensor(ipcon),
  new NFCSensor(ipcon)
];

let renderTimer = null;
let readTimer = null;
let firstRender = true;

// ── helpers ─────────────────────────────────────────────────────────────────

function age(ts) {
  if (!ts) return '  -  ';
  const s = Math.max(0, Math.floor((Date.now() - new Date(ts).getTime()) / 1000));
  return `${s}s ago`;
}

function fv(value, unit = '') {
  if (value == null || (typeof value === 'number' && Number.isNaN(value))) return 'n/a';
  return unit ? `${value} ${unit}` : String(value);
}

function row(label, value) {
  const L = 14;
  const line = `${(label + ':').padEnd(L)}${value}`;
  if (process.stdout.isTTY) {
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 0);
  }
  process.stdout.write(line + '\n');
}

function blank() {
  if (process.stdout.isTTY) {
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 0);
  }
  process.stdout.write('\n');
}

// ── static header (printed once) ────────────────────────────────────────────

function printHeader() {
  console.log('┌─────────────────────────────────────────┐');
  console.log('│        Live Sensor Dashboard            │');
  console.log('├─────────────────────────────────────────┤');
  console.log(`│  Host    : ${(host + ':' + port).padEnd(29)}│`);
  console.log(`│  Refresh : ${String(refreshMs + 'ms').padEnd(29)}│`);
  console.log('└─────────────────────────────────────────┘');
  console.log('  Press Ctrl+C to stop\n');
}

// DATA_ROWS = the exact number of lines renderDataBlock() writes
const DATA_ROWS = 10;

function renderDataBlock(t, l, h, ht, m, n) {
  row('Updated',     new Date().toLocaleTimeString());
  blank();
  row('Temperature', t  ? `${fv(t.celsius,            '°C')}   (${age(t.timestamp)})`   : 'n/a');
  row('Light',       l  ? `${fv(l.lux,                'lx')}   (${age(l.timestamp)})`   : 'n/a');
  row('Humidity',    h  ? `${fv(h.relativeHumidity,  '%RH')}   (${age(h.timestamp)})`   : 'n/a');
  row('Hum Temp',    ht ? `${fv(ht.celsius,            '°C')}   (${age(ht.timestamp)})` : 'n/a');
  row('Motion',      m  ? `${m.motion ? 'DETECTED' : 'clear'}   (${age(m.timestamp)})`  : 'n/a');
  row('NFC State',   n  ? `${fv(n.state)}   (${age(n.timestamp)})`                      : 'n/a');
  row('NFC Tag',     n  ? fv(n.tagHex)                                                   : 'n/a');
  blank();
}

function renderDashboard() {
  const t  = sensors[0].lastReading    ?? null;
  const l  = sensors[1].lastReading    ?? null;
  const h  = sensors[2].lastReading    ?? null;
  const ht = sensors[2].lastTemperature ?? null;
  const m  = sensors[3].lastReading    ?? null;
  const n  = sensors[4].lastReading    ?? null;

  if (!firstRender && process.stdout.isTTY) {
    readline.moveCursor(process.stdout, 0, -DATA_ROWS);
    readline.cursorTo(process.stdout, 0);
  }

  renderDataBlock(t, l, h, ht, m, n);
  firstRender = false;
}

async function readCycle() {
  const reads = sensors
    .filter((sensor) => typeof sensor.readOnce === 'function')
    .map((sensor) => sensor.readOnce());

  await Promise.allSettled(reads);
}

function shutdown() {
  if (renderTimer) {
    clearInterval(renderTimer);
    renderTimer = null;
  }

  if (readTimer) {
    clearInterval(readTimer);
    readTimer = null;
  }

  for (const sensor of sensors) {
    if (typeof sensor.stopPolling === 'function') {
      sensor.stopPolling();
    }
  }

  try {
    ipcon.disconnect();
  } catch (_) {
  }
}

ipcon.connect(host, port, (error) => {
  if (error) {
    console.error(`[SENSORS] Connect error: ${error}`);
    process.exit(1);
  }
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
  printHeader();

  for (const sensor of sensors) {
    try {
      await sensor.init();
    } catch (err) {
      const name = sensor.constructor && sensor.constructor.name ? sensor.constructor.name : 'UnknownSensor';
      console.error(`[SENSORS] ${name} init error: ${err.message}`);
    }
  }

  await readCycle();
  renderDashboard();

  readTimer = setInterval(() => {
    readCycle().catch((err) => {
      console.error(`[SENSORS] Read cycle error: ${err.message}`);
    });
  }, readMs);

  renderTimer = setInterval(() => {
    renderDashboard();
  }, refreshMs);
});

process.on('SIGINT', () => {
  shutdown();
  process.exit(0);
});

process.on('SIGTERM', () => {
  shutdown();
  process.exit(0);
});
