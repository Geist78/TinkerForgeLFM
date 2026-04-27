const { RGB_BUTTON_UID } = require('../../utilities/constants');

class RGBButton {
  constructor(ipcon, onShutdownCallback = null, getAccessStateCallback = null) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = RGB_BUTTON_UID;
    this.Tinkerforge = require('tinkerforge');
    this.onShutdownCallback = onShutdownCallback;
    this.getAccessStateCallback = getAccessStateCallback;
    this.blinkInterval = null;
  }

  async init() {
    try {
      this.bricklet = new this.Tinkerforge.BrickletRGBLEDButton(this.uid, this.ipcon);

      this.bricklet.on(this.Tinkerforge.BrickletRGBLEDButton.CALLBACK_BUTTON_STATE_CHANGED, (state) => {
        this.onButtonStateChanged(state);
      });

      // Default idle color is green.
      this.setGreen();
      console.log('[RGB Button] Initialized and set to green (idle)');

      return true;
    } catch (err) {
      console.error('[RGB Button] Failed to initialize:', err.message);
      throw err;
    }
  }

  onButtonStateChanged(state) {
    const label = state === 0 ? 'released' : 'pressed';
    console.log(`[RGB Button] State changed: ${label} (state=${state})`);
    
    if (state === 0) {
      this.setGreen();
    } else {
      this.setRed();
      // Check if admin is logged in and button is pressed
      if (this.getAccessStateCallback) {
        const accessState = this.getAccessStateCallback();
        console.log(`[RGB Button] Access state: isAdminLoggedIn=${accessState?.isAdminLoggedIn}, role=${accessState?.lastCardRole}`);
        if (accessState && accessState.isAdminLoggedIn) {
          console.log('[RGB Button] ✓ Admin logged in - Button pressed - SHUTTING DOWN SERVER');
          if (this.onShutdownCallback) {
            this.onShutdownCallback();
          }
        } else {
          console.log('[RGB Button] ✗ Button pressed but admin NOT logged in - no shutdown');
        }
      } else {
        console.log('[RGB Button] ✗ No access state callback available');
      }
    }
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
    console.log('[RGB Button] Color set to GREEN (0, 255, 0)');

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
    console.log('[RGB Button] Color set to RED (255, 0, 0)');

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

  stopBlink() {
    if (this.blinkInterval) {
      clearInterval(this.blinkInterval);
      this.blinkInterval = null;
      console.log('RGB button blink stopped');
    }
  }

  blinkWarning() {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    this.stopBlink();
    console.log('RGB button: Warning alarm - orange/yellow blinking');
    
    let isOn = true;
    this.blinkInterval = setInterval(() => {
      if (isOn) {
        this.bricklet.setColor(255, 165, 0); // Orange/Yellow
        isOn = false;
      } else {
        this.bricklet.setColor(50, 50, 0); // Dark orange
        isOn = true;
      }
    }, 500); // Toggle every 500ms = 1 blink per second
  }

  blinkCritical() {
    if (!this.bricklet) throw new Error('RGB button not initialized');
    this.stopBlink();
    console.log('RGB button: Critical alarm - aggressive red blinking');
    
    let isOn = true;
    this.blinkInterval = setInterval(() => {
      if (isOn) {
        this.bricklet.setColor(255, 0, 0); // Bright red
        isOn = false;
      } else {
        this.bricklet.setColor(100, 0, 0); // Dark red
        isOn = true;
      }
    }, 200); // Toggle every 200ms = 5 blinks per second (aggressive)
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
