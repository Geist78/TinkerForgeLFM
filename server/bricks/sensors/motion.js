const {
    MOTION_DETECTOR_UID,
    HOST,
    PORT,
    SENSOR_INTERVAL_FAST
} = require('../../utilities/constants');

class MotionSensor {
    constructor(ipcon) {
        this.ipcon = ipcon;
        this.bricklet = null;
        this.uid = MOTION_DETECTOR_UID;
        this.Tinkerforge = require('tinkerforge');
        this.silent = process.env.SENSORS_SILENT === '1';
        this.lastReading = null;
        this.pollTimer = null;
    }

    async init() {
        this.bricklet = new this.Tinkerforge.BrickletMotionDetectorV2(this.uid, this.ipcon);

        this.bricklet.on(this.Tinkerforge.BrickletMotionDetectorV2.CALLBACK_MOTION_DETECTED, () => {
            this.onMotionDetected();
        });

        this.bricklet.on(this.Tinkerforge.BrickletMotionDetectorV2.CALLBACK_DETECTION_CYCLE_ENDED, () => {
            this.onDetectionCycleEnded();
        });

        const interval = Math.max(200, Number(process.env.MOTION_INTERVAL_MS || SENSOR_INTERVAL_FAST || 1000));
        this.startPolling(interval);
        return true;
    }

    onMotionDetected() {
        const reading = {
            sensor: 'motion',
            uid: this.uid,
            motion: true,
            event: 'motion-detected',
            timestamp: new Date().toISOString()
        };

        this.lastReading = reading;
        if (!this.silent) {
            console.log(`[MOTION] DETECTED @ ${reading.timestamp}`);
        }
        return reading;
    }

    onDetectionCycleEnded() {
        const reading = {
            sensor: 'motion',
            uid: this.uid,
            motion: false,
            event: 'detection-cycle-ended',
            timestamp: new Date().toISOString()
        };

        this.lastReading = reading;
        if (!this.silent) {
            console.log(`[MOTION] Cycle ended @ ${reading.timestamp}`);
        }
        return reading;
    }

    async readOnce() {
        if (!this.bricklet) throw new Error('Motion sensor not initialized');

        return new Promise((resolve, reject) => {
            this.bricklet.getMotionDetected(
                (motion) => {
                    const reading = {
                        sensor: 'motion',
                        uid: this.uid,
                        motion: Boolean(motion),
                        event: 'state-read',
                        timestamp: new Date().toISOString()
                    };
                    this.lastReading = reading;
                    if (!this.silent) {
                        console.log(`[MOTION] Current state: ${reading.motion ? 'MOTION' : 'NO MOTION'} @ ${reading.timestamp}`);
                    }
                    resolve(reading);
                },
                (err) => reject(new Error(err || 'Failed to read motion state'))
            );
        });
    }

    startPolling(intervalMs = SENSOR_INTERVAL_FAST || 1000) {
        if (this.pollTimer) return;

        const delay = Math.max(200, Number(intervalMs) || 1000);
        this.pollTimer = setInterval(() => {
            this.readOnce().catch((err) => {
                console.error(`[MOTION] Read error: ${err.message}`);
            });
        }, delay);
    }

    stopPolling() {
        if (!this.pollTimer) return;
        clearInterval(this.pollTimer);
        this.pollTimer = null;
    }
}

module.exports = MotionSensor;

if (require.main === module) {
    const Tinkerforge = require('tinkerforge');
    const host = process.env.TF_HOST || HOST || '127.0.0.1';
    const port = Number(process.env.TF_PORT || PORT || 4223);

    const ipcon = new Tinkerforge.IPConnection();
    const sensor = new MotionSensor(ipcon);

    function shutdown() {
        sensor.stopPolling();
        try {
            ipcon.disconnect();
        } catch (_) {
        }
    }

    ipcon.connect(host, port, (error) => {
        if (error) {
            console.error(`[MOTION] Connect error: ${error}`);
            process.exit(1);
        }
    });

    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
        try {
            await sensor.init();
            await sensor.readOnce();
            console.log(`[MOTION] Live stream enabled via ${host}:${port}`);
            console.log('[MOTION] Press Ctrl+C to stop');
        } catch (err) {
            console.error(`[MOTION] Init error: ${err.message}`);
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