const express = require('express');
const BrickManager = require('./bricks');

const app = express();
const brickManager = new BrickManager();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// ============ STATUS ENDPOINTS ============

app.get('/api/status', (req, res) => {
  res.json({
    message: 'TinkerForge LFM Server',
    status: brickManager.getStatus(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  if (brickManager.connected) {
    res.json({ health: 'ok', connected: true });
  } else {
    res.status(503).json({ health: 'degraded', connected: false });
  }
});

// ============ SENSOR ENDPOINTS ============

app.get('/api/sensors/temperature', async (req, res) => {
  try {
    if (!brickManager.temperature) throw new Error('Temperature sensor not available');
    const data = await brickManager.temperature.getTemperature();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sensors/light', async (req, res) => {
  try {
    if (!brickManager.light) throw new Error('Light sensor not available');
    const data = await brickManager.light.getIlluminance();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sensors/humidity', async (req, res) => {
  try {
    if (!brickManager.humidity) throw new Error('Humidity sensor not available');
    const data = await brickManager.humidity.getHumidity();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sensors/motion', async (req, res) => {
  try {
    if (!brickManager.motion) throw new Error('Motion detector not available');
    const data = await brickManager.motion.getMotionDetected();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sensors/nfc', async (req, res) => {
  try {
    if (!brickManager.nfc) throw new Error('NFC scanner not available');
    const data = await brickManager.nfc.getState();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ ACTOR ENDPOINTS ============

app.post('/api/actors/speaker/tone', async (req, res) => {
  try {
    if (!brickManager.speaker) throw new Error('Speaker not available');
    const { frequency = 1000, duration = 1000 } = req.body;
    const result = await brickManager.speaker.playTone(frequency, duration);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/speaker/beep', async (req, res) => {
  try {
    if (!brickManager.speaker) throw new Error('Speaker not available');
    const { duration = 100 } = req.body;
    const result = await brickManager.speaker.playBeep(duration);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/speaker/alarm', async (req, res) => {
  try {
    if (!brickManager.speaker) throw new Error('Speaker not available');
    const result = await brickManager.speaker.playAlarm();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/write', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('LCD display not available');
    const { line = 0, column = 0, text = '' } = req.body;
    const result = await brickManager.lcd.writeLine(line, column, text);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/text', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('E-Paper display not available');
    const { x = 0, y = 0, font = 0, text = '', color = 0 } = req.body;
    const result = await brickManager.lcd.drawText(x, y, font, text, color);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/line', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('E-Paper display not available');
    const { x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = 0 } = req.body;
    const result = await brickManager.lcd.drawLine(x1, y1, x2, y2, color);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/box', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('E-Paper display not available');
    const { x = 0, y = 0, width = 50, height = 50, filled = false, color = 0 } = req.body;
    const result = await brickManager.lcd.drawBox(x, y, width, height, filled, color);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/clear', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('E-Paper display not available');
    const result = await brickManager.lcd.clear();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/lcd/update', async (req, res) => {
  try {
    if (!brickManager.lcd) throw new Error('E-Paper display not available');
    const result = await brickManager.lcd.update();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/actors/button/state', async (req, res) => {
  try {
    if (!brickManager.button) throw new Error('Dual button not available');
    const data = await brickManager.button.getState();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/button/led', async (req, res) => {
  try {
    if (!brickManager.button) throw new Error('Dual button not available');
    const { button = 'left', state = true } = req.body;
    const result = await brickManager.button.setLED(button, state);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/display/text', async (req, res) => {
  try {
    if (!brickManager.display) throw new Error('E-Paper display not available');
    const { x = 16, y = 20, font = 0, text = 'Hello', color = 0, orientation = 0 } = req.body;
    const tf = require('tinkerforge');
    const fontType = Number.isInteger(font) ? font : tf.BrickletEPaper296x128.FONT_24X32;
    const colorVal = Number.isInteger(color) ? color : tf.BrickletEPaper296x128.COLOR_BLACK;
    const orient = Number.isInteger(orientation) ? orientation : tf.BrickletEPaper296x128.ORIENTATION_HORIZONTAL;
    const result = brickManager.display.drawText(x, y, fontType, colorVal, orient, text);
    brickManager.display.draw();
    res.json({ ...result, committed: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/display/message', async (req, res) => {
  try {
    if (!brickManager.display) throw new Error('E-Paper display not available');
    const { lines = ['Hello', 'World'] } = req.body;
    const result = await brickManager.display.displayMessage(lines);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/display/clear', async (req, res) => {
  try {
    if (!brickManager.display) throw new Error('E-Paper display not available');
    const result = brickManager.display.clear();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/actors/display/draw', async (req, res) => {
  try {
    if (!brickManager.display) throw new Error('E-Paper display not available');
    const result = brickManager.display.draw();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { app, brickManager };
