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

  async beep(frequency = 1000, duration = 200) {
    return new Promise((resolve, reject) => {
      this.device.setBeep(frequency, 0, duration, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async alarm_warning() {
    const sequence = [];

    // Phase 1: “Aufmerksamkeit wird gezogen”
    for (let i = 0; i < 12; i++) {
      const freq = 650 + i * 40; // langsam ansteigend
      sequence.push({ f: freq, d: 120 });
    }

    sequence.push({ f: 0, d: 250 });

    // Phase 2: Hauptwarnung (langsamer Sirenenbogen)
    for (let cycle = 0; cycle < 3; cycle++) {
      for (let i = 0; i < 50; i++) {
        const t = i / 50;

        // weiche, aber bedrohliche Welle
        const wave = Math.sin(t * Math.PI);

        const freq = 800 + wave * 500; // 800 → 1300 Hz

        sequence.push({ f: Math.round(freq), d: 70 });
      }

      sequence.push({ f: 0, d: 350 });
    }

    // Phase 3: “Warning pulses” (wie ein System, das insistiert)
    for (let i = 0; i < 10; i++) {
      const freq = 1000 + (i % 2) * 200;

      sequence.push({ f: freq, d: 140 });
      sequence.push({ f: 0, d: 90 });
    }

    // Phase 4: letzter tiefer Druckton (kein Abschluss, eher Spannung)
    sequence.push({ f: 720, d: 900 });
    sequence.push({ f: 0, d: 600 });

    // Play
    for (const step of sequence) {
      if (step.f === 0) {
        await this.sleep(step.d);
      } else {
        await this.beep(step.f, step.d);
      }
    }
  }

  async alarm_critical() {
    const sequence = [];

    // Phase 1: Aufbau (Bedrohung entsteht)
    for (let i = 0; i < 25; i++) {
      const t = i / 25;
      const freq = 700 + t * 800; // 700 → 1500 Hz
      sequence.push({ f: Math.round(freq), d: 80 });
    }

    sequence.push({ f: 0, d: 200 });

    // Phase 2: Hauptsirene (wailing sweep)
    for (let cycle = 0; cycle < 4; cycle++) {
      for (let i = 0; i < 40; i++) {
        const t = i / 40;

        // Dreieckssweep (klassischer Sirenenkörper)
        const wave = t < 0.5 ? t * 2 : (1 - t) * 2;

        const freq = 800 + wave * 1000; // 800 → 1800 Hz

        sequence.push({ f: Math.round(freq), d: 60 });
      }

      sequence.push({ f: 0, d: 300 });
    }

    // Phase 3: Eskalation (dringender Puls)
    for (let i = 0; i < 30; i++) {
      const freq = 1600 + (i % 2) * 300;
      sequence.push({ f: freq, d: 50 });
      sequence.push({ f: 0, d: 30 });
    }

    // Phase 4: letzter langer “Druckton”
    sequence.push({ f: 2000, d: 1200 });
    sequence.push({ f: 0, d: 500 });

    // Play
    for (const step of sequence) {
      if (step.f === 0) {
        await this.sleep(step.d);
      } else {
        await this.beep(step.f, step.d);
      }
    }
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