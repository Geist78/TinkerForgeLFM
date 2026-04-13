const { DISPLAY_UID } = require('../../utilities/constants');
const Tinkerforge = require('tinkerforge');

class Epaper {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.uid = DISPLAY_UID;

    this.device = new Tinkerforge.BrickletEPaper296x128(
      this.uid,
      this.ipcon
    );
  }

  async showText(text) {
    return new Promise((resolve) => {
      const ep = this.device;

      ep.fillDisplay(Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);

      ep.drawText(
        10,
        40,
        Tinkerforge.BrickletEPaper296x128.FONT_24X32,
        Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
        Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
        text
      );

      ep.draw(() => resolve());
    });
  }

  async showWarning() {
    console.log("WARNING DISPLAY");
    await this.showText("WARNING");
  }

  async showCritical() {
    console.log("CRITICAL DISPLAY");
    await this.showText("CRITICAL");
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

if (require.main === module) {

  const config = require('../../config.json');

  const host = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
  const port = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);

  const ipcon = new Tinkerforge.IPConnection();
  const epaper = new Epaper(ipcon);

  ipcon.connect(host, port, (error) => {
    if (error) {
      console.error('Connect error:', error);
      process.exit(1);
    }
    console.log("CONNECT CALLED");
  });

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
    console.log("CONNECTED");

    try {
      await epaper.showWarning();

      await epaper.sleep(2000);

      await epaper.showCritical();

      console.log("DONE");

    } catch (err) {
      console.error("EPAPER ERROR:", err);
    }
  });

  process.stdin.on('data', () => {
    ipcon.disconnect();
    process.exit(0);
  });
}

module.exports = Epaper;