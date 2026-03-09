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

BrickletLine.DEVICE_IDENTIFIER = 241;
BrickletLine.DEVICE_DISPLAY_NAME = 'Line Bricklet';
BrickletLine.CALLBACK_REFLECTIVITY = 8;
BrickletLine.CALLBACK_REFLECTIVITY_REACHED = 9;
BrickletLine.FUNCTION_GET_REFLECTIVITY = 1;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD = 2;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD = 3;
BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD = 4;
BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD = 5;
BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletLine.FUNCTION_GET_IDENTITY = 255;
BrickletLine.THRESHOLD_OPTION_OFF = 'x';
BrickletLine.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLine.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLine.THRESHOLD_OPTION_SMALLER = '<';
BrickletLine.THRESHOLD_OPTION_GREATER = '>';

function BrickletLine(uid, ipcon) {
	//Measures reflectivity of a surface

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletLine.DEVICE_IDENTIFIER, BrickletLine.DEVICE_DISPLAY_NAME);
	BrickletLine.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLine.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY] = [10, 'H'];
	this.callbackFormats[BrickletLine.CALLBACK_REFLECTIVITY_REACHED] = [10, 'H'];



	this.getReflectivity = function(returnCallback, errorCallback) {
		/*
		Returns the currently measured reflectivity. The reflectivity is
		a value between 0 (not reflective) and 4095 (very reflective).
		
		Usually black has a low reflectivity while white has a high
		reflectivity.
		
		If you want to get the reflectivity periodically, it is recommended
		to use the :cb:`Reflectivity` callback and set the period with
		:func:`Set Reflectivity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setReflectivityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Reflectivity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Reflectivity` callback is only triggered if the reflectivity has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getReflectivityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Reflectivity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setReflectivityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Reflectivity Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the reflectivity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the reflectivity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the reflectivity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the reflectivity is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_REFLECTIVITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getReflectivityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Reflectivity Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_REFLECTIVITY_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Reflectivity Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Reflectivity Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLine.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletLine;
