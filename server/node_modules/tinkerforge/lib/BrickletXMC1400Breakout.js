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

BrickletXMC1400Breakout.DEVICE_IDENTIFIER = 279;
BrickletXMC1400Breakout.DEVICE_DISPLAY_NAME = 'XMC1400 Breakout Bricklet';
BrickletXMC1400Breakout.CALLBACK_ADC_VALUES = 9;
BrickletXMC1400Breakout.CALLBACK_COUNT = 13;
BrickletXMC1400Breakout.FUNCTION_SET_GPIO_CONFIG = 1;
BrickletXMC1400Breakout.FUNCTION_GET_GPIO_INPUT = 2;
BrickletXMC1400Breakout.FUNCTION_SET_ADC_CHANNEL_CONFIG = 3;
BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_CONFIG = 4;
BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_VALUE = 5;
BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES = 6;
BrickletXMC1400Breakout.FUNCTION_SET_ADC_VALUES_CALLBACK_CONFIGURATION = 7;
BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES_CALLBACK_CONFIGURATION = 8;
BrickletXMC1400Breakout.FUNCTION_GET_COUNT = 10;
BrickletXMC1400Breakout.FUNCTION_SET_COUNT_CALLBACK_CONFIGURATION = 11;
BrickletXMC1400Breakout.FUNCTION_GET_COUNT_CALLBACK_CONFIGURATION = 12;
BrickletXMC1400Breakout.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletXMC1400Breakout.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletXMC1400Breakout.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletXMC1400Breakout.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletXMC1400Breakout.FUNCTION_WRITE_FIRMWARE = 238;
BrickletXMC1400Breakout.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletXMC1400Breakout.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletXMC1400Breakout.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletXMC1400Breakout.FUNCTION_RESET = 243;
BrickletXMC1400Breakout.FUNCTION_WRITE_UID = 248;
BrickletXMC1400Breakout.FUNCTION_READ_UID = 249;
BrickletXMC1400Breakout.FUNCTION_GET_IDENTITY = 255;
BrickletXMC1400Breakout.THRESHOLD_OPTION_OFF = 'x';
BrickletXMC1400Breakout.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletXMC1400Breakout.THRESHOLD_OPTION_INSIDE = 'i';
BrickletXMC1400Breakout.THRESHOLD_OPTION_SMALLER = '<';
BrickletXMC1400Breakout.THRESHOLD_OPTION_GREATER = '>';
BrickletXMC1400Breakout.GPIO_MODE_INPUT_TRISTATE = 0;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_PULL_DOWN = 1;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_PULL_UP = 2;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_SAMPLING = 3;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_INVERTED_TRISTATE = 4;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_INVERTED_PULL_DOWN = 5;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_INVERTED_PULL_UP = 6;
BrickletXMC1400Breakout.GPIO_MODE_INPUT_INVERTED_SAMPLING = 7;
BrickletXMC1400Breakout.GPIO_MODE_OUTPUT_PUSH_PULL = 8;
BrickletXMC1400Breakout.GPIO_MODE_OUTPUT_OPEN_DRAIN = 9;
BrickletXMC1400Breakout.GPIO_INPUT_HYSTERESIS_STANDARD = 0;
BrickletXMC1400Breakout.GPIO_INPUT_HYSTERESIS_LARGE = 4;
BrickletXMC1400Breakout.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletXMC1400Breakout.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletXMC1400Breakout.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletXMC1400Breakout.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletXMC1400Breakout.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_OK = 0;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletXMC1400Breakout.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletXMC1400Breakout.STATUS_LED_CONFIG_OFF = 0;
BrickletXMC1400Breakout.STATUS_LED_CONFIG_ON = 1;
BrickletXMC1400Breakout.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletXMC1400Breakout.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletXMC1400Breakout(uid, ipcon) {
	//Breakout for Infineon XMC1400 microcontroller

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletXMC1400Breakout.DEVICE_IDENTIFIER, BrickletXMC1400Breakout.DEVICE_DISPLAY_NAME);
	BrickletXMC1400Breakout.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_GPIO_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_GPIO_INPUT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_ADC_CHANNEL_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_ADC_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_COUNT_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_COUNT_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletXMC1400Breakout.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletXMC1400Breakout.CALLBACK_ADC_VALUES] = [24, 'H8'];
	this.callbackFormats[BrickletXMC1400Breakout.CALLBACK_COUNT] = [12, 'I'];



	this.setGPIOConfig = function(port, pin, mode, inputHysteresis, outputLevel, returnCallback, errorCallback) {
		/*
		Example for a setter function. The values are the values that can be given to
		the XMC_GPIO_Init function. See communication.c in the firmware.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_GPIO_CONFIG, [port, pin, mode, inputHysteresis, outputLevel], 'B B B B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGPIOInput = function(port, pin, returnCallback, errorCallback) {
		/*
		Example for a getter function. Returns the result of a
		XMC_GPIO_GetInput call for the given port/pin.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_GPIO_INPUT, [port, pin], 'B B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setADCChannelConfig = function(channel, enable, returnCallback, errorCallback) {
		/*
		Enables a ADC channel for the ADC driver example (adc.c/adc.h).
		
		There are 8 ADC channels and they correspond to the following pins:
		
		* Channel 0: P2_6
		* Channel 1: P2_8
		* Channel 2: P2_9
		* Channel 3: P2_10
		* Channel 4: P2_11
		* Channel 5: P2_0
		* Channel 6: P2_1
		* Channel 7: P2_2
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_ADC_CHANNEL_CONFIG, [channel, enable], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getADCChannelConfig = function(channel, returnCallback, errorCallback) {
		/*
		Returns the config for the given channel as set by :func:`Set ADC Channel Config`.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_CONFIG, [channel], 'B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getADCChannelValue = function(channel, returnCallback, errorCallback) {
		/*
		Returns the 12-bit value of the given ADC channel of the ADC driver example.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_ADC_CHANNEL_VALUE, [channel], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getADCValues = function(returnCallback, errorCallback) {
		/*
		Returns the values for all 8 ADC channels of the adc driver example.
		
		This example function also has a corresponding callback.
		
		See :func:`Set ADC Values Callback Configuration` and :cb:`ADC Values` callback.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES, [], '', 24, 'H8', returnCallback, errorCallback, false, true);
	};
	this.setADCValuesCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`ADC Values`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_ADC_VALUES_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getADCValuesCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set ADC Values Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_ADC_VALUES_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getCount = function(returnCallback, errorCallback) {
		/*
		Returns the value of the example count (see example.c).
		
		This example function uses the "add_callback_value_function"-helper in the
		generator. The getter as well as the callback and callback configuration
		functions are auto-generated for the API as well as the firmware.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Count` callback. You can set the callback configuration
		with :func:`Set Count Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_COUNT, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setCountCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Count` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Count` callback.
		
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
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_COUNT_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c I I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCountCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Count Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_COUNT_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletXMC1400Breakout.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletXMC1400Breakout;
