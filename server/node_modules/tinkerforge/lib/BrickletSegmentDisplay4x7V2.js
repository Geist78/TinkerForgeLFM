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

BrickletSegmentDisplay4x7V2.DEVICE_IDENTIFIER = 2137;
BrickletSegmentDisplay4x7V2.DEVICE_DISPLAY_NAME = 'Segment Display 4x7 Bricklet 2.0';
BrickletSegmentDisplay4x7V2.CALLBACK_COUNTER_FINISHED = 10;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_SEGMENTS = 1;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_SEGMENTS = 2;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_BRIGHTNESS = 3;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_BRIGHTNESS = 4;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_NUMERIC_VALUE = 5;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_SELECTED_SEGMENT = 6;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_SELECTED_SEGMENT = 7;
BrickletSegmentDisplay4x7V2.FUNCTION_START_COUNTER = 8;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_COUNTER_VALUE = 9;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletSegmentDisplay4x7V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletSegmentDisplay4x7V2.FUNCTION_RESET = 243;
BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_UID = 248;
BrickletSegmentDisplay4x7V2.FUNCTION_READ_UID = 249;
BrickletSegmentDisplay4x7V2.FUNCTION_GET_IDENTITY = 255;
BrickletSegmentDisplay4x7V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletSegmentDisplay4x7V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletSegmentDisplay4x7V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletSegmentDisplay4x7V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletSegmentDisplay4x7V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_OK = 0;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletSegmentDisplay4x7V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletSegmentDisplay4x7V2.STATUS_LED_CONFIG_OFF = 0;
BrickletSegmentDisplay4x7V2.STATUS_LED_CONFIG_ON = 1;
BrickletSegmentDisplay4x7V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletSegmentDisplay4x7V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletSegmentDisplay4x7V2(uid, ipcon) {
	//Four 7-segment displays with switchable dots

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSegmentDisplay4x7V2.DEVICE_IDENTIFIER, BrickletSegmentDisplay4x7V2.DEVICE_DISPLAY_NAME);
	BrickletSegmentDisplay4x7V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_SEGMENTS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_SEGMENTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_BRIGHTNESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_BRIGHTNESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_NUMERIC_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_SELECTED_SEGMENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_SELECTED_SEGMENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_START_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_COUNTER_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSegmentDisplay4x7V2.CALLBACK_COUNTER_FINISHED] = [8, ''];



	this.setSegments = function(digit0, digit1, digit2, digit3, colon, tick, returnCallback, errorCallback) {
		/*
		Sets the segments of the Segment Display 4x7 Bricklet 2.0 segment-by-segment.
		
		The data is split into the four digits, two colon dots and the tick mark.
		
		The indices of the segments in the digit and colon parameters are as follows:
		
		.. image:: /Images/Bricklets/bricklet_segment_display_4x7_v2_segment_index.png
		   :scale: 100 %
		   :alt: Indices of segments
		   :align: center
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_SEGMENTS, [digit0, digit1, digit2, digit3, colon, tick], '?8 ?8 ?8 ?8 ?2 ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSegments = function(returnCallback, errorCallback) {
		/*
		Returns the segment data as set by :func:`Set Segments`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_SEGMENTS, [], '', 14, '?8 ?8 ?8 ?8 ?2 ?', returnCallback, errorCallback, false, true);
	};
	this.setBrightness = function(brightness, returnCallback, errorCallback) {
		/*
		The brightness can be set between 0 (dark) and 7 (bright).
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_BRIGHTNESS, [brightness], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getBrightness = function(returnCallback, errorCallback) {
		/*
		Returns the brightness as set by :func:`Set Brightness`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_BRIGHTNESS, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setNumericValue = function(value, returnCallback, errorCallback) {
		/*
		Sets a numeric value for each of the digits. They represent:
		
		* -2: minus sign
		* -1: blank
		* 0-9: 0-9
		* 10: A
		* 11: b
		* 12: C
		* 13: d
		* 14: E
		* 15: F
		
		Example: A call with [-2, -1, 4, 2] will result in a display of "- 42".
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_NUMERIC_VALUE, [value], 'b4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setSelectedSegment = function(segment, value, returnCallback, errorCallback) {
		/*
		Turns one specified segment on or off.
		
		The indices of the segments are as follows:
		
		.. image:: /Images/Bricklets/bricklet_segment_display_4x7_v2_selected_segment_index.png
		   :scale: 100 %
		   :alt: Indices of selected segments
		   :align: center
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_SELECTED_SEGMENT, [segment, value], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSelectedSegment = function(segment, returnCallback, errorCallback) {
		/*
		Returns the value of a single segment.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_SELECTED_SEGMENT, [segment], 'B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.startCounter = function(valueFrom, valueTo, increment, length, returnCallback, errorCallback) {
		/*
		Starts a counter with the *from* value that counts to the *to*
		value with the each step incremented by *increment*.
		*length* is the pause between each increment.
		
		Example: If you set *from* to 0, *to* to 100, *increment* to 1 and
		*length* to 1000, a counter that goes from 0 to 100 with one second
		pause between each increment will be started.
		
		Using a negative *increment* allows to count backwards.
		
		You can stop the counter at every time by calling :func:`Set Segments`
		or :func:`Set Numeric Value`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_START_COUNTER, [valueFrom, valueTo, increment, length], 'h h h I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCounterValue = function(returnCallback, errorCallback) {
		/*
		Returns the counter value that is currently shown on the display.
		
		If there is no counter running a 0 will be returned.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_COUNTER_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSegmentDisplay4x7V2;
