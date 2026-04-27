const { SEGMENT_DISPLAY_UID, HOST, PORT } = require('../../utilities/constants'); 
const Tinkerforge = require('tinkerforge');

function startTimer(minutes, onFinished) {
    const ipcon = new Tinkerforge.IPConnection();
    const display = new Tinkerforge.BrickletSegmentDisplay4x7V2(SEGMENT_DISPLAY_UID, ipcon);

    let interval = null;
    let remainingSeconds = minutes * 60;

    ipcon.connect(HOST, PORT);

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
        display.setBrightness(7);

        interval = setInterval(() => {
            const mins = Math.floor(remainingSeconds / 60);
            const secs = remainingSeconds % 60;

            // z.B. 09:05 → [0,9,0,5]
            const digits = [
                Math.floor(mins / 10),
                mins % 10,
                Math.floor(secs / 10),
                secs % 10
            ];

            display.setNumericValue(digits);

            remainingSeconds--;

            if (remainingSeconds < 0) {
                clearInterval(interval);

                console.log(`⏰ Timer (${minutes} min) fertig!`);

                display.setNumericValue([-1, -1, -1, -1]);

                if (onFinished) {
                    onFinished();
                }

                ipcon.disconnect();
            }

        }, 1000);
    });
}

module.exports = { startTimer };


// 👉 TEST
if (require.main === module) {
    console.log("🚀 Starte Test-Timer (5 Minute im MM:SS Format)...");

    startTimer(5, () => {
        console.log("✅ Timer fertig!");
    });
}