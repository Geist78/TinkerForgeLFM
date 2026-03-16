const { BUTTON_UID } = require('../../utilities/constants');

class DualButton {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = BUTTON_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletDualButtonV2(this.uid, this.ipcon);
    
    // Register button press/release callbacks
    this.bricklet.on(Tinkerforge.BrickletDualButtonV2.CALLBACK_STATE_CHANGED, (buttonL, buttonR, ledL, ledR) => {
      this.onStateChanged(buttonL, buttonR, ledL, ledR);
    });
  }

  onStateChanged(buttonL, buttonR, ledL, ledR) {
    const states = { 0: 'Released', 1: 'Pressed' };
    console.log(`🔘 Button - Left: ${states[buttonL]}, Right: ${states[buttonR]}`);
  }

  async getState() {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('Dual button not initialized'));
      
      this.bricklet.getState((buttonL, buttonR, ledL, ledR) => {
        resolve({
          actor: 'dualButton',
          left: {
            button: buttonL === 1,
            led: ledL === 1
          },
          right: {
            button: buttonR === 1,
            led: ledR === 1
          },
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async setLED(button = 'left', state = true) {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('Dual button not initialized'));
      
      const ledValue = state ? 1 : 0;
      const buttonNum = button.toLowerCase() === 'left' ? 0 : 1;
      
      this.bricklet.setLEDState(buttonNum, ledValue, (error) => {
        if (error) reject(error);
        else {
          console.log(`🔘 ${button} LED: ${state ? 'ON' : 'OFF'}`);
          resolve({
            actor: 'dualButton',
            action: 'setLED',
            button,
            state,
            timestamp: new Date().toISOString()
          });
        }
      });
    });
  }
}

module.exports = DualButton;
