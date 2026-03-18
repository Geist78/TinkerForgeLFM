const {
    LIGHT_SENSOR_UID,
    HOST,
    PORT,
    SENSOR_INTERVAL_FAST
} = require('../../utilities/constants');

class LightSensor {
    constructor(ipcon) {
        this.ipcon = ipcon;
        this.bricklet = null;
        this.uid = LIGHT_SENSOR_UID;
        this.Tinkerforge = require('tinkerforge');
        this.lastReading = null;
        this.pollTimer = null;
    }

    async init() {
        this.bricklet = new this.Tinkerforge.BrickletAmbientLightV3(this.uid, this.ipcon);

        this.bricklet.on(this.Tinkerforge.BrickletAmbientLightV3.CALLBACK_ILLUMINANCE, (illuminance) => {
            this.onIlluminance(illuminance);
        });

        const interval = Math.max(100, Number(process.env.LIGHT_INTERVAL_MS || SENSOR_INTERVAL_FAST || 1000));
        this.bricklet.setIlluminanceCallbackConfiguration(interval, false, 'x', 0, 0);

        return true;
    }

    onIlluminance(illuminance) {
        const lux = Number((illuminance / 100.0).toFixed(2));
        const reading = {
            sensor: 'light',
            uid: this.uid,
            illuminance,
            lux,
            timestamp: new Date().toISOString()
        };

        this.lastReading = reading;
        console.log(`[LIGHT] ${reading.lux} lx (${reading.illuminance}) @ ${reading.timestamp}`);
        return reading;
    }

    async readOnce() {
        if (!this.bricklet) throw new Error('Light sensor not initialized');

        return new Promise((resolve, reject) => {
            this.bricklet.getIlluminance(
                (illuminance) => resolve(this.onIlluminance(illuminance)),
                (err) => reject(new Error(err || 'Failed to read illuminance'))
            );
        });
    }

    startPolling(intervalMs = SENSOR_INTERVAL_FAST || 1000) {
        if (!this.bricklet) throw new Error('Light sensor not initialized');
        if (this.pollTimer) return;

        const delay = Math.max(100, Number(intervalMs) || 1000);
        this.pollTimer = setInterval(() => {
            this.readOnce().catch((err) => {
                console.error(`[LIGHT] Read error: ${err.message}`);
            });
        }, delay);
    }

    stopPolling() {
        if (!this.pollTimer) return;
        clearInterval(this.pollTimer);
        this.pollTimer = null;
    }
}

module.exports = LightSensor;

if (require.main === module) {
    const Tinkerforge = require('tinkerforge');
    const host = process.env.TF_HOST || HOST || '127.0.0.1';
    const port = Number(process.env.TF_PORT || PORT || 4223);

    const ipcon = new Tinkerforge.IPConnection();
    const light = new LightSensor(ipcon);

    function shutdown() {
        light.stopPolling();
        try {
            ipcon.disconnect();
        } catch (_) {
        }
    }

    ipcon.connect(host, port, (error) => {
        if (error) {
            console.error(`[LIGHT] Connect error: ${error}`);
            process.exit(1);
        }
    });

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
        try {
            await light.init();
            await light.readOnce();
            console.log(`[LIGHT] Live stream enabled via ${host}:${port}`);
            console.log('[LIGHT] Press Ctrl+C to stop');
        } catch (err) {
            console.error(`[LIGHT] Init error: ${err.message}`);
            shutdown();
            process.exit(1);
        }
    });

    process.on('SIGINT', () => {
        shutdown();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        shutdown();
        process.exit(0);
    });
}