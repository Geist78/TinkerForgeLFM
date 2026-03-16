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

  const mode = (process.argv[2] || 'cycle').toLowerCase();
  const r = Number(process.argv[3] || 0);
  const g = Number(process.argv[4] || 0);
  const b = Number(process.argv[5] || 255);
  const cycleDelayMs = Number(process.argv[3] || 300);
  let cycleTimer = null;

  function hsvToRgb(h, s, v) {
    const c = v * s;
    const hp = h / 60;
    const x = c * (1 - Math.abs((hp % 2) - 1));
    let r1 = 0;
    let g1 = 0;
    let b1 = 0;

    if (hp >= 0 && hp < 1) [r1, g1, b1] = [c, x, 0];
    else if (hp >= 1 && hp < 2) [r1, g1, b1] = [x, c, 0];
    else if (hp >= 2 && hp < 3) [r1, g1, b1] = [0, c, x];
    else if (hp >= 3 && hp < 4) [r1, g1, b1] = [0, x, c];
    else if (hp >= 4 && hp < 5) [r1, g1, b1] = [x, 0, c];
    else if (hp >= 5 && hp < 6) [r1, g1, b1] = [c, 0, x];

    const m = v - c;
    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255)
    };
  }

  function shutdown(ipcon, rgb) {
    if (cycleTimer) {
      clearInterval(cycleTimer);
      cycleTimer = null;
    }

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

      if (mode === 'cycle') {
        let hue = 0;
        rgb.setColor(255, 0, 0);
        console.log(`RGB cycle started via ${host}:${port} (delay ${cycleDelayMs}ms)`);

        cycleTimer = setInterval(() => {
          const color = hsvToRgb(hue, 1, 1);
          rgb.setColor(color.r, color.g, color.b);
          hue = (hue + 12) % 360;
        }, Math.max(30, cycleDelayMs));
      } else {
        rgb.setColor(r, g, b);
        console.log(`RGB button write done via ${host}:${port}`);
      }
    } catch (err) {
      console.error(`RGB button error: ${err.message}`);
      shutdown(ipcon, rgb);
      process.exit(1);
    }

    if (mode !== 'cycle') {
      setTimeout(() => {
        shutdown(ipcon, rgb);
        process.exit(0);
      }, 1000);
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
