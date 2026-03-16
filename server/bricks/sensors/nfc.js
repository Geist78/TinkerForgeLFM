const { NFC_SCANNER_UID } = require('../../utilities/constants');

class NFCScanner {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = NFC_SCANNER_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletNFC(this.uid, this.ipcon);
    
    // Register NFC tag detected callback
    this.bricklet.on(Tinkerforge.BrickletNFC.CALLBACK_READER_STATE_CHANGED, (state, idle) => {
      this.onStateChanged(state, idle);
    });
  }

  onStateChanged(state, idle) {
    const states = {
      0: 'Initialization',
      128: 'Idle',
      129: 'Error',
      130: 'Request',
      131: 'Write Request',
      132: 'Write Select',
      133: 'Write',
      134: 'Read Select',
      135: 'Read'
    };
    
    console.log(`📡 NFC State: ${states[state] || 'Unknown'} (Idle: ${idle})`);
  }

  async getState() {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('NFC scanner not initialized'));
      
      this.bricklet.getState((state, idle) => {
        resolve({
          sensor: 'nfc',
          state: state,
          idle: idle,
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async isConnected() {
    try {
      await this.getState();
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = NFCScanner;
