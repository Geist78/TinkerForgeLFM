const { DISPLAY_UID } = require('../../utilities/constants');

class EPaperDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = DISPLAY_UID;
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
                    'TinkerForge');
      this.drawText(16, 60, this.Tinkerforge.BrickletEPaper296x128.FONT_18X24,
                    this.Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
                    this.Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
                    'LFM Server');
      this.draw();
      console.log(`📄 Display initialized with welcome message`);
    } catch (e) {
      console.warn(`⚠️  Could not display welcome message: ${e.message}`);
    }
  }

  onDrawStatus(drawStatus) {
    const states = { 0: 'Idle', 1: 'Busy', 2: 'Error' };
    console.log(`📄 E-Paper Status: ${states[drawStatus] || 'Unknown'}`);
  }

  fillDisplay(color) {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.fillDisplay(color);
    console.log(`📄 Display filled with color: ${color}`);
  }

  drawText(x, y, font, color, orientation, text) {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.drawText(x, y, font, color, orientation, text);
    console.log(`📄 Text at (${x},${y}): "${text}"`);
    return {
      actor: 'ePaper',
      action: 'drawText',
      x, y, text,
      timestamp: new Date().toISOString()
    };
  }

  drawLine(x1, y1, x2, y2, color) {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.drawLine(x1, y1, x2, y2, color);
    console.log(`📄 Line from (${x1},${y1}) to (${x2},${y2})`);
    return {
      actor: 'ePaper',
      action: 'drawLine',
      x1, y1, x2, y2,
      timestamp: new Date().toISOString()
    };
  }

  drawBox(x1, y1, x2, y2, filled, color) {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.drawBox(x1, y1, x2, y2, filled, color);
    const width = x2 - x1;
    const height = y2 - y1;
    console.log(`📄 Box: (${x1},${y1}) ${width}x${height}`);
    return {
      actor: 'ePaper',
      action: 'drawBox',
      x1, y1, x2, y2, filled,
      timestamp: new Date().toISOString()
    };
  }

  drawPixel(x, y, color) {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.drawPixel(x, y, color);
    return {
      actor: 'ePaper',
      action: 'drawPixel',
      x, y,
      timestamp: new Date().toISOString()
    };
  }

  clear() {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.fillDisplay(this.Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);
    console.log(`📄 Display cleared`);
    return {
      actor: 'ePaper',
      action: 'clear',
      timestamp: new Date().toISOString()
    };
  }

  draw() {
    if (!this.bricklet) throw new Error('E-Paper display not initialized');
    this.bricklet.draw();
    console.log(`📄 Display updated`);
    return {
      actor: 'ePaper',
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
        actor: 'ePaper',
        action: 'displayMessage',
        lines,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(`❌ Display message error: ${error.message}`);
      throw error;
    }
  }
}

module.exports = EPaperDisplay;

// Standalone mode: connect directly to remote TinkerForge server and write text.
if (require.main === module) {
  const Tinkerforge = require('tinkerforge');
  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);
  const lines = process.argv.slice(2);

  const ipcon = new Tinkerforge.IPConnection();
  const display = new EPaperDisplay(ipcon);

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error(`Connect error: ${error}`);
      process.exit(1);
    }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    try {
      display.bricklet = new Tinkerforge.BrickletEPaper296x128(display.uid, ipcon);

      if (lines.length > 0) {
        await display.displayMessage(lines);
      } else {
        display.fillDisplay(Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);
        display.drawText(
          16,
          48,
          Tinkerforge.BrickletEPaper296x128.FONT_24X32,
          Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
          Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
          'Hello World'
        );
        display.draw();
      }

      console.log(`Display write done via ${host}:${port}`);
    } catch (err) {
      console.error(`Display error: ${err.message}`);
    } finally {
      setTimeout(() => {
        ipcon.disconnect();
        process.exit(0);
      }, 3000);
    }
  });
}
