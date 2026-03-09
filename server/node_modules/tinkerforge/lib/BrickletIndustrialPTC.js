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

BrickletIndustrialPTC.DEVICE_IDENTIFIER = 2164;
BrickletIndustrialPTC.DEVICE_DISPLAY_NAME = 'Industrial PTC Bricklet';
BrickletIndustrialPTC.CALLBACK_TEMPERATURE = 4;
BrickletIndustrialPTC.CALLBACK_RESISTANCE = 8;
BrickletIndustrialPTC.CALLBACK_SENSOR_CONNECTED = 18;
BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE = 1;
BrickletIndustrialPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 2;
BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 3;
BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE = 5;
BrickletIndustrialPTC.FUNCTION_SET_RESISTANCE_CALLBACK_CONFIGURATION = 6;
BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE_CALLBACK_CONFIGURATION = 7;
BrickletIndustrialPTC.FUNCTION_SET_NOISE_REJECTION_FILTER = 9;
BrickletIndustrialPTC.FUNCTION_GET_NOISE_REJECTION_FILTER = 10;
BrickletIndustrialPTC.FUNCTION_IS_SENSOR_CONNECTED = 11;
BrickletIndustrialPTC.FUNCTION_SET_WIRE_MODE = 12;
BrickletIndustrialPTC.FUNCTION_GET_WIRE_MODE = 13;
BrickletIndustrialPTC.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION = 14;
BrickletIndustrialPTC.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION = 15;
BrickletIndustrialPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION = 16;
BrickletIndustrialPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION = 17;
BrickletIndustrialPTC.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialPTC.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialPTC.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialPTC.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialPTC.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialPTC.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialPTC.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialPTC.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialPTC.FUNCTION_RESET = 243;
BrickletIndustrialPTC.FUNCTION_WRITE_UID = 248;
BrickletIndustrialPTC.FUNCTION_READ_UID = 249;
BrickletIndustrialPTC.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialPTC.THRESHOLD_OPTION_OFF = 'x';
BrickletIndustrialPTC.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletIndustrialPTC.THRESHOLD_OPTION_INSIDE = 'i';
BrickletIndustrialPTC.THRESHOLD_OPTION_SMALLER = '<';
BrickletIndustrialPTC.THRESHOLD_OPTION_GREATER = '>';
BrickletIndustrialPTC.FILTER_OPTION_50HZ = 0;
BrickletIndustrialPTC.FILTER_OPTION_60HZ = 1;
BrickletIndustrialPTC.WIRE_MODE_2 = 2;
BrickletIndustrialPTC.WIRE_MODE_3 = 3;
BrickletIndustrialPTC.WIRE_MODE_4 = 4;
BrickletIndustrialPTC.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialPTC.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialPTC.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialPTC.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialPTC.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialPTC.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialPTC.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialPTC.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialPTC.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialPTC.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialPTC.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialPTC.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialPTC.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialPTC.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialPTC.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialPTC(uid, ipcon) {
	//Reads temperatures from Pt100 und Pt1000 sensors

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialPTC.DEVICE_IDENTIFIER, BrickletIndustrialPTC.DEVICE_DISPLAY_NAME);
	BrickletIndustrialPTC.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_RESISTANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_IS_SENSOR_CONNECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_WIRE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_WIRE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialPTC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialPTC.CALLBACK_TEMPERATURE] = [12, 'i'];
	this.callbackFormats[BrickletIndustrialPTC.CALLBACK_RESISTANCE] = [12, 'i'];
	this.callbackFormats[BrickletIndustrialPTC.CALLBACK_SENSOR_CONNECTED] = [9, '?'];



	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the connected sensor.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Temperature` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.getResistance = function(returnCallback, errorCallback) {
		/*
		Returns the value as measured by the MAX31865 precision delta-sigma ADC.
		
		The value can be converted with the following formulas:
		
		* Pt100:  resistance = (value * 390) / 32768
		* Pt1000: resistance = (value * 3900) / 32768
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Resistance` callback. You can set the callback configuration
		with :func:`Set Resistance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setResistanceCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Resistance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Resistance` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_RESISTANCE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getResistanceCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Resistance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_RESISTANCE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.setNoiseRejectionFilter = function(filter, returnCallback, errorCallback) {
		/*
		Sets the noise rejection filter to either 50Hz (0) or 60Hz (1).
		Noise from 50Hz or 60Hz power sources (including
		harmonics of the AC power's fundamental frequency) is
		attenuated by 82dB.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_NOISE_REJECTION_FILTER, [filter], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getNoiseRejectionFilter = function(returnCallback, errorCallback) {
		/*
		Returns the noise rejection filter option as set by
		:func:`Set Noise Rejection Filter`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_NOISE_REJECTION_FILTER, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.isSensorConnected = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the sensor is connected correctly.
		
		If this function
		returns *false*, there is either no Pt100 or Pt1000 sensor connected,
		the sensor is connected incorrectly or the sensor itself is faulty.
		
		If you want to get the status automatically, it is recommended to use the
		:cb:`Sensor Connected` callback. You can set the callback configuration
		with :func:`Set Sensor Connected Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_IS_SENSOR_CONNECTED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setWireMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the wire mode of the sensor. Possible values are 2, 3 and 4 which
		correspond to 2-, 3- and 4-wire sensors. The value has to match the jumper
		configuration on the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_WIRE_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getWireMode = function(returnCallback, errorCallback) {
		/*
		Returns the wire mode as set by :func:`Set Wire Mode`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_WIRE_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverageConfiguration = function(movingAverageLengthResistance, movingAverageLengthTemperature, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the resistance and temperature.
		
		Setting the length to 1 will turn the averaging off. With less
		averaging, there is more noise on the data.
		
		New data is gathered every 20ms. With a moving average of length 1000 the resulting
		averaging window has a length of 20s. If you want to do long term measurements the longest
		moving average will give the cleanest results.
		
		The default values match the non-changeable averaging settings of the old PTC Bricklet 1.0
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION, [movingAverageLengthResistance, movingAverageLengthTemperature], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverageConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the moving average configuration as set by :func:`Set Moving Average Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setSensorConnectedCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		If you enable this callback, the :cb:`Sensor Connected` callback is triggered
		every time a Pt sensor is connected/disconnected.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorConnectedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Sensor Connected Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialPTC.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialPTC;
