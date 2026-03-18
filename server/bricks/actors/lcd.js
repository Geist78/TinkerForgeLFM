const { LCD_DISPLAY_UID } = require('../../utilities/constants');

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = LCD_DISPLAY_UID;
    this.Tinkerforge = require('tinkerforge');
  }

  async init() {
    console.log("AAA")
    this.bricklet = new this.Tinkerforge.BrickletLCD128x64(this.uid, this.ipcon);
    
    // Register draw status callback
    this.bricklet.on(this.Tinkerforge.BrickletLCD128x64.CALLBACK_DRAW_STATUS, (drawStatus) => {
      this.onDrawStatus(drawStatus);
    });
    
    // Initialize with welcome message
    try {
      this.fillDisplay(this.Tinkerforge.BrickletLCD128x64.COLOR_WHITE);
      this.drawText(16, 20, this.Tinkerforge.BrickletLCD128x64.FONT_24X32,
                    this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK,
                    this.Tinkerforge.BrickletLCD128x64.ORIENTATION_HORIZONTAL,
                    'Ready!');
      this.draw();
      console.log(`📺 LCD Display initialized`);
    } catch (e) {
      console.warn(`⚠️  Could not initialize display: ${e.message}`);
    }
  }

  onDrawStatus(drawStatus) {
    const states = { 0: 'Idle', 1: 'Busy', 2: 'Error' };
    console.log(`📺 Display Status: ${states[drawStatus] || 'Unknown'}`);
  }

  fillDisplay(color) {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.fillDisplay(color);
  }

  drawText(x, y, font, color, orientation, text) {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.drawText(x, y, font, color, orientation, text);
    console.log(`📺 Text: "${text}"`);
    return {
      actor: 'lcd',
      action: 'drawText',
      text,
      timestamp: new Date().toISOString()
    };
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
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.fillDisplay(this.Tinkerforge.BrickletLCD128x64.COLOR_WHITE);
    console.log(`📺 Display cleared`);
    return {
      actor: 'lcd',
      action: 'clear',
      timestamp: new Date().toISOString()
    };
  }

  draw() {
    if (!this.bricklet) throw new Error('Display not initialized');
    this.bricklet.draw();
    return {
      actor: 'lcd',
      action: 'draw',
      timestamp: new Date().toISOString()
    };
  }

  async displayMessage(lines = []) {
    try {
      this.fillDisplay(this.Tinkerforge.BrickletLCD128x64.COLOR_WHITE);
      
      let yPos = 10;
      const fontType = this.Tinkerforge.BrickletLCD128x64.FONT_18X24;
      const color = this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK;
      const orientation = this.Tinkerforge.BrickletLCD128x64.ORIENTATION_HORIZONTAL;
      
      for (const line of lines) {
        this.drawText(10, yPos, fontType, color, orientation, line);
        yPos += 30;
      }
      
      this.draw();
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
    // For E-Paper, calculate pixel position from line/column
    const x = column * 12;
    const y = line * 16;
    return this.drawText(x, y, 0, this.Tinkerforge.BrickletLCD128x64.COLOR_BLACK,
                         this.Tinkerforge.BrickletLCD128x64.ORIENTATION_HORIZONTAL, text);
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

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error(`Connect error: ${error}`);
      process.exit(1);
    }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    try {
      await lcd.init();
      lcd.writeLine(0, 0, "Maik");
      console.log(`LCD done via ${host}:${port}`);
    } catch (err) {
      console.error(`LCD error: ${err.message}`);
    } finally {
      setTimeout(() => {
        ipcon.disconnect();
        process.exit(0);
      }, 1000);
    }
  });
}