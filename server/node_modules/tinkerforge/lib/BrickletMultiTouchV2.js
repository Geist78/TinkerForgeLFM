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

BrickletMultiTouchV2.DEVICE_IDENTIFIER = 2129;
BrickletMultiTouchV2.DEVICE_DISPLAY_NAME = 'Multi Touch Bricklet 2.0';
BrickletMultiTouchV2.CALLBACK_TOUCH_STATE = 4;
BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE = 1;
BrickletMultiTouchV2.FUNCTION_SET_TOUCH_STATE_CALLBACK_CONFIGURATION = 2;
BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE_CALLBACK_CONFIGURATION = 3;
BrickletMultiTouchV2.FUNCTION_RECALIBRATE = 5;
BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_CONFIG = 6;
BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_CONFIG = 7;
BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_SENSITIVITY = 8;
BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_SENSITIVITY = 9;
BrickletMultiTouchV2.FUNCTION_SET_TOUCH_LED_CONFIG = 10;
BrickletMultiTouchV2.FUNCTION_GET_TOUCH_LED_CONFIG = 11;
BrickletMultiTouchV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletMultiTouchV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletMultiTouchV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletMultiTouchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletMultiTouchV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletMultiTouchV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletMultiTouchV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletMultiTouchV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletMultiTouchV2.FUNCTION_RESET = 243;
BrickletMultiTouchV2.FUNCTION_WRITE_UID = 248;
BrickletMultiTouchV2.FUNCTION_READ_UID = 249;
BrickletMultiTouchV2.FUNCTION_GET_IDENTITY = 255;
BrickletMultiTouchV2.TOUCH_LED_CONFIG_OFF = 0;
BrickletMultiTouchV2.TOUCH_LED_CONFIG_ON = 1;
BrickletMultiTouchV2.TOUCH_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletMultiTouchV2.TOUCH_LED_CONFIG_SHOW_TOUCH = 3;
BrickletMultiTouchV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletMultiTouchV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletMultiTouchV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletMultiTouchV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletMultiTouchV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletMultiTouchV2.BOOTLOADER_STATUS_OK = 0;
BrickletMultiTouchV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletMultiTouchV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletMultiTouchV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletMultiTouchV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletMultiTouchV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletMultiTouchV2.STATUS_LED_CONFIG_OFF = 0;
BrickletMultiTouchV2.STATUS_LED_CONFIG_ON = 1;
BrickletMultiTouchV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletMultiTouchV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletMultiTouchV2(uid, ipcon) {
	//Capacitive touch sensor for 12 electrodes

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletMultiTouchV2.DEVICE_IDENTIFIER, BrickletMultiTouchV2.DEVICE_DISPLAY_NAME);
	BrickletMultiTouchV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_TOUCH_STATE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_RECALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_SENSITIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_TOUCH_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_TOUCH_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMultiTouchV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMultiTouchV2.CALLBACK_TOUCH_STATE] = [10, '?13'];



	this.getTouchState = function(returnCallback, errorCallback) {
		/*
		Returns the current touch state. The state is given as a array of
		bools.
		
		Element 0 to 11 represent the 12 electrodes and element 12 represents
		the proximity.
		
		If an electrode is touched, the corresponding element is *true*. If
		a hand or similar is in proximity to the electrodes, element 12 is
		*true*.
		
		The proximity is activated with a distance of 1-2cm. An electrode
		is already counted as touched if a finger is nearly touching the
		electrode. This means that you can put a piece of paper or foil
		or similar on top of a electrode to build a touch panel with
		a professional look.
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Touch State` callback. You can set the callback configuration
		with :func:`Set Touch State Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE, [], '', 10, '?13', returnCallback, errorCallback, false, true);
	};
	this.setTouchStateCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Touch State` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_TOUCH_STATE_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTouchStateCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Touch State Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_TOUCH_STATE_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.recalibrate = function(returnCallback, errorCallback) {
		/*
		Recalibrates the electrodes. Call this function whenever you changed
		or moved you electrodes.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_RECALIBRATE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setElectrodeConfig = function(enabledElectrodes, returnCallback, errorCallback) {
		/*
		Enables/disables electrodes with a bool array (see :func:`Get Touch State`).
		
		*True* enables the electrode, *false* disables the electrode. A
		disabled electrode will always return *false* as its state. If you
		don't need all electrodes you can disable the electrodes that are
		not needed.
		
		It is recommended that you disable the proximity electrode (element 12) if
		the proximity feature is not needed. This will reduce the amount of
		traffic that is produced by the :cb:`Touch State` callback.
		
		Disabling electrodes will also reduce power consumption.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_CONFIG, [enabledElectrodes], '?13', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getElectrodeConfig = function(returnCallback, errorCallback) {
		/*
		Returns the electrode configuration, as set by :func:`Set Electrode Config`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_CONFIG, [], '', 10, '?13', returnCallback, errorCallback, false, true);
	};
	this.setElectrodeSensitivity = function(sensitivity, returnCallback, errorCallback) {
		/*
		Sets the sensitivity of the electrodes. An electrode with a high sensitivity
		will register a touch earlier then an electrode with a low sensitivity.
		
		If you build a big electrode you might need to decrease the sensitivity, since
		the area that can be charged will get bigger. If you want to be able to
		activate an electrode from further away you need to increase the sensitivity.
		
		After a new sensitivity is set, you likely want to call :func:`Recalibrate`
		to calibrate the electrodes with the newly defined sensitivity.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_ELECTRODE_SENSITIVITY, [sensitivity], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getElectrodeSensitivity = function(returnCallback, errorCallback) {
		/*
		Returns the current sensitivity, as set by :func:`Set Electrode Sensitivity`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_ELECTRODE_SENSITIVITY, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setTouchLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Configures the touch LED to be either turned off, turned on, blink in
		heartbeat mode or show the touch state (electrode touched = LED on).
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_TOUCH_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTouchLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the LED configuration as set by :func:`Set Touch LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_TOUCH_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMultiTouchV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletMultiTouchV2;
