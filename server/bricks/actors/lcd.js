const { LCD_DISPLAY_UID } = require('../../utilities/constants');
const Tinkerforge = require('tinkerforge');

const SCREEN_WIDTH = 128;
const SCREEN_HEIGHT = 64;

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = LCD_DISPLAY_UID;
    this.Tinkerforge = Tinkerforge;
  }

  async init() {
    this.bricklet = new this.Tinkerforge.BrickletLCD128x64(this.uid, this.ipcon);

    this.bricklet.on(
      this.Tinkerforge.BrickletLCD128x64.CALLBACK_DRAW_STATUS,
      (status) => this.onDrawStatus(status)
    );
  }

  onDrawStatus(drawStatus) {
    const states = { 0: 'Idle', 1: 'Busy', 2: 'Error' };
    console.log('Draw Status:', states[drawStatus] || 'Unknown');
  }

  async clear() {
    return new Promise((resolve, reject) => {
      this.bricklet.clearDisplay((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async drawText(x, y, font, color, text) {
    return new Promise((resolve, reject) => {
      this.bricklet.drawText(x, y, font, color, text, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async displayMessage(lines = []) {
    await this.clear();

    let y = 5;
    const font = this.Tinkerforge.BrickletLCD128x64.FONT_6X8;
    const color = this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK;

    for (const line of lines) {
      await this.drawText(5, y, font, color, line);
      y += 10;
    }
  }

  async writeLine(line = 0, column = 0, text = '') {
    const x = column * 6;
    const y = line * 10;

    return this.drawText(
      x,
      y,
      this.Tinkerforge.BrickletLCD128x64.FONT_6X8,
      this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK,
      text
    );
  }
}

module.exports = LCDDisplay;

/* ===========================
   STANDALONE TEST
=========================== */

if (require.main === module) {
  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const ipcon = new Tinkerforge.IPConnection();
  const lcd = new LCDDisplay(ipcon);

  async function shutdown() {
    try {
      await lcd.clear();
    } catch (_) {}

    try {
      ipcon.disconnect();
    } catch (_) {}
  }

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error('Connect error:', error);
      process.exit(1);
    }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    try {
      await lcd.init();

      const b = lcd.bricklet;

      /* ========= TOUCH ========= */

      b.setTouchPositionCallbackConfiguration(100, true);
      b.setTouchGestureCallbackConfiguration(100, true);

      b.on(
        Tinkerforge.BrickletLCD128x64.CALLBACK_TOUCH_POSITION,
        (pressure, x, y, age) => {
          console.log('Touch:', x, y, 'Pressure:', pressure);
        }
      );

      b.on(
        Tinkerforge.BrickletLCD128x64.CALLBACK_TOUCH_GESTURE,
        (gesture) => {
          const map = {
            [Tinkerforge.BrickletLCD128x64.GESTURE_LEFT_TO_RIGHT]: '→',
            [Tinkerforge.BrickletLCD128x64.GESTURE_RIGHT_TO_LEFT]: '←',
            [Tinkerforge.BrickletLCD128x64.GESTURE_TOP_TO_BOTTOM]: '↓',
            [Tinkerforge.BrickletLCD128x64.GESTURE_BOTTOM_TO_TOP]: '↑'
          };

          console.log('Gesture:', map[gesture] || gesture);
        }
      );

      /* ========= DISPLAY TEST ========= */

      await lcd.displayMessage([
        'LCD bereit',
        'Touch testen!',
        'Swipe versuchen'
      ]);

      /* ========= GUI ========= */

      await lcd.clear();
      b.removeAllGUI();

      b.setGUIButton(0, 0, 0, 60, 20, 'Button');

      b.setGUISlider(
        0,
        0,
        30,
        60,
        Tinkerforge.BrickletLCD128x64.DIRECTION_HORIZONTAL,
        50
      );

      b.setGUIGraphConfiguration(
        0,
        Tinkerforge.BrickletLCD128x64.GRAPH_TYPE_LINE,
        62,
        0,
        60,
        52,
        'X',
        'Y'
      );

      b.setGUIGraphData(0, [20, 40, 60, 80, 100, 20, 40, 60, 80, 100]);

      b.setGUITabConfiguration(
        Tinkerforge.BrickletLCD128x64.CHANGE_TAB_ON_CLICK_AND_SWIPE,
        false
      );

      ['Tab A', 'Tab B', 'Tab C', 'Tab D', 'Tab E']
        .forEach((t, i) => b.setGUITabText(i, t));

      /* ========= GUI CALLBACKS ========= */

      b.setGUIButtonPressedCallbackConfiguration(100, true);
      b.setGUISliderValueCallbackConfiguration(100, true);
      b.setGUITabSelectedCallbackConfiguration(100, true);

      b.on(
        Tinkerforge.BrickletLCD128x64.CALLBACK_GUI_BUTTON_PRESSED,
        (index, pressed) => {
          console.log('Button', index, pressed ? 'pressed' : 'released');
        }
      );

      b.on(
        Tinkerforge.BrickletLCD128x64.CALLBACK_GUI_SLIDER_VALUE,
        (index, value) => {
          console.log('Slider', index, value);
        }
      );

      b.on(
        Tinkerforge.BrickletLCD128x64.CALLBACK_GUI_TAB_SELECTED,
        (index) => {
          console.log('Tab selected:', index);
        }
      );

      console.log(`✅ LCD läuft auf ${host}:${port}`);

    } catch (err) {
      console.error('LCD error:', err);
      await shutdown();
      process.exit(1);
    }
  });

  process.on('SIGINT', async () => {
    await shutdown();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await shutdown();
    process.exit(0);
  });
}