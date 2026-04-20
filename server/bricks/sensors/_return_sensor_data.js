const Tinkerforge = require('tinkerforge');
const { HOST, PORT } = require('../../utilities/constants');

const TemperatureSensor = require('./temperature');
const LightSensor = require('./light');
const HumiditySensor = require('./humidity');
const MotionSensor = require('./motion');
const NFCSensor = require('./nfc');


async function getAllSensorData() {
  process.env.SENSORS_SILENT = '1';

  const ipcon = new Tinkerforge.IPConnection();
  const t = new TemperatureSensor(ipcon);
  const l = new LightSensor(ipcon);
  const h = new HumiditySensor(ipcon);
  const m = new MotionSensor(ipcon);
  const n = new NFCSensor(ipcon);
  const all = [t, l, h, m, n];

  await new Promise((resolve, reject) => {
    ipcon.connect(HOST, PORT, (err) => { if (err) reject(new Error(err)); });
    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, resolve);
  });

  await Promise.all(all.map((s) => s.init()));
  await Promise.all([t, l, h, m].map((s) => s.readOnce()));
  await n.readOnce();

  all.forEach((s) => { if (s.stopPolling) s.stopPolling(); });
  try { ipcon.disconnect(); } catch (_) {}

  return {
    temperature: t.lastReading ? { celsius: t.lastReading.celsius } : null,
    light:       l.lastReading ? { lux: l.lastReading.lux } : null,
    humidity:    h.lastReading ? { relativeHumidity: h.lastReading.relativeHumidity, internalCelsius: h.lastTemperature?.celsius ?? null } : null,
    motion:      m.lastReading ? { motion: m.lastReading.motion } : null,
    nfc:         n.lastReading ? { state: n.lastReading.state, tagHex: n.lastReading.tagHex || null } : null
  };

}


module.exports = { getAllSensorData };

