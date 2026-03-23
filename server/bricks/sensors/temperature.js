const {
	TEMPERATURE_SENSOR_UID,
	HOST,
	PORT,
	SENSOR_INTERVAL_FAST
} = require('../../utilities/constants');

class TemperatureSensor {
	constructor(ipcon) {
		this.ipcon = ipcon;
		this.bricklet = null;
		this.uid = TEMPERATURE_SENSOR_UID;
		this.Tinkerforge = require('tinkerforge');
		this.silent = process.env.SENSORS_SILENT === '1';
		this.lastReading = null;
	}

	async init() {
		this.bricklet = new this.Tinkerforge.BrickletPTCV2(this.uid, this.ipcon);

		this.bricklet.on(this.Tinkerforge.BrickletPTCV2.CALLBACK_TEMPERATURE, (temperature) => {
			this.onTemperature(temperature);
		});

		this.bricklet.on(this.Tinkerforge.BrickletPTCV2.CALLBACK_SENSOR_CONNECTED, (connected) => {
			if (!this.silent) {
				console.log(`[TEMP] Sensor connected: ${connected}`);
			}
		});

		const interval = Math.max(100, Number(process.env.TEMP_INTERVAL_MS || SENSOR_INTERVAL_FAST || 1000));
		this.bricklet.setTemperatureCallbackConfiguration(interval, false, 'x', 0, 0);

		return true;
	}

	onTemperature(temperature) {
		const celsius = Number((temperature / 100.0).toFixed(2));
		const reading = {
			sensor: 'temperature',
			uid: this.uid,
			temperature,
			celsius,
			timestamp: new Date().toISOString()
		};

		this.lastReading = reading;
		if (!this.silent) {
			console.log(`[TEMP] ${reading.celsius} C (${reading.temperature}) @ ${reading.timestamp}`);
		}
		return reading;
	}

	async readOnce() {
		if (!this.bricklet) throw new Error('Temperature sensor not initialized');

		return new Promise((resolve, reject) => {
			this.bricklet.getTemperature(
				(temperature) => resolve(this.onTemperature(temperature)),
				(err) => reject(new Error(err || 'Failed to read temperature'))
			);
		});
	}
}

module.exports = TemperatureSensor;

if (require.main === module) {
	const Tinkerforge = require('tinkerforge');
	const host = process.env.TF_HOST || HOST || '127.0.0.1';
	const port = Number(process.env.TF_PORT || PORT || 4223);

	const ipcon = new Tinkerforge.IPConnection();
	const sensor = new TemperatureSensor(ipcon);

	function shutdown() {
		try {
			ipcon.disconnect();
		} catch (_) {
		}
	}

	ipcon.connect(host, port, (error) => {
		if (error) {
			console.error(`[TEMP] Connect error: ${error}`);
			process.exit(1);
		}
	});

	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
		try {
			await sensor.init();
			await sensor.readOnce();
			console.log(`[TEMP] Live stream enabled via ${host}:${port}`);
			console.log('[TEMP] Press Ctrl+C to stop');
		} catch (err) {
			console.error(`[TEMP] Init error: ${err.message}`);
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
