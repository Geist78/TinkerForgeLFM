const Tinkerforge = require('tinkerforge');
const config = require('../config.json');
const { DISPLAY_UID } = require('../utilities/constants');

const HOST = process.env.TF_HOST || config.tinkerforge?.ip || '127.0.0.1';
const PORT = Number(process.env.TF_PORT || config.tinkerforge?.port || 4223);
const UID = process.env.EPAPER_UID || DISPLAY_UID;

const text = process.argv.slice(2).join(' ').trim() || 'Hello from client';

const ipcon = new Tinkerforge.IPConnection();
const ep = new Tinkerforge.BrickletEPaper296x128(UID, ipcon);

ipcon.connect(HOST, PORT, (error) => {
  if (error) {
    console.error('Connect error:', error);
    process.exit(1);
  }
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
  try {
    ep.fillDisplay(Tinkerforge.BrickletEPaper296x128.COLOR_WHITE);

    ep.drawText(
      10,
      40,
      Tinkerforge.BrickletEPaper296x128.FONT_24X32,
      Tinkerforge.BrickletEPaper296x128.COLOR_BLACK,
      Tinkerforge.BrickletEPaper296x128.ORIENTATION_HORIZONTAL,
      text
    );

    ep.draw();
    console.log(`Wrote to display on ${HOST}:${PORT} (UID: ${UID}): ${text}`);
  } catch (err) {
    console.error('Display error:', err.message);
  } finally {
    setTimeout(() => {
      ipcon.disconnect();
      process.exit(0);
    }, 3000);
  }
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_DISCONNECTED, (disconnectReason) => {
  if (disconnectReason !== Tinkerforge.IPConnection.DISCONNECT_REASON_REQUEST) {
    console.warn('Disconnected:', disconnectReason);
  }
});
