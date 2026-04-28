/**
 * LCD State-Machine Display
 *
 * Screens:
 *   login   → "Bitte einloggen..."
 *   welcome → "Willkommen [name]"  (auto → home nach TRANSITION_MS)
 *   home    → 2×3 GUI-Button Grid
 *   sensor  → Graph-Ansicht des gewählten Sensors
 *   goodbye → "Auf Wiedersehen [name]" (auto → login nach TRANSITION_MS)
 *
 * Navigation:
 *   Home   → Tap Button        → Sensor-Screen
 *   Home   → Tap "Logout"      → Goodbye → Login
 *   Sensor → Swipe ↑ oder ↓   → zurück zum Home-Screen
 *   Sensor → Swipe →           → nächster Sensor
 *   Sensor → Swipe ←           → vorheriger Sensor
 *
 * Auth-Integration (von außen):
 *   const { lcd } = require('./lcd-display');
 *   lcd.login('Max Mustermann');
 *   lcd.logout();
 */

'use strict';

const Tinkerforge = require('tinkerforge');
const { LCD_DISPLAY_UID, HOST, PORT } = require('../../utilities/constants');

process.env.SENSORS_SILENT = '1';

const TemperatureSensor = require('../sensors/temperature');
const LightSensor       = require('../sensors/light');
const HumiditySensor    = require('../sensors/humidity');
const MotionSensor      = require('../sensors/motion');

// ── Screen-Identifiers ────────────────────────────────────────────────────────

const SCREEN = Object.freeze({
  LOGIN:   'login',
  WELCOME: 'welcome',
  HOME:    'home',
  SENSOR:  'sensor',
  GOODBYE: 'goodbye',
});

// ── Layout-Konstanten ─────────────────────────────────────────────────────────

const DISP_W        = 128;
const GRAPH_X       = 0;
const GRAPH_Y       = 10;
const GRAPH_W       = 128;
const GRAPH_H       = 44;
const READ_MS       = 2000;
const RENDER_MS     = 2000;
const TRANSITION_MS = 2500; // Anzeigedauer von Welcome / Goodbye in ms

// ── Home-Screen: Button-Layout ────────────────────────────────────────────────
//
//  ┌──────────────┬───────────────┐
//  │ Temperatur   │ Helligkeit    │  y=0,  h=21
//  ├──────────────┼───────────────┤
//  │ Luftfeuchte  │ Hum.Temp.     │  y=22, h=21
//  ├──────────────┼───────────────┤
//  │ Bewegung     │ Logout        │  y=44, h=20
//  └──────────────┴───────────────┘
//
//  Spalte A: x=0,  w=62   (x+w = 62  ≤ 128 ✓)
//  Spalte B: x=65, w=63   (x+w = 128 ≤ 128 ✓)  3 px Spalt zwischen Spalten
//  Zeile 1:  y=0,  h=21   (y+h = 21  ≤ 64  ✓)
//  Zeile 2:  y=22, h=21   (y+h = 43  ≤ 64  ✓)
//  Zeile 3:  y=44, h=20   (y+h = 64  ≤ 64  ✓)

const HOME_BUTTONS = [
  { index: 0, label: 'Temperatur',  x:  0, y:  0, w: 62, h: 21, pageIdx: 0    },
  { index: 1, label: 'Helligkeit',  x: 65, y:  0, w: 63, h: 21, pageIdx: 1    },
  { index: 2, label: 'Luftfeuchte', x:  0, y: 22, w: 62, h: 21, pageIdx: 2    },
  { index: 3, label: 'Hum.Temp.',   x: 65, y: 22, w: 63, h: 21, pageIdx: 3    },
  { index: 4, label: 'Bewegung',    x:  0, y: 44, w: 62, h: 20, pageIdx: 4    },
  { index: 5, label: 'Logout',      x: 65, y: 44, w: 63, h: 20, pageIdx: null }, // null = Logout
];

// ── RollingBuffer ─────────────────────────────────────────────────────────────

class RollingBuffer {
  constructor(size) { this._max = size; this._data = []; }
  push(v)       { this._data.push(v); if (this._data.length > this._max) this._data.shift(); }
  get values()  { return this._data; }
  validValues() { return this._data.filter(v => v != null && !Number.isNaN(v)); }
}

// ── Bresenham-Linie auf flat boolean[] ───────────────────────────────────────

function bLine(px, w, h, x1, y1, x2, y2) {
  let dx = Math.abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
  let dy = -Math.abs(y2 - y1), sy = y1 < y2 ? 1 : -1;
  let err = dx + dy;
  for (;;) {
    if (x1 >= 0 && x1 < w && y1 >= 0 && y1 < h) px[y1 * w + x1] = true;
    if (x1 === x2 && y1 === y2) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x1 += sx; }
    if (e2 <= dx) { err += dx; y1 += sy; }
  }
}

// ── Pages (Sensor-Konfiguration) ──────────────────────────────────────────────

function makePages() {
  return [
    {
      title: 'Temperatur', unit: '\xb0C', isBoolean: false, fixedMin: null, fixedMax: null,
      buffer:   new RollingBuffer(GRAPH_W),
      getValue: s => s.temp?.lastReading?.celsius ?? null,
      format:   v => `${v.toFixed(1)} \xb0C`,
    },
    {
      title: 'Helligkeit', unit: 'lx', isBoolean: false, fixedMin: null, fixedMax: null,
      buffer:   new RollingBuffer(GRAPH_W),
      getValue: s => s.light?.lastReading?.lux ?? null,
      format:   v => `${v.toFixed(0)} lx`,
    },
    {
      title: 'Luftfeuchte', unit: '%', isBoolean: false, fixedMin: 0, fixedMax: 100,
      buffer:   new RollingBuffer(GRAPH_W),
      getValue: s => s.humidity?.lastReading?.relativeHumidity ?? null,
      format:   v => `${v.toFixed(1)} %RH`,
    },
    {
      title: 'Hum. Temp.', unit: '\xb0C', isBoolean: false, fixedMin: null, fixedMax: null,
      buffer:   new RollingBuffer(GRAPH_W),
      getValue: s => s.humidity?.lastTemperature?.celsius ?? null,
      format:   v => `${v.toFixed(1)} \xb0C`,
    },
    {
      title: 'Bewegung', unit: '', isBoolean: true, fixedMin: 0, fixedMax: 1,
      buffer:   new RollingBuffer(GRAPH_W),
      getValue: s => s.motion?.lastReading != null ? (s.motion.lastReading.motion ? 1 : 0) : null,
      format:   v => (v ? 'ERKANNT' : 'Klar'),
    },
  ];
}

// ── Graph-Pixel-Builder ───────────────────────────────────────────────────────
// Gibt ein flat boolean[] zurück – direkt kompatibel mit writePixels().

function buildGraphPixels(page) {
  const px   = new Array(GRAPH_W * GRAPH_H).fill(false);
  const vals = page.buffer.validValues();
  if (vals.length < 2) return px;

  let lo = page.fixedMin ?? Math.min(...vals);
  let hi = page.fixedMax ?? Math.max(...vals);
  if (lo === hi) { lo -= 1; hi += 1; }
  const range = hi - lo;

  const toY = v =>
    Math.round((GRAPH_H - 1) - ((Math.max(lo, Math.min(hi, v)) - lo) / range) * (GRAPH_H - 2));

  const buf      = page.buffer.values;
  const startIdx = Math.max(0, buf.length - GRAPH_W);
  let prevX = null, prevY = null;

  for (let i = startIdx; i < buf.length; i++) {
    const v = buf[i];
    if (v == null || Number.isNaN(v)) { prevX = null; prevY = null; continue; }
    const x = i - startIdx;
    const y = toY(v);

    if (prevX !== null) {
      if (page.isBoolean) {
        bLine(px, GRAPH_W, GRAPH_H, prevX, prevY, prevX, y); // vertikal
        bLine(px, GRAPH_W, GRAPH_H, prevX, y, x, y);         // horizontal
      } else {
        bLine(px, GRAPH_W, GRAPH_H, prevX, prevY, x, y);
      }
    }
    prevX = x; prevY = y;
  }
  return px;
}

// ── LCDDisplay (State Machine) ────────────────────────────────────────────────

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon    = ipcon;
    this.bricklet = null;
    this.pages    = makePages();

    this.state = {
      screen:       SCREEN.LOGIN,
      selectedPage: 0,
      username:     '',
    };

    this.busy             = false;
    this._transitionTimer = null;
    this.onLogoutRequest  = null; // Callback für Logout-Button
  }

  // ── Initialisierung ───────────────────────────────────────────────────────

  async init(uid) {
    const tf = Tinkerforge.BrickletLCD128x64;
    this.bricklet = new tf(uid, this.ipcon);

    await new Promise((resolve, reject) => {
      this.bricklet.getIdentity((...args) => {
        if (!args || args.length === 0) return reject(new Error('LCD nicht erreichbar'));
        resolve();
      });
    });

    // contrast=14  backlight=100 (max. Helligkeit)  invert=false (weißer Hintergrund)
    // automaticDraw=true (sofort auf Display schreiben)
    this.bricklet.setDisplayConfiguration(14, 100, false, true);

    // Gesten-Callback (Navigation im Sensor-Screen)
    this.bricklet.setTouchGestureCallbackConfiguration(100, true);
    this.bricklet.on(
      tf.CALLBACK_TOUCH_GESTURE,
      (gesture) => this._onGesture(gesture)
    );

    // GUI-Button-Callback (Home-Screen-Buttons)
    this.bricklet.setGUIButtonPressedCallbackConfiguration(100, true);
    this.bricklet.on(
      tf.CALLBACK_GUI_BUTTON_PRESSED,
      (index, pressed) => this._onButtonPressed(index, pressed)
    );

    console.log('✅ LCD bereit');
  }

  // ── Öffentliche Auth-API ──────────────────────────────────────────────────

  /**
   * Einloggen. Zeigt Welcome-Screen, dann automatisch Home.
   * @param {string} username  Anzeigename des Nutzers
   */
  login(username = 'Benutzer') {
    if (this.state.screen !== SCREEN.LOGIN) return;
    this.state.username = String(username).substring(0, 20);
    this._goTo(SCREEN.WELCOME);

    clearTimeout(this._transitionTimer);
    this._transitionTimer = setTimeout(
      () => this._goTo(SCREEN.HOME),
      TRANSITION_MS
    );
  }

  /**
   * Ausloggen. Zeigt Goodbye-Screen, dann automatisch Login.
   */
  logout() {
    if (this.state.screen === SCREEN.LOGIN || this.state.screen === SCREEN.GOODBYE) return;
    clearTimeout(this._transitionTimer);
    this._goTo(SCREEN.GOODBYE);

    this._transitionTimer = setTimeout(() => {
      this.state.username     = '';
      this.state.selectedPage = 0;
      this._goTo(SCREEN.LOGIN);
    }, TRANSITION_MS);
  }

  // ── Interne Navigation ────────────────────────────────────────────────────

  _goTo(screen) {
    this.state.screen = screen;
    console.log(`📺  Screen → ${screen}`);
    this.render().catch(console.error);
  }

  // ── Touch: Gesten ────────────────────────────────────────────────────────
  //   Nur auf Sensor-Screen aktiv:
  //     Swipe ↑ / ↓  → Home
  //     Swipe →       → nächster Sensor
  //     Swipe ←       → vorheriger Sensor

  _onGesture(gesture) {
    const tf = Tinkerforge.BrickletLCD128x64;
    if (this.state.screen !== SCREEN.SENSOR) return;

    switch (gesture) {
      case tf.GESTURE_TOP_TO_BOTTOM:
      case tf.GESTURE_BOTTOM_TO_TOP:
        this._goTo(SCREEN.HOME);
        break;

      case tf.GESTURE_RIGHT_TO_LEFT:
        this.state.selectedPage = (this.state.selectedPage + 1) % this.pages.length;
        this._goTo(SCREEN.SENSOR);
        break;

      case tf.GESTURE_LEFT_TO_RIGHT:
        this.state.selectedPage = (this.state.selectedPage - 1 + this.pages.length) % this.pages.length;
        this._goTo(SCREEN.SENSOR);
        break;
    }
  }

  // ── Touch: GUI-Buttons ────────────────────────────────────────────────────
  //   Nur auf Home-Screen aktiv:
  //     Sensor-Button → Sensor-Screen mit gewähltem Index
  //     Logout-Button → logout()

  _onButtonPressed(index, pressed) {
    if (!pressed)                          return; // nur Press-Down, nicht Release
    if (this.state.screen !== SCREEN.HOME) return; // nur auf Home aktiv

    const btn = HOME_BUTTONS.find(b => b.index === index);
    if (!btn) return;

    if (btn.pageIdx === null) {
      if (this.onLogoutRequest) {
        this.onLogoutRequest();
      } else {
        this.logout();
      }
    } else {
      this.state.selectedPage = btn.pageIdx;
      this._goTo(SCREEN.SENSOR);
    }
  }

  // ── Render-Dispatcher ─────────────────────────────────────────────────────

  async render() {
    if (this.busy) return;
    this.busy = true;
    try {
      this.bricklet.clearDisplay();
      this.bricklet.removeAllGUI(); // GUI-Buttons löschen (Sensor-/Welcome-/etc.-Screens haben keine)

      switch (this.state.screen) {
        case SCREEN.LOGIN:   this._renderLogin();   break;
        case SCREEN.WELCOME: this._renderWelcome(); break;
        case SCREEN.HOME:    this._renderHome();    break;
        case SCREEN.SENSOR:  this._renderSensor();  break;
        case SCREEN.GOODBYE: this._renderGoodbye(); break;
      }
    } catch (err) {
      console.error('❌ Render-Fehler:', err.message);
    } finally {
      this.busy = false;
    }
  }

  // ────────────────────────────────────────────────────────────────────────────
  //  Screen-Renderer
  // ────────────────────────────────────────────────────────────────────────────

  // ── Login ─────────────────────────────────────────────────────────────────

  _renderLogin() {
    const { COLOR_BLACK: BLK, FONT_6X16 } = Tinkerforge.BrickletLCD128x64;
    this.bricklet.drawText(4, 12, FONT_6X16, BLK, 'Bitte');
    this.bricklet.drawText(4, 34, FONT_6X16, BLK, 'einloggen...');
  }

  // ── Welcome ───────────────────────────────────────────────────────────────

  _renderWelcome() {
    const { COLOR_BLACK: BLK, FONT_6X16, FONT_6X8 } = Tinkerforge.BrickletLCD128x64;
    const name = this.state.username.substring(0, 14);
    this.bricklet.drawText(4,  4, FONT_6X16, BLK, 'Willkommen');
    this.bricklet.drawText(4, 26, FONT_6X16, BLK, name || 'Benutzer');
    this.bricklet.drawText(4, 50, FONT_6X8,  BLK, '(wird geladen...)');
  }

  // ── Home ──────────────────────────────────────────────────────────────────

  _renderHome() {
    for (const btn of HOME_BUTTONS) {
      this.bricklet.setGUIButton(btn.index, btn.x, btn.y, btn.w, btn.h, btn.label);
    }
  }

  // ── Sensor ────────────────────────────────────────────────────────────────

  _renderSensor() {
    const { COLOR_BLACK: BLK, FONT_6X8 } = Tinkerforge.BrickletLCD128x64;
    const page = this.pages[this.state.selectedPage];

    this.bricklet.drawText(0, 0, FONT_6X8, BLK, page.title.substring(0, 13));
    this.bricklet.drawText(DISP_W - 5 * 6, 0, FONT_6X8, BLK, '\x12=Hm');
    this.bricklet.drawLine(0, 9, DISP_W - 1, 9, BLK);

    const validVals = page.buffer.validValues();

    if (validVals.length >= 2) {
      const lo = page.fixedMin ?? Math.min(...validVals);
      const hi = page.fixedMax ?? Math.max(...vals);

      this.bricklet.writePixels(
        GRAPH_X, GRAPH_Y,
        GRAPH_X + GRAPH_W - 1, GRAPH_Y + GRAPH_H - 1,
        buildGraphPixels(page)
      );

      this.bricklet.drawLine(0, GRAPH_Y + GRAPH_H, DISP_W - 1, GRAPH_Y + GRAPH_H, BLK);

      const current    = validVals[validVals.length - 1];
      const currentStr = page.format(current);
      this.bricklet.drawText(0, 56, FONT_6X8, BLK, currentStr.substring(0, 14));

      if (!page.isBoolean) {
        const rangeStr = `${lo.toFixed(0)}-${hi.toFixed(0)}${page.unit}`;
        const rx = DISP_W - rangeStr.length * 6;
        if (rx > currentStr.length * 6 + 4) {
          this.bricklet.drawText(rx, 56, FONT_6X8, BLK, rangeStr);
        }
      }

    } else {
      const msg = validVals.length === 0 ? 'Kein Signal...' : 'Sammle Daten...';
      this.bricklet.drawText(8, 30, FONT_6X8, BLK, msg);
    }
  }

  // ── Goodbye ───────────────────────────────────────────────────────────────

  _renderGoodbye() {
    const { COLOR_BLACK: BLK, FONT_6X16, FONT_6X8 } = Tinkerforge.BrickletLCD128x64;
    const name = this.state.username.substring(0, 20);
    this.bricklet.drawText(4,  4, FONT_6X16, BLK, 'Auf');
    this.bricklet.drawText(4, 26, FONT_6X16, BLK, 'Wiedersehen');
    if (name) {
      this.bricklet.drawText(4, 50, FONT_6X8, BLK, `${name}!`);
    }
  }
}

module.exports = LCDDisplay;

if (require.main === module) {
  const ipcon = new Tinkerforge.IPConnection();
  const lcd   = new LCDDisplay(ipcon);

  const sensors = {
    temp:     new TemperatureSensor(ipcon),
    light:    new LightSensor(ipcon),
    humidity: new HumiditySensor(ipcon),
    motion:   new MotionSensor(ipcon),
  };

  let readTimer   = null;
  let renderTimer = null;

  async function tick() {
    for (const sensor of Object.values(sensors)) {
      if (typeof sensor.readOnce === 'function') {
        try { await sensor.readOnce(); } catch (_) {}
      }
    }
    for (const page of lcd.pages) {
      page.buffer.push(page.getValue(sensors));
    }
  }

  ipcon.connect(HOST, PORT, err => {
    if (err) { console.error('❌ Verbindungsfehler:', err); process.exit(1); }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    console.log('✅ Mit Brick Daemon verbunden');

    for (const [name, sensor] of Object.entries(sensors)) {
      try   { await sensor.init(); console.log(`   ✓ ${name} bereit`); }
      catch (err) { console.warn(`   ⚠  ${name} nicht verfügbar: ${err.message}`); }
    }

    try   { await lcd.init(LCD_DISPLAY_UID); }
    catch (err) { console.error('❌ LCD-Init fehlgeschlagen:', err.message); process.exit(1); }

    await lcd.render();
    readTimer = setInterval(() => tick().catch(console.error), READ_MS);
    renderTimer = setInterval(() => {
      if (lcd.state.screen === SCREEN.SENSOR) {
        lcd.render().catch(console.error);
      }
    }, RENDER_MS);
  });

  function shutdown() {
    clearInterval(readTimer);
    clearInterval(renderTimer);
    clearTimeout(lcd._transitionTimer);
    for (const sensor of Object.values(sensors)) {
      if (typeof sensor.stopPolling === 'function') sensor.stopPolling();
    }
    try { ipcon.disconnect(); } catch (_) {}
  }

  process.on('SIGINT',  () => { shutdown(); process.exit(0); });
  process.on('SIGTERM', () => { shutdown(); process.exit(0); });
}