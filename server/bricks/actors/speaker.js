const { SPEAKER_UID } = require('../../utilities/constants');
const Tinkerforge = require('tinkerforge');

class Speaker {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.uid = SPEAKER_UID;
    this.device = null;
    this.Tinkerforge = Tinkerforge;
  }

  async init() {
    this.device = new this.Tinkerforge.BrickletPiezoSpeakerV2(
      this.uid,
      this.ipcon
    );

    // Optional: prüfen ob erreichbar
    await new Promise((resolve, reject) => {
      this.device.getIdentity((...args) => {
        if (!args || args.length === 0) {
          return reject(new Error('Speaker not responding'));
        }
        resolve();
      });
    });
  }

  async beep(frequency = 1000, duration = 200, volume = 1) {
    return new Promise((resolve, reject) => {
      this.device.setBeep(frequency, volume, duration, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async alarm_warning() {
    // Kurzer, leiser Warnhinweis
    await this.beep(900, 120, 1);
    await this.sleep(100);
    await this.beep(900, 120, 1);
  }

  async alarm_critical() {
    // Langer, anhaltender kritischer Alarmton
    await this.beep(1350, 4000, 1);
  }

  async login_success() {
    // Kurzer "Login erfolgreich"-Ton
    await this.beep(1000, 90, 1);
    await this.sleep(60);
    await this.beep(1400, 140, 1);
  }

  async login_denied() {
    // Kurzer "Denied/Cancel"-Ton
    await this.beep(650, 160, 1);
    await this.sleep(50);
    await this.beep(520, 220, 1);
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = Speaker;

/* ===========================
   STANDALONE TEST
=========================== */

if (require.main === module) {

  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const ipcon = new Tinkerforge.IPConnection();
  const speaker = new Speaker(ipcon);

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error('Connect error:', error);
      process.exit(1);
    }
    console.log("CONNECT CALLED");
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async (connectReason) => {
    console.log("CONNECTED EVENT:", connectReason);

    try {
      await speaker.init();

      await speaker.alarm_warning();

      setTimeout(() => {}, 1000);

      await speaker.alarm_critical();
    } catch (err) {
      console.error("Speaker error:", err);
    }
  });

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