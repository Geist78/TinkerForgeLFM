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

BrickletJoystick.DEVICE_IDENTIFIER = 210;
BrickletJoystick.DEVICE_DISPLAY_NAME = 'Joystick Bricklet';
BrickletJoystick.CALLBACK_POSITION = 15;
BrickletJoystick.CALLBACK_ANALOG_VALUE = 16;
BrickletJoystick.CALLBACK_POSITION_REACHED = 17;
BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletJoystick.CALLBACK_PRESSED = 19;
BrickletJoystick.CALLBACK_RELEASED = 20;
BrickletJoystick.FUNCTION_GET_POSITION = 1;
BrickletJoystick.FUNCTION_IS_PRESSED = 2;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE = 3;
BrickletJoystick.FUNCTION_CALIBRATE = 4;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 5;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 6;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 9;
BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 10;
BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletJoystick.FUNCTION_GET_IDENTITY = 255;
BrickletJoystick.THRESHOLD_OPTION_OFF = 'x';
BrickletJoystick.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletJoystick.THRESHOLD_OPTION_INSIDE = 'i';
BrickletJoystick.THRESHOLD_OPTION_SMALLER = '<';
BrickletJoystick.THRESHOLD_OPTION_GREATER = '>';

function BrickletJoystick(uid, ipcon) {
	//2-axis joystick with push-button

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletJoystick.DEVICE_IDENTIFIER, BrickletJoystick.DEVICE_DISPLAY_NAME);
	BrickletJoystick.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_IS_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletJoystick.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletJoystick.CALLBACK_POSITION] = [12, 'h h'];
	this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE] = [12, 'H H'];
	this.callbackFormats[BrickletJoystick.CALLBACK_POSITION_REACHED] = [12, 'h h'];
	this.callbackFormats[BrickletJoystick.CALLBACK_ANALOG_VALUE_REACHED] = [12, 'H H'];
	this.callbackFormats[BrickletJoystick.CALLBACK_PRESSED] = [8, ''];
	this.callbackFormats[BrickletJoystick.CALLBACK_RELEASED] = [8, ''];



	this.getPosition = function(returnCallback, errorCallback) {
		/*
		Returns the position of the joystick. The middle position of the joystick is x=0, y=0.
		The returned values are averaged and calibrated (see :func:`Calibrate`).
		
		If you want to get the position periodically, it is recommended to use the
		:cb:`Position` callback and set the period with
		:func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION, [], '', 12, 'h h', returnCallback, errorCallback, false, true);
	};
	this.isPressed = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the button is pressed and *false* otherwise.
		
		It is recommended to use the :cb:`Pressed` and :cb:`Released` callbacks
		to handle the button.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_IS_PRESSED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the values as read by a 12-bit analog-to-digital converter.
		
		.. note::
		 The values returned by :func:`Get Position` are averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The only reason to use :func:`Get Analog Value` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog values periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		Calibrates the middle position of the joystick. If your Joystick Bricklet
		does not return x=0 and y=0 in the middle position, call this function
		while the joystick is standing still in the middle position.
		
		The resulting calibration will be saved on the EEPROM of the Joystick
		Bricklet, thus you only have to calibrate it once.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_CALIBRATE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Position` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Position` callback is only triggered if the position has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog values have
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setPositionCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Position Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the position is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the position is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the position is smaller than the min values (max is ignored)"
		 "'>'",    "Callback is triggered when the position is greater than the min values (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c h h h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Position Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 17, 'c h h h h', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackThreshold = function(option, minX, maxX, minY, maxY, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Analog Value Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog values are *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog values are *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog values are smaller than the min values (max is ignored)"
		 "'>'",    "Callback is triggered when the analog values are greater than the min values (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY], 'c H H H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 17, 'c H H H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Position Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Position Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletJoystick.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletJoystick;
