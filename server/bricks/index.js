const Tinkerforge = require('tinkerforge');
const config = require('../config.json');

const HOST = config.tinkerforge?.ip || '127.0.0.1';
const PORT = config.tinkerforge?.port || 4223;

// Import sensors
const TemperatureSensor = require('./sensors/temperature');
const LightSensor = require('./sensors/light');
const HumiditySensor = require('./sensors/humidity');
const MotionDetector = require('./sensors/motion');
const NFCScanner = require('./sensors/nfc');

// Import actors
const PiezoSpeaker = require('./actors/speaker');
const LCDDisplay = require('./actors/lcd');
const DualButton = require('./actors/button');
const EPaperDisplay = require('./actors/display');

class BrickManager {
  constructor() {
    this.ipcon = null;
    this.connected = false;
    
    // Sensors
    this.temperature = null;
    this.light = null;
    this.humidity = null;
    this.motion = null;
    this.nfc = null;
    
    // Actors
    this.speaker = null;
    this.lcd = null;
    this.button = null;
    this.display = null;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ipcon = new Tinkerforge.IPConnection();
      
      this.ipcon.connect(HOST, PORT, (error) => {
        if (error) {
          console.error(`❌ Connection failed: ${error}`);
          reject(error);
        } else {
          console.log(`✅ Connected to Master Brick (${HOST}:${PORT})`);
          this.connected = true;
          resolve();
        }
      });
      
      // Handle connection lost
      this.ipcon.on(Tinkerforge.IPConnection.CALLBACK_DISCONNECTED, () => {
        console.warn('⚠️  Disconnected from Master Brick');
        this.connected = false;
      });
      
      // Handle auto-reconnect
      this.ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
        console.log('✅ Reconnected to Master Brick');
        this.connected = true;
      });
    });
  }

  async initSensors() {
    console.log('\n📡 Initializing Sensors...');
    
    try {
      this.temperature = new TemperatureSensor(this.ipcon);
      await this.temperature.init();
      console.log('  ✓ Temperature sensor ready');
    } catch (e) { console.warn(`  ✗ Temperature sensor failed: ${e.message}`); }
    
    try {
      this.light = new LightSensor(this.ipcon);
      await this.light.init();
      console.log('  ✓ Light sensor ready');
    } catch (e) { console.warn(`  ✗ Light sensor failed: ${e.message}`); }
    
    try {
      this.humidity = new HumiditySensor(this.ipcon);
      await this.humidity.init();
      console.log('  ✓ Humidity sensor ready');
    } catch (e) { console.warn(`  ✗ Humidity sensor failed: ${e.message}`); }
    
    try {
      this.motion = new MotionDetector(this.ipcon);
      await this.motion.init();
      console.log('  ✓ Motion detector ready');
    } catch (e) { console.warn(`  ✗ Motion detector failed: ${e.message}`); }
    
    try {
      this.nfc = new NFCScanner(this.ipcon);
      await this.nfc.init();
      console.log('  ✓ NFC scanner ready');
    } catch (e) { console.warn(`  ✗ NFC scanner failed: ${e.message}`); }
  }

  async initActors() {
    console.log('\n🎬 Initializing Actors...');
    
    try {
      this.speaker = new PiezoSpeaker(this.ipcon);
      await this.speaker.init();
      console.log('  ✓ Piezo speaker ready');
    } catch (e) { console.warn(`  ✗ Piezo speaker failed: ${e.message}`); }
    
    try {
      this.lcd = new LCDDisplay(this.ipcon);
      await this.lcd.init();
      console.log('  ✓ LCD display ready');
    } catch (e) { console.warn(`  ✗ LCD display failed: ${e.message}`); }
    
    try {
      this.button = new DualButton(this.ipcon);
      await this.button.init();
      console.log('  ✓ Dual button ready');
    } catch (e) { console.warn(`  ✗ Dual button failed: ${e.message}`); }
    
    try {
      this.display = new EPaperDisplay(this.ipcon);
      await this.display.init();
      console.log('  ✓ E-Paper display ready');
    } catch (e) { console.warn(`  ✗ E-Paper display failed: ${e.message}`); }
  }

  async initialize() {
    try {
      await this.connect();
      await this.initSensors();
      await this.initActors();
      console.log('\n🎉 All devices initialized!');
    } catch (error) {
      console.error(`\n❌ Initialization failed: ${error.message}`);
      throw error;
    }
  }

  async disconnect() {
    if (this.ipcon && this.connected) {
      this.ipcon.disconnect();
      this.connected = false;
      console.log('👋 Disconnected from Master Brick');
    }
  }

  getStatus() {
    return {
      connected: this.connected,
      sensors: {
        temperature: !!this.temperature,
        light: !!this.light,
        humidity: !!this.humidity,
        motion: !!this.motion,
        nfc: !!this.nfc
      },
      actors: {
        speaker: !!this.speaker,
        lcd: !!this.lcd,
        button: !!this.button,
        display: !!this.display
      }
    };
  }
}

module.exports = BrickManager;
