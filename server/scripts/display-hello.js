const Tinkerforge = require('tinkerforge');
const { DISPLAY_UID } = require('../utilities/constants');
const config = require('../config.json');

const HOST = config.tinkerforge?.ip || '127.0.0.1';
const PORT = config.tinkerforge?.port || 4223;

const ipcon = new Tinkerforge.IPConnection();
const ep = new Tinkerforge.BrickletEPaper296x128(DISPLAY_UID, ipcon);

ipcon.connect(HOST, PORT, (error) => {
  if (error) {
    console.error('Connect error:', error);
  }
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
  try {
    ep.fillDisplay(Tinkerforge.BrickletEPaper296x128.COLOR_BLACK);
    ep.drawText(
      16,
      48,
      Tinkerforge.BrickletEPaper296x128.FONT_24X32,
      Tinkerforge.BrickletEPaper296x128.COLOR_WHITE,
      Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
      'Hello World'
    );
    ep.draw();
    console.log('Hello World sent to E-Paper.');
  } catch (err) {
    console.error('Display error:', err.message);
  }
});

setTimeout(() => {
  ipcon.disconnect();
  process.exit(0);
}, 4000);
