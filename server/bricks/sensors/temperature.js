const { TEMPERATURE_SENSOR_UID } = require('../../utilities/constants');

class TemperatureSensor {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.ptc = null;
    this.uid = TEMPERATURE_SENSOR_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.ptc = new Tinkerforge.BrickletPTC(this.uid, this.ipcon);
    
    // Set callback period for temperature change events
    this.ptc.setTemperatureCallbackPeriod(1000); // 1 second
    
    // Register temperature change callback
    this.ptc.on(Tinkerforge.BrickletPTC.CALLBACK_TEMPERATURE, (temperature) => {
      this.onTemperatureChange(temperature);
    });
  }

  onTemperatureChange(temperature) {
    // Temperature is in 1/100 °C, so 2500 = 25.00 °C
    const tempCelsius = temperature / 100;
    console.log(`🌡️  Temperature: ${tempCelsius.toFixed(2)}°C`);
  }

  async getTemperature() {
    return new Promise((resolve, reject) => {
      if (!this.ptc) reject(new Error('Temperature sensor not initialized'));
      
      this.ptc.getTemperature((temperature) => {
        const tempCelsius = temperature / 100;
        resolve({
          sensor: 'temperature',
          value: tempCelsius,
          unit: '°C',
          raw: temperature,
          timestamp: new Date().toISOString()
        });
      }, reject);
    });
  }

  async isConnected() {
    try {
      await this.getTemperature();
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = TemperatureSensor;
