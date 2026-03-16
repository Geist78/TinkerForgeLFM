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

    return true;
  }

  onButtonStateChanged(state) {
    const label = state === 0 ? 'released' : 'pressed';
    console.log(`RGB button ${label}`);
  }

  setColor(r = 255, g = 0, b = 0) {
    if (!this.bricklet) throw new Error('RGB button not initialized');

    const red = Math.max(0, Math.min(255, Number(r) || 0));
    const green = Math.max(0, Math.min(255, Number(g) || 0));
    const blue = Math.max(0, Math.min(255, Number(b) || 0));

    this.bricklet.setColor(red, green, blue);
    console.log(`RGB button color set to (${red}, ${green}, ${blue})`);

    return {
      actor: 'rgbButton',
      action: 'setColor',
      r: red,
      g: green,
      b: blue,
      timestamp: new Date().toISOString()
    };
  }

  setOff() {
    return this.setColor(0, 0, 0);
  }
}

module.exports = RGBButton;

// Standalone mode: connect directly to remote TinkerForge server and set RGB button color.
if (require.main === module) {
  const Tinkerforge = require('tinkerforge');
  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const r = Number(process.argv[2] || 255);
  const g = Number(process.argv[3] || 0);
  const b = Number(process.argv[4] || 0);

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
      rgb.setColor(r, g, b);
      console.log(`RGB button write done via ${host}:${port}`);
    } catch (err) {
      console.error(`RGB button error: ${err.message}`);
    } finally {
      setTimeout(() => {
        ipcon.disconnect();
        process.exit(0);
      }, 1000);
    }
  });
}
