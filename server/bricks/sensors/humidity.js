const { HUMIDITY_SENSOR_UID, SENSOR_INTERVAL_NORMAL } = require('../../utilities/constants');

class HumiditySensor {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = HUMIDITY_SENSOR_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletHumidityV2(this.uid, this.ipcon);
    
    // Set callback period
    this.bricklet.setHumidityCallbackPeriod(SENSOR_INTERVAL_NORMAL);
    
    // Register humidity change callback
    this.bricklet.on(Tinkerforge.BrickletHumidityV2.CALLBACK_HUMIDITY, (humidity) => {
      this.onHumidityChange(humidity);
    });
  }

  onHumidityChange(humidity) {
    // Humidity in 0.01 %RH, so 5000 = 50.00 %RH
    const percentRH = humidity / 100;
    console.log(`💧 Humidity: ${percentRH.toFixed(2)}%`);
  }

  async getHumidity() {
    return new Promise((resolve, reject) => {
      if (!this.bricklet) reject(new Error('Humidity sensor not initialized'));
      
      this.bricklet.getHumidity((humidity) => {
        const percentRH = humidity / 100;
        resolve({
          sensor: 'humidity',
          value: percentRH,
          unit: '%RH',
          raw: humidity,
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async isConnected() {
    try {
      await this.getHumidity();
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = HumiditySensor;
