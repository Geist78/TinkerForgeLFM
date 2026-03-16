const { LIGHT_SENSOR_UID, SENSOR_INTERVAL_NORMAL } = require('../../utilities/constants');

class LightSensor {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = LIGHT_SENSOR_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletAmbientLightV3(this.uid, this.ipcon);
    
    // Set callback period
    this.bricklet.setIlluminanceCallbackPeriod(SENSOR_INTERVAL_NORMAL);
    
    // Register illuminance change callback
    this.bricklet.on(Tinkerforge.BrickletAmbientLightV3.CALLBACK_ILLUMINANCE, (illuminance) => {
      this.onIlluminanceChange(illuminance);
    });
  }

  onIlluminanceChange(illuminance) {
    // Illuminance in lux (0-120000)
    const lux = illuminance / 100;
    console.log(`💡 Light: ${lux.toFixed(2)} lux`);
  }

  async getIlluminance() {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('Light sensor not initialized'));
      
      this.bricklet.getIlluminance((illuminance) => {
        const lux = illuminance / 100;
        resolve({
          sensor: 'light',
          value: lux,
          unit: 'lux',
          raw: illuminance,
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async isConnected() {
    try {
      await this.getIlluminance();
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = LightSensor;
