const { LCD_DISPLAY_UID } = require('../../utilities/constants');

class LCDDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = LCD_DISPLAY_UID;
    this.Tinkerforge = require('tinkerforge');
  }

  async init() {
    this.bricklet = new this.Tinkerforge.BrickletEPaper296x128(this.uid, this.ipcon);
    
    // Register draw status callback
    this.bricklet.on(this.Tinkerforge.BrickletEPaper296x128.CALLBACK_DRAW_STATUS, (drawStatus) => {
      this.onDrawStatus(drawStatus);
    });
    
    // Initialize with welcome message
    try {
      this.fillDisplay(this.Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);
      this.drawText(16, 20, this.Tinkerforge.BrickletEPaper296x128.FONT_24X32,
                    this.Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
                    this.Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
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
    this.bricklet.fillDisplay(this.Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);
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
      this.fillDisplay(this.Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);
      
      let yPos = 10;
      const fontType = this.Tinkerforge.BrickletEPaper296x128.FONT_18X24;
      const color = this.Tinkerforge.BrickletEPaper296x128.COLOR_BLACK;
      const orientation = this.Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL;
      
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
    return this.drawText(x, y, 0, this.Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
                         this.Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL, text);
  }
}

module.exports = LCDDisplay;