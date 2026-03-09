/* ***********************************************************
 * This file was automatically generated on 2024-02-27.      *
 *                                                           *
 * JavaScript Bindings Version 2.1.35                        *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generators git repository on tinkerforge.com       *
 *************************************************************/

var Device = require('./Device');
var IPConnection = require('./IPConnection');

BrickletEnergyMonitor.DEVICE_IDENTIFIER = 2152;
BrickletEnergyMonitor.DEVICE_DISPLAY_NAME = 'Energy Monitor Bricklet';
BrickletEnergyMonitor.CALLBACK_ENERGY_DATA = 10;
BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA = 1;
BrickletEnergyMonitor.FUNCTION_RESET_ENERGY = 2;
BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL = 3;
BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_STATUS = 4;
BrickletEnergyMonitor.FUNCTION_SET_TRANSFORMER_CALIBRATION = 5;
BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_CALIBRATION = 6;
BrickletEnergyMonitor.FUNCTION_CALIBRATE_OFFSET = 7;
BrickletEnergyMonitor.FUNCTION_SET_ENERGY_DATA_CALLBACK_CONFIGURATION = 8;
BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA_CALLBACK_CONFIGURATION = 9;
BrickletEnergyMonitor.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletEnergyMonitor.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletEnergyMonitor.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletEnergyMonitor.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletEnergyMonitor.FUNCTION_WRITE_FIRMWARE = 238;
BrickletEnergyMonitor.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletEnergyMonitor.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletEnergyMonitor.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletEnergyMonitor.FUNCTION_RESET = 243;
BrickletEnergyMonitor.FUNCTION_WRITE_UID = 248;
BrickletEnergyMonitor.FUNCTION_READ_UID = 249;
BrickletEnergyMonitor.FUNCTION_GET_IDENTITY = 255;
BrickletEnergyMonitor.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletEnergyMonitor.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletEnergyMonitor.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletEnergyMonitor.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletEnergyMonitor.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletEnergyMonitor.BOOTLOADER_STATUS_OK = 0;
BrickletEnergyMonitor.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletEnergyMonitor.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletEnergyMonitor.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletEnergyMonitor.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletEnergyMonitor.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletEnergyMonitor.STATUS_LED_CONFIG_OFF = 0;
BrickletEnergyMonitor.STATUS_LED_CONFIG_ON = 1;
BrickletEnergyMonitor.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletEnergyMonitor.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletEnergyMonitor(uid, ipcon) {
	//Measures Voltage, Current, Energy, Real/Apparent/Reactive Power, Power Factor and Frequency

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletEnergyMonitor.DEVICE_IDENTIFIER, BrickletEnergyMonitor.DEVICE_DISPLAY_NAME);
	BrickletEnergyMonitor.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_RESET_ENERGY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_SET_TRANSFORMER_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_CALIBRATE_OFFSET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_SET_ENERGY_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEnergyMonitor.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletEnergyMonitor.CALLBACK_ENERGY_DATA] = [36, 'i i i i i i H H'];


	this.streamStateObjects[BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL] = {
		'dataMapping': ['streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': 1536,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': '',
			'unpackFormatString': 'H h30',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.getEnergyData = function(returnCallback, errorCallback) {
		/*
		Returns all of the measurements that are done by the Energy Monitor Bricklet.
		
		* Voltage RMS
		* Current RMS
		* Energy (integrated over time)
		* Real Power
		* Apparent Power
		* Reactive Power
		* Power Factor
		* Frequency (AC Frequency of the mains voltage)
		
		The frequency is recalculated every 6 seconds.
		
		All other values are integrated over 10 zero-crossings of the voltage sine wave.
		With a standard AC mains voltage frequency of 50Hz this results in a 5 measurements
		per second (or an integration time of 200ms per measurement).
		
		If no voltage transformer is connected, the Bricklet will use the current waveform
		to calculate the frequency and it will use an integration time of
		10 zero-crossings of the current waveform.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA, [], '', 36, 'i i i i i i H H', returnCallback, errorCallback, false, true);
	};
	this.resetEnergy = function(returnCallback, errorCallback) {
		/*
		Sets the energy value (see :func:`Get Energy Data`) back to 0Wh.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_RESET_ENERGY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getWaveformLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns a snapshot of the voltage and current waveform. The values
		in the returned array alternate between voltage and current. The data from
		one getter call contains 768 data points for voltage and current, which
		correspond to about 3 full sine waves.
		
		The voltage is given with a resolution of 100mV and the current is given
		with a resolution of 10mA.
		
		This data is meant to be used for a non-realtime graphical representation of
		the voltage and current waveforms.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL, [], '', 70, 'H h30', returnCallback, errorCallback, false, true);
	};
	this.getTransformerStatus = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a voltage/current transformer is connected to the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_STATUS, [], '', 10, '? ?', returnCallback, errorCallback, false, true);
	};
	this.setTransformerCalibration = function(voltageRatio, currentRatio, phaseShift, returnCallback, errorCallback) {
		/*
		Sets the transformer ratio for the voltage and current transformer in 1/100 form.
		
		Example: If your mains voltage is 230V, you use 9V voltage transformer and a
		1V:30A current clamp your voltage ratio is 230/9 = 25.56 and your current ratio
		is 30/1 = 30.
		
		In this case you have to set the values 2556 and 3000 for voltage ratio and current
		ratio.
		
		The calibration is saved in non-volatile memory, you only have to set it once.
		
		Set the phase shift to 0. It is for future use and currently not supported by the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_SET_TRANSFORMER_CALIBRATION, [voltageRatio, currentRatio, phaseShift], 'H H h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTransformerCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the transformer calibration as set by :func:`Set Transformer Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_TRANSFORMER_CALIBRATION, [], '', 14, 'H H h', returnCallback, errorCallback, false, true);
	};
	this.calibrateOffset = function(returnCallback, errorCallback) {
		/*
		Calling this function will start an offset calibration. The offset calibration will
		integrate the voltage and current waveform over a longer time period to find the 0
		transition point in the sine wave.
		
		The Bricklet comes with a factory-calibrated offset value, you should not have to
		call this function.
		
		If you want to re-calibrate the offset we recommend that you connect a load that
		has a smooth sinusoidal voltage and current waveform. Alternatively you can also
		short both inputs.
		
		The calibration is saved in non-volatile memory, you only have to set it once.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_CALIBRATE_OFFSET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setEnergyDataCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Energy Data`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_SET_ENERGY_DATA_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnergyDataCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Energy Data Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_ENERGY_DATA_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c', 'd', 'e', 'f', 'g' or 'h' (Bricklet Port).
		A Bricklet connected to an :ref:`Isolator Bricklet <isolator_bricklet>` is always at
		position 'z'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletEnergyMonitor.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.getWaveform = function(returnCallback, errorCallback) {
		/*
		Returns a snapshot of the voltage and current waveform. The values
		in the returned array alternate between voltage and current. The data from
		one getter call contains 768 data points for voltage and current, which
		correspond to about 3 full sine waves.
		
		The voltage is given with a resolution of 100mV and the current is given
		with a resolution of 10mA.
		
		This data is meant to be used for a non-realtime graphical representation of
		the voltage and current waveforms.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[3];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var waveformLength = null;
					var waveformChunkData = null;
					var waveformOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var waveformChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							waveformChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							waveformChunkOffset = llvalues[i];
						}
					}

					waveformLength = streamStateObject['streamProperties']['fixedLength'];

					function handleOOS() {
						if ((waveformChunkOffset + 30) < waveformLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL, [], '', 70, 'H h30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;

						if (waveformChunkOffset === ((1 << 16) - 1)) { // maximum chunk offset -> stream has no data
							waveformLength = 0;
							waveformOutOfSync = false;
							streamStateObject['responseProperties']['data'].length = 0;
						}
						else {
								waveformOutOfSync = (waveformChunkOffset !== 0);
								streamStateObject['responseProperties']['data'] = waveformChunkData;
						}
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!waveformOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < waveformLength)) {
									streamStateObject['responseProperties']['runningSubcall'] = true;
									device.ipcon.sendRequest(device, BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL, [], '', 70, 'H h30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

									return;
							}
						}
						else {
							waveformOutOfSync =
								(waveformChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!waveformOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < waveformLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(waveformChunkData);
									if (streamStateObject['responseProperties']['data'].length >= waveformLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, waveformLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL, [], '', 70, 'H h30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else {
						handleOOS();

						return;
					}

					if (waveformOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, waveformLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletEnergyMonitor.FUNCTION_GET_WAVEFORM_LOW_LEVEL,
			                       [],
			                       '',
			                       70,
			                       'H h30',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getWaveform.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletEnergyMonitor;
