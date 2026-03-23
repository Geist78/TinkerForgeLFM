const {
	HUMIDITY_SENSOR_UID,
	HOST,
	PORT,
	SENSOR_INTERVAL_FAST
} = require('../../utilities/constants');

class HumiditySensor {
	constructor(ipcon) {
		this.ipcon = ipcon;
		this.bricklet = null;
		this.uid = HUMIDITY_SENSOR_UID;
		this.Tinkerforge = require('tinkerforge');
		this.silent = process.env.SENSORS_SILENT === '1';
		this.lastReading = null;
		this.lastTemperature = null;
	}

	async init() {
		this.bricklet = new this.Tinkerforge.BrickletHumidityV2(this.uid, this.ipcon);

		this.bricklet.on(this.Tinkerforge.BrickletHumidityV2.CALLBACK_HUMIDITY, (humidity) => {
			this.onHumidity(humidity);
		});

		this.bricklet.on(this.Tinkerforge.BrickletHumidityV2.CALLBACK_TEMPERATURE, (temperature) => {
			this.onTemperature(temperature);
		});

		const interval = Math.max(100, Number(process.env.HUMIDITY_INTERVAL_MS || SENSOR_INTERVAL_FAST || 1000));
		this.bricklet.setHumidityCallbackConfiguration(interval, false, 'x', 0, 0);
		this.bricklet.setTemperatureCallbackConfiguration(interval, false, 'x', 0, 0);

		return true;
	}

	onHumidity(humidity) {
		const relativeHumidity = Number((humidity / 100.0).toFixed(2));
		const reading = {
			sensor: 'humidity',
			uid: this.uid,
			humidity,
			relativeHumidity,
			timestamp: new Date().toISOString()
		};

		this.lastReading = reading;
		if (!this.silent) {
			console.log(`[HUMIDITY] ${reading.relativeHumidity} %RH (${reading.humidity}) @ ${reading.timestamp}`);
		}
		return reading;
	}

	onTemperature(temperature) {
		const celsius = Number((temperature / 100.0).toFixed(2));
		const reading = {
			sensor: 'humidity-temperature',
			uid: this.uid,
			temperature,
			celsius,
			timestamp: new Date().toISOString()
		};

		this.lastTemperature = reading;
		if (!this.silent) {
			console.log(`[HUMIDITY] Internal temperature ${celsius} C (${temperature})`);
		}
		return reading;
	}

	async readOnce() {
		if (!this.bricklet) throw new Error('Humidity sensor not initialized');

		return new Promise((resolve, reject) => {
			this.bricklet.getHumidity(
				(humidity) => resolve(this.onHumidity(humidity)),
				(err) => reject(new Error(err || 'Failed to read humidity'))
			);
		});
	}
}

module.exports = HumiditySensor;

if (require.main === module) {
	const Tinkerforge = require('tinkerforge');
	const host = process.env.TF_HOST || HOST || '127.0.0.1';
	const port = Number(process.env.TF_PORT || PORT || 4223);

	const ipcon = new Tinkerforge.IPConnection();
	const sensor = new HumiditySensor(ipcon);

	function shutdown() {
		try {
			ipcon.disconnect();
		} catch (_) {
		}
	}

	ipcon.connect(host, port, (error) => {
		if (error) {
			console.error(`[HUMIDITY] Connect error: ${error}`);
			process.exit(1);
		}
	});

	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
		try {
			await sensor.init();
			await sensor.readOnce();
			console.log(`[HUMIDITY] Live stream enabled via ${host}:${port}`);
			console.log('[HUMIDITY] Press Ctrl+C to stop');
		} catch (err) {
			console.error(`[HUMIDITY] Init error: ${err.message}`);
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
