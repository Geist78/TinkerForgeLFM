const {
	NFC_SCANNER_UID,
	HOST,
	PORT,
	SENSOR_INTERVAL_FAST
} = require('../../utilities/constants');

class NFCSensor {
	constructor(ipcon) {
		this.ipcon = ipcon;
		this.bricklet = null;
		this.uid = NFC_SCANNER_UID;
		this.Tinkerforge = require('tinkerforge');
		this.silent = process.env.SENSORS_SILENT === '1';
		this.lastReading = null;
		this.lastState = null;
		this.lastTagHex = null;
		this.requestTimer = null;
	}

	async init() {
		this.bricklet = new this.Tinkerforge.BrickletNFC(this.uid, this.ipcon);

		this.bricklet.on(this.Tinkerforge.BrickletNFC.CALLBACK_READER_STATE_CHANGED, (state, idle) => {
			this.onReaderStateChanged(state, idle);
		});

		await new Promise((resolve, reject) => {
			this.bricklet.setMode(
				this.Tinkerforge.BrickletNFC.MODE_READER,
				() => resolve(),
				(err) => reject(new Error(err || 'Failed to set NFC mode to reader'))
			);
		});

		const interval = Math.max(200, Number(process.env.NFC_INTERVAL_MS || SENSOR_INTERVAL_FAST || 1000));
		this.startPolling(interval);
		this.requestTagId();

		return true;
	}

	onReaderStateChanged(state, idle) {
		const reading = {
			sensor: 'nfc',
			uid: this.uid,
			state,
			idle: Boolean(idle),
			timestamp: new Date().toISOString()
		};

		this.lastReading = reading;
		const isNewState = !this.lastState || this.lastState.state !== state || this.lastState.idle !== Boolean(idle);
		if (!this.silent && isNewState) {
			console.log(`[NFC] Reader state changed -> state=${state}, idle=${Boolean(idle)} @ ${reading.timestamp}`);
		}
		this.lastState = { state, idle: Boolean(idle) };

		if (state === this.Tinkerforge.BrickletNFC.READER_STATE_REQUEST_TAG_ID_READY) {
			this.readTagId();
		}
	}

	requestTagId() {
		if (!this.bricklet) return;

		this.bricklet.readerRequestTagID(
			() => {
			},
			(err) => {
				console.error(`[NFC] Request tag ID error: ${err}`);
			}
		);
	}

	readTagId() {
		if (!this.bricklet) return;

		this.bricklet.readerGetTagID(
			(tagType, tagId) => {
				const idBytes = Array.isArray(tagId) ? tagId : [];
				const hexId = idBytes.map((b) => Number(b).toString(16).padStart(2, '0')).join('').toUpperCase();

				const reading = {
					sensor: 'nfc',
					uid: this.uid,
					tagType,
					tagId: idBytes,
					tagHex: hexId,
					timestamp: new Date().toISOString()
				};

				this.lastReading = reading;
				if (!this.silent || this.lastTagHex !== hexId) {
					console.log(`[NFC] Tag detected type=${tagType} id=${hexId || 'N/A'} @ ${reading.timestamp}`);
				}
				this.lastTagHex = hexId;
			},
			(err) => {
				console.error(`[NFC] Read tag ID error: ${err}`);
			}
		);
	}

	startPolling(intervalMs = SENSOR_INTERVAL_FAST || 1000) {
		if (this.requestTimer) return;

		const delay = Math.max(200, Number(intervalMs) || 1000);
		this.requestTimer = setInterval(() => {
			this.requestTagId();
		}, delay);
	}

	stopPolling() {
		if (!this.requestTimer) return;
		clearInterval(this.requestTimer);
		this.requestTimer = null;
	}
}

module.exports = NFCSensor;

if (require.main === module) {
	const Tinkerforge = require('tinkerforge');
	const host = process.env.TF_HOST || HOST || '127.0.0.1';
	const port = Number(process.env.TF_PORT || PORT || 4223);

	const ipcon = new Tinkerforge.IPConnection();
	const sensor = new NFCSensor(ipcon);

	function shutdown() {
		sensor.stopPolling();
		try {
			ipcon.disconnect();
		} catch (_) {
		}
	}

	ipcon.connect(host, port, (error) => {
		if (error) {
			console.error(`[NFC] Connect error: ${error}`);
			process.exit(1);
		}
	});

	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, async () => {
		try {
			await sensor.init();
			console.log(`[NFC] Live stream enabled via ${host}:${port}`);
			console.log('[NFC] Hold a tag near the reader. Press Ctrl+C to stop');
		} catch (err) {
			console.error(`[NFC] Init error: ${err.message}`);
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
