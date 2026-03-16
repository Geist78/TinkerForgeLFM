const { SPEAKER_UID } = require('../../utilities/constants');

class PiezoSpeaker {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = SPEAKER_UID;
  }

  async init() {
    const Tinkerforge = require('tinkerforge');
    this.bricklet = new Tinkerforge.BrickletPiezoSpeakerV2(this.uid, this.ipcon);
    
    return new Promise((resolve, reject) => {
      // Give device time to initialize
      setTimeout(() => {
        try {
          // Try to set volume (may not have callback)
          this.bricklet.setVolume(1);
          
          // Register finish callback
          this.bricklet.on(Tinkerforge.BrickletPiezoSpeakerV2.CALLBACK_FINISH, () => {
            this.onFinished();
          });
          
          console.log(`🔊 Speaker initialized (UID: ${this.uid}, volume: 1)`);
          resolve();
        } catch (error) {
          console.warn(`⚠️  Speaker init warning: ${error.message}`);
          resolve(); // Still resolve, device might work anyway
        }
      }, 100);
    });
  }

  onFinished() {
    console.log(`🔊 Speaker finished playing`);
  }

  async playTone(frequency = 1000, duration = 1000) {
    if (!this.bricklet) {
      throw new Error('Speaker not initialized');
    }
    
    // Validate parameters
    if (frequency < 50 || frequency > 15000) {
      throw new Error(`Frequency must be between 50-15000 Hz, got ${frequency}`);
    }
    if (duration < 0 || duration > 60000) {
      throw new Error(`Duration must be between 0-60000 ms, got ${duration}`);
    }
    
    console.log(`🔊 Playing tone: ${frequency}Hz for ${duration}ms`);
    
    try {
      // playTone doesn't have a callback, it's void
      this.bricklet.playTone(frequency, duration);
      
      return {
        actor: 'speaker',
        action: 'playTone',
        frequency,
        duration,
        status: 'playing',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(`❌ Speaker error: ${error.message}`);
      throw error;
    }
  }

  async playBeep(duration = 100) {
    console.log(`🔊 Beep (${duration}ms)`);
    return this.playTone(1000, duration);
  }

  async playAlarm() {
    console.log(`🔊 Alarm`);
    return this.playTone(3000, 2000);
  }

  async stop() {
    console.log(`🔊 Stop`);
    return this.playTone(0, 0);
  }
}

module.exports = PiezoSpeaker;
