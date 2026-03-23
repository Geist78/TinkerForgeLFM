// TinkerForge Device UIDs and Configuration
module.exports = {
  // Sensors
  TEMPERATURE_SENSOR_UID: 'Wcg',   // PTC Bricklet 2.0
  LIGHT_SENSOR_UID: 'Pdw',         // Ambient Light Bricklet 3.0
  HUMIDITY_SENSOR_UID: 'ViW',      // Humidity Bricklet 2.0
  MOTION_DETECTOR_UID: 'ML4',      // Motion Detector Bricklet 2.0
  NFC_SCANNER_UID: '22ND',         // NFC Bricklet

  // Actors
  SPEAKER_UID: 'R7M',              // Piezo Speaker Bricklet 2.0
  DISPLAY_UID: '24KJ',             // E-Paper 296x128 Bricklet
  SEGMENT_DISPLAY_UID: 'Tre',      // 4x7 Segment Display 4x7 Bricklet 2.0
  BUTTON_UID: 'Vd8',               // Dual Button Bricklet 2.0
  RGB_BUTTON_UID: '23Qx',          // RGB LED Button Bricklet
  LCD_DISPLAY_UID: '24Rh',         // LCD 128x64 Bricklet

  // Server Config
  HOST: '172.20.89.107',
  PORT: 4223,
  
  // Sensor Read Intervals (ms)
  SENSOR_INTERVAL_FAST: 1000,   // 1 second
  SENSOR_INTERVAL_NORMAL: 5000, // 5 seconds
  SENSOR_INTERVAL_SLOW: 30000,  // 30 seconds
};
