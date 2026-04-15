const Tinkerforge = require('tinkerforge');
const { LCD_DISPLAY_UID, HOST, PORT } = require('../../utilities/constants');

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;

    this.pages = [];
    this.currentPage = 0;
  }

  async init(uid) {
    this.bricklet = new Tinkerforge.BrickletLCD128x64(uid, this.ipcon);

    // ✅ Verbindung prüfen
    await new Promise((resolve, reject) => {
      this.bricklet.getIdentity((...args) => {
        if (!args || args.length === 0) {
          return reject(new Error('LCD not responding'));
        }
        resolve();
      });
    });

    console.log('✅ LCD initialized');

    // ✅ Backlight AN
    this.bricklet.setDisplayConfiguration(7, true);

    // ✅ Draw Status Debug
    this.bricklet.on(
      Tinkerforge.BrickletLCD128x64.CALLBACK_DRAW_STATUS,
      (status) => {
        const states = { 0: 'Idle', 1: 'Busy', 2: 'Error' };
        console.log('Draw Status:', states[status] || 'Unknown');
      }
    );

    // ✅ Swipe aktivieren
    this.bricklet.setTouchGestureCallbackConfiguration(200, true);

    this.bricklet.on(
      Tinkerforge.BrickletLCD128x64.CALLBACK_TOUCH_GESTURE,
      async (gesture) => {
        console.log('👉 GESTURE:', gesture);
        await this.handleGesture(gesture);
      }
    );
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

  setPages(pages) {
    this.pages = pages;
    this.currentPage = 0;
    this.renderPage();
  }

  async handleGesture(gesture) {
    const tf = Tinkerforge.BrickletLCD128x64;

    if (gesture === tf.GESTURE_RIGHT_TO_LEFT) {
      console.log('➡️ NEXT PAGE');
      this.currentPage = (this.currentPage + 1) % this.pages.length;
      await this.renderPage();
    }

    if (gesture === tf.GESTURE_LEFT_TO_RIGHT) {
      console.log('⬅️ PREVIOUS PAGE');
      this.currentPage =
        (this.currentPage - 1 + this.pages.length) % this.pages.length;
      await this.renderPage();
    }
  }

  async renderPage() {
    const page = this.pages[this.currentPage];
    if (!page) return;

    console.log(`🖥️ Render Page ${this.currentPage + 1}`);

    await this.clear();
    await this.sleep(50);

    console.log("AAA")

    let y = 0;
    const font = Tinkerforge.BrickletLCD128x64.FONT_6X8;
    const color = Tinkerforge.BrickletLCD128x64.COLOR_BLACK;

    console.log("Draw this Text: " + page.title + " " + font + " " + color);

    // 👉 Titel
    await this.drawText(0, y, font, color, `[${page.title}]`);
    y += 12;

    // 👉 Inhalt
    for (const line of page.lines) {
      await this.drawText(0, y, font, color, line);
      y += 10;
    }

    // 👉 Footer
    await this.drawText(
      20,
      26,
      font,
      color,
      `${this.currentPage + 1}/${this.pages.length}`
    );
  }

  async clear() {
    return new Promise((resolve, reject) => {
      this.bricklet.clearDisplay((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

/* ===========================
   🚀 START
=========================== */

const ipcon = new Tinkerforge.IPConnection();
const lcd = new LCDDisplay(ipcon);

const pages = [
  {
    title: "Klima",
    lines: ["Temp: 22.5 C", "Feuchte: 48 %"]
  },
  {
    title: "Bewegung",
    lines: ["Status: Bewegung", "Login: 14:32"]
  },
  {
    title: "Alarme",
    lines: ["Tür offen", "Fenster offen", "Rauch erkannt"]
  }
];

ipcon.connect(HOST, PORT, (error) => {
  if (error) {
    console.error('❌ Connect error:', error);
    process.exit(1);
  }
  console.log('🔌 CONNECT CALLED');
});

ipcon.on(
  Tinkerforge.IPConnection.CALLBACK_CONNECTED,
  async (reason) => {
    console.log('✅ CONNECTED EVENT:', reason);

    try {
      await lcd.init(LCD_DISPLAY_UID);
      lcd.setPages(pages);

      console.log('👉 Swipe auf dem Display zum Wechseln der Seiten');

    } catch (err) {
      console.error('❌ LCD error:', err);
    }
  }
);

// Graceful shutdown
process.on('SIGINT', () => {
  ipcon.disconnect();
  process.exit(0);
});

process.on('SIGTERM', () => {
  ipcon.disconnect();
  process.exit(0);
});