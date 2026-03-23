const { RGB_BUTTON_UID } = require('../../utilities/constants');

class RGBButton {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = RGB_BUTTON_UID;
    this.Tinkerforge = require('tinkerforge');
  }

  async init() {
    this.bricklet = new this.Tinkerforge.BrickletRGBLEDButton(this.uid, this.ipcon);

    this.bricklet.on(this.Tinkerforge.BrickletRGBLEDButton.CALLBACK_BUTTON_STATE_CHANGED, (state) => {
      this.onButtonStateChanged(state);
    });

    // Default idle color is green.
    this.setGreen();

    return true;
  }

  onButtonStateChanged(state) {
    const label = state === 0 ? 'released' : 'pressed';
    if (state === 0) {
      this.setGreen();
    } else {
      this.setRed();
    }
    console.log(`RGB button ${label}`);
  }

  setColor(r, g, b) {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    const red   = Math.max(0, Math.min(255, Number(r) || 0));
    const green = Math.max(0, Math.min(255, Number(g) || 0));
    const blue  = Math.max(0, Math.min(255, Number(b) || 0));
    this.bricklet.setColor(red, green, blue);
    return { actor: 'rgbButton', action: 'setColor', r: red, g: green, b: blue, timestamp: new Date().toISOString() };
  }

  setGreen() {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    this.bricklet.setColor(0, 255, 0);
    console.log('RGB button color set to green');

    return {
      actor: 'rgbButton',
      action: 'setGreen',
      r: 0,
      g: 255,
      b: 0,
      timestamp: new Date().toISOString()
    };
  }

  setRed() {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    this.bricklet.setColor(255, 0, 0);
    console.log('RGB button color set to red');

    return {
      actor: 'rgbButton',
      action: 'setRed',
      r: 255,
      g: 0,
      b: 0,
      timestamp: new Date().toISOString()
    };
  }

  setOff() {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    this.bricklet.setColor(0, 0, 0);
    console.log('RGB button color set to off');

    return {
      actor: 'rgbButton',
      action: 'setOff',
      r: 0,
      g: 0,
      b: 0,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = RGBButton;

// Standalone mode: connect directly to remote TinkerForge server and set RGB button color.
if (require.main === module) {
  const Tinkerforge = require('tinkerforge');
  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  function shutdown(ipcon, rgb) {
    rgb.setOff();
    try {
      ipcon.disconnect();
    } catch (_) {
    }
  }

  const ipcon = new Tinkerforge.IPConnection();
  const rgb = new RGBButton(ipcon);

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error(`Connect error: ${error}`);
      process.exit(1);
    }
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    try {
      await rgb.init();
      console.log(`RGB button ready via ${host}:${port} (green idle, red when pressed)`);
    } catch (err) {
      console.error(`RGB button error: ${err.message}`);
      shutdown(ipcon, rgb);
      process.exit(1);
    }
  });

  process.on('SIGINT', () => {
    shutdown(ipcon, rgb);
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    shutdown(ipcon, rgb);
    process.exit(0);
  });
}
