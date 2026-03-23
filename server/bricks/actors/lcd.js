const { LCD_DISPLAY_UID } = require('../../utilities/constants');

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = LCD_DISPLAY_UID;
    this.Tinkerforge = require('tinkerforge');
  }

  async init() {
    this.bricklet = new this.Tinkerforge.BrickletLCD128x64(this.uid, this.ipcon);
    
    // Register draw status callback
    this.bricklet.on(this.Tinkerforge.BrickletLCD128x64.CALLBACK_DRAW_STATUS, (drawStatus) => {
      this.onDrawStatus(drawStatus);
    });
    
    // Initialize with welcome message
    try {
      this.clear();
      console.log(`📺 LCD Display initialized`);
    } catch (e) {
      console.warn(`⚠️  Could not initialize display: ${e.message}`);
    }
  }

  onDrawStatus(drawStatus) {
    const states = { 0: 'Idle', 1: 'Busy', 2: 'Error' };
    console.log(`📺 Display Status: ${states[drawStatus] || 'Unknown'}`);
  }

  drawText(x, y, font, color, text) {
    return new Promise((resolve, reject) => {
      this.bricklet.drawText(x, y, font, color, text, (error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  drawLine(x1, y1, x2, y2, color) {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.drawLine(x1, y1, x2, y2, color);
  }

  drawBox(x1, y1, x2, y2, filled, color) {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.drawBox(x1, y1, x2, y2, filled, color);
  }

  drawPixel(x, y, color) {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.drawPixel(x, y, color);
  }

  clear() {
    return new Promise((resolve, reject) => {
      this.bricklet.clearDisplay((error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  async displayMessage(lines = []) {
    try {
      this.clear();
      
      let yPos = 10;
      const fontType = this.Tinkerforge.BrickletLCD128x64.FONT_12X32;
      const color = this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK;
      
      for (const line of lines) {
        this.drawText(10, yPos, fontType, color, line);
        yPos += 30;
      }
      
      return {
        actor: 'lcd',
        action: 'displayMessage',
        lines,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(`❌ Display message error: ${error.message}`);
      throw error;
    }
  }

  async writeLine(line = 0, column = 0, text = 'Hello Luca') {
    const x = column * 12;
    const y = line * 16;

    return this.drawText(x, y, this.Tinkerforge.BrickletLCD128x64.FONT_24X32,
                    this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK,
                    text);
  }
}

module.exports = LCDDisplay;

// Standalone mode: connect directly to remote TinkerForge server and set RGB button color.
if (require.main === module) {
  const Tinkerforge = require('tinkerforge');
  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const ipcon = new Tinkerforge.IPConnection();
  const lcd = new LCDDisplay(ipcon);

  function shutdown(ipcon, lcd) {
    try {
      lcd.clear();
    } catch (_) {}

    try {
      ipcon.disconnect();
    } catch (_) {}
  }

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error(`Connect error: ${error}`);
      process.exit(1);
    }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    try {
      await lcd.init();
      // await lcd.writeLine(1, 1, "LUCA CHRIS STRÄTER ID");
      await lcd.displayMessage(["Dies ist ein Test", "Ist das Zeile 2?", "Zeile 3"])

      console.log(`LCD done via ${host}:${port}`);
    } catch (err) {
      console.error(`LCD error: ${err.message}`);
      shutdown(ipcon, lcd);
      process.exit(1);
    }
  });

  process.on('SIGINT', () => {
    shutdown(ipcon, lcd);
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    shutdown(ipcon, lcd);
    process.exit(0);
  });
}