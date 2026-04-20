const { BUTTON_UID } = require('../../utilities/constants');
const Tinkerforge = require('tinkerforge');

class DualButton {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.uid = BUTTON_UID;
    this.device = null;
    this.Tinkerforge = Tinkerforge;
  }

  async init() {
    this.device = new this.Tinkerforge.BrickletDualButtonV2(
      this.uid,
      this.ipcon
    );

    // Prüfen ob erreichbar
    await new Promise((resolve, reject) => {
      this.device.getIdentity((...args) => {
        if (!args || args.length === 0) {
          return reject(new Error('DualButton not responding'));
        }
        resolve();
      });
    });

    console.log('DualButton initialized');

    this.setupCallbacks();
  }

  setupCallbacks() {
    // Callback aktivieren (true = auf Änderungen reagieren)
    this.device.setStateChangedCallbackConfiguration(true);

    this.device.on(
      this.Tinkerforge.BrickletDualButtonV2.CALLBACK_STATE_CHANGED,
      (buttonL, buttonR, ledL, ledR) => {

        console.log('--- BUTTON EVENT ---');

        console.log('Left Button:',
          this.parseState(buttonL)
        );

        console.log('Right Button:',
          this.parseState(buttonR)
        );

        console.log('Left LED State:', ledL);
        console.log('Right LED State:', ledR);

        console.log('--------------------');
      }
    );
  }

  parseState(state) {
    const map = this.Tinkerforge.BrickletDualButtonV2;

    switch (state) {
      case map.BUTTON_STATE_PRESSED:
        return 'PRESSED';

      case map.BUTTON_STATE_RELEASED:
        return 'RELEASED';

      case map.BUTTON_STATE_PRESSED_LONG:
        return 'LONG PRESSED';

      case map.BUTTON_STATE_RELEASED_LONG:
        return 'LONG RELEASED';

      default:
        return 'UNKNOWN';
    }
  }

  async getState() {
    return new Promise((resolve, reject) => {
      this.device.getButtonState((buttonL, buttonR, ledL, ledR) => {
        resolve({
          left: this.parseState(buttonL),
          right: this.parseState(buttonR),
          ledLeft: ledL,
          ledRight: ledR
        });
      });
    });
  }

  async setLEDs(left, right) {
    return new Promise((resolve, reject) => {
      this.device.setLEDState(left, right, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

if (require.main === module) {

  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const ipcon = new Tinkerforge.IPConnection();
  const dualButton = new DualButton(ipcon);

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error('Connect error:', error);
      process.exit(1);
    }
    console.log("CONNECT CALLED");
  });

  ipcon.on(
    Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    async (connectReason) => {

      console.log("CONNECTED EVENT:", connectReason);

      try {
        await dualButton.init();

        // Initial State anzeigen
        const state = await dualButton.getState();
        console.log('Initial State:', state);

        // LEDs Beispiel setzen
        await dualButton.setLEDs(
          Tinkerforge.BrickletDualButtonV2.LED_STATE_ON,
          Tinkerforge.BrickletDualButtonV2.LED_STATE_OFF
        );

        console.log('Press buttons now...');

      } catch (err) {
        console.error("DualButton error:", err);
      }
    }
  );

  async function shutdown() {
    try {
      ipcon.disconnect();
    } catch (_) {}
  }

  process.on('SIGINT', async () => {
    await shutdown();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await shutdown();
    process.exit(0);
  });
}

module.exports = DualButton;