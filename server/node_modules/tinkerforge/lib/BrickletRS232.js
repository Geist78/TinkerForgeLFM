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

BrickletRS232.DEVICE_IDENTIFIER = 254;
BrickletRS232.DEVICE_DISPLAY_NAME = 'RS232 Bricklet';
BrickletRS232.CALLBACK_READ = 8;
BrickletRS232.CALLBACK_ERROR = 9;
BrickletRS232.CALLBACK_FRAME_READABLE = 13;
BrickletRS232.CALLBACK_READ_CALLBACK = 8; // for backward compatibility
BrickletRS232.CALLBACK_ERROR_CALLBACK = 9; // for backward compatibility
BrickletRS232.FUNCTION_WRITE = 1;
BrickletRS232.FUNCTION_READ = 2;
BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK = 3;
BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK = 4;
BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED = 5;
BrickletRS232.FUNCTION_SET_CONFIGURATION = 6;
BrickletRS232.FUNCTION_GET_CONFIGURATION = 7;
BrickletRS232.FUNCTION_SET_BREAK_CONDITION = 10;
BrickletRS232.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION = 11;
BrickletRS232.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION = 12;
BrickletRS232.FUNCTION_READ_FRAME = 14;
BrickletRS232.FUNCTION_GET_IDENTITY = 255;
BrickletRS232.BAUDRATE_300 = 0;
BrickletRS232.BAUDRATE_600 = 1;
BrickletRS232.BAUDRATE_1200 = 2;
BrickletRS232.BAUDRATE_2400 = 3;
BrickletRS232.BAUDRATE_4800 = 4;
BrickletRS232.BAUDRATE_9600 = 5;
BrickletRS232.BAUDRATE_14400 = 6;
BrickletRS232.BAUDRATE_19200 = 7;
BrickletRS232.BAUDRATE_28800 = 8;
BrickletRS232.BAUDRATE_38400 = 9;
BrickletRS232.BAUDRATE_57600 = 10;
BrickletRS232.BAUDRATE_115200 = 11;
BrickletRS232.BAUDRATE_230400 = 12;
BrickletRS232.PARITY_NONE = 0;
BrickletRS232.PARITY_ODD = 1;
BrickletRS232.PARITY_EVEN = 2;
BrickletRS232.PARITY_FORCED_PARITY_1 = 3;
BrickletRS232.PARITY_FORCED_PARITY_0 = 4;
BrickletRS232.STOPBITS_1 = 1;
BrickletRS232.STOPBITS_2 = 2;
BrickletRS232.WORDLENGTH_5 = 5;
BrickletRS232.WORDLENGTH_6 = 6;
BrickletRS232.WORDLENGTH_7 = 7;
BrickletRS232.WORDLENGTH_8 = 8;
BrickletRS232.HARDWARE_FLOWCONTROL_OFF = 0;
BrickletRS232.HARDWARE_FLOWCONTROL_ON = 1;
BrickletRS232.SOFTWARE_FLOWCONTROL_OFF = 0;
BrickletRS232.SOFTWARE_FLOWCONTROL_ON = 1;
BrickletRS232.ERROR_OVERRUN = 1;
BrickletRS232.ERROR_PARITY = 2;
BrickletRS232.ERROR_FRAMING = 4;

function BrickletRS232(uid, ipcon) {
	//Communicates with RS232 devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRS232.DEVICE_IDENTIFIER, BrickletRS232.DEVICE_DISPLAY_NAME);
	BrickletRS232.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 3];
	this.responseExpected[BrickletRS232.FUNCTION_WRITE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_READ] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_SET_BREAK_CONDITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_READ_FRAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRS232.CALLBACK_READ] = [69, 'c60 B'];
	this.callbackFormats[BrickletRS232.CALLBACK_ERROR] = [9, 'B'];
	this.callbackFormats[BrickletRS232.CALLBACK_FRAME_READABLE] = [9, 'B'];



	this.write = function(message, length, returnCallback, errorCallback) {
		/*
		Writes a string of up to 60 characters to the RS232 interface. The string
		can be binary data, ASCII or similar is not necessary.
		
		The length of the string has to be given as an additional parameter.
		
		The return value is the number of bytes that could be written.
		
		See :func:`Set Configuration` for configuration possibilities
		regarding baudrate, parity and so on.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_WRITE, [message, length], 'c60 B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.read = function(returnCallback, errorCallback) {
		/*
		Returns the currently buffered message. The maximum length
		of message is 60. If the returned length is 0, no new data was available.
		
		Instead of polling with this function, you can also use
		callbacks. See :func:`Enable Read Callback` and :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_READ, [], '', 69, 'c60 B', returnCallback, errorCallback, false, true);
	};
	this.enableReadCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Read` callback. This will disable the :cb:`Frame Readable` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableReadCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isReadCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Read` callback is enabled,
		*false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(baudrate, parity, stopbits, wordlength, hardwareFlowcontrol, softwareFlowcontrol, returnCallback, errorCallback) {
		/*
		Sets the configuration for the RS232 communication.
		
		Hard-/Software flow control can either be on or off but not both simultaneously on.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_SET_CONFIGURATION, [baudrate, parity, stopbits, wordlength, hardwareFlowcontrol, softwareFlowcontrol], 'B B B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_GET_CONFIGURATION, [], '', 14, 'B B B B B B', returnCallback, errorCallback, false, true);
	};
	this.setBreakCondition = function(breakTime, returnCallback, errorCallback) {
		/*
		Sets a break condition (the TX output is forced to a logic 0 state).
		The parameter sets the hold-time of the break condition.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_SET_BREAK_CONDITION, [breakTime], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setFrameReadableCallbackConfiguration = function(frameSize, returnCallback, errorCallback) {
		/*
		Configures the :cb:`Frame Readable` callback. The frame size is the number of bytes, that have to be readable to trigger the callback.
		A frame size of 0 disables the callback. A frame size greater than 0 enables the callback and disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		
		.. versionadded:: 2.0.4$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION, [frameSize], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameReadableCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Frame Readable Callback Configuration`.
		
		.. versionadded:: 2.0.4$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.readFrame = function(returnCallback, errorCallback) {
		/*
		Returns up to one frame of bytes from the read buffer.
		The frame size is configured with :func:`Set Frame Readable Callback Configuration`.
		If the returned length is 0, no new data was available.
		
		.. versionadded:: 2.0.4$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_READ_FRAME, [], '', 69, 'c60 B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRS232;
