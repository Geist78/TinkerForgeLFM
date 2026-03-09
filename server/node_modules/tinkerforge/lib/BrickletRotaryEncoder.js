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

BrickletRotaryEncoder.DEVICE_IDENTIFIER = 236;
BrickletRotaryEncoder.DEVICE_DISPLAY_NAME = 'Rotary Encoder Bricklet';
BrickletRotaryEncoder.CALLBACK_COUNT = 8;
BrickletRotaryEncoder.CALLBACK_COUNT_REACHED = 9;
BrickletRotaryEncoder.CALLBACK_PRESSED = 11;
BrickletRotaryEncoder.CALLBACK_RELEASED = 12;
BrickletRotaryEncoder.FUNCTION_GET_COUNT = 1;
BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD = 2;
BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD = 3;
BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD = 4;
BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD = 5;
BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletRotaryEncoder.FUNCTION_IS_PRESSED = 10;
BrickletRotaryEncoder.FUNCTION_GET_IDENTITY = 255;
BrickletRotaryEncoder.THRESHOLD_OPTION_OFF = 'x';
BrickletRotaryEncoder.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletRotaryEncoder.THRESHOLD_OPTION_INSIDE = 'i';
BrickletRotaryEncoder.THRESHOLD_OPTION_SMALLER = '<';
BrickletRotaryEncoder.THRESHOLD_OPTION_GREATER = '>';

function BrickletRotaryEncoder(uid, ipcon) {
	//360° rotary encoder with push-button

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRotaryEncoder.DEVICE_IDENTIFIER, BrickletRotaryEncoder.DEVICE_DISPLAY_NAME);
	BrickletRotaryEncoder.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_IS_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryEncoder.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRotaryEncoder.CALLBACK_COUNT] = [12, 'i'];
	this.callbackFormats[BrickletRotaryEncoder.CALLBACK_COUNT_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletRotaryEncoder.CALLBACK_PRESSED] = [8, ''];
	this.callbackFormats[BrickletRotaryEncoder.CALLBACK_RELEASED] = [8, ''];



	this.getCount = function(reset, returnCallback, errorCallback) {
		/*
		Returns the current count of the encoder. If you set reset
		to true, the count is set back to 0 directly after the
		current count is read.
		
		The encoder has 24 steps per rotation
		
		Turning the encoder to the left decrements the counter,
		so a negative count is possible.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT, [reset], '?', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setCountCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Count` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Count` callback is only triggered if the count has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCountCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Count Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setCountCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Count Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the count is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the count is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the count is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the count is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_COUNT_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCountCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Count Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_COUNT_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Count Reached`
		
		is triggered, if the thresholds
		
		* :func:`Set Count Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.isPressed = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the button is pressed and *false* otherwise.
		
		It is recommended to use the :cb:`Pressed` and :cb:`Released` callbacks
		to handle the button.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_IS_PRESSED, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRotaryEncoder.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRotaryEncoder;
