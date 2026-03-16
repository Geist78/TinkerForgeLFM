const { MOTION_DETECTOR_UID } = require('../../utilities/constants');

class MotionDetector {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = MOTION_DETECTOR_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletMotionDetectorV2(this.uid, this.ipcon);
    
    // Register motion detection callback
    this.bricklet.on(Tinkerforge.BrickletMotionDetectorV2.CALLBACK_MOTION_DETECTED, () => {
      this.onMotionDetected();
    });
  }

  onMotionDetected() {
    console.log(`🚨 Motion detected!`);
  }

  async getMotionDetected() {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('Motion detector not initialized'));
      
      this.bricklet.getMotionDetected((motion) => {
        resolve({
          sensor: 'motion',
          detected: motion === 1,
          value: motion,
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async isConnected() {
    try {
      await this.getMotionDetected();
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = MotionDetector;
