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

BrickletDustDetector.DEVICE_IDENTIFIER = 260;
BrickletDustDetector.DEVICE_DISPLAY_NAME = 'Dust Detector Bricklet';
BrickletDustDetector.CALLBACK_DUST_DENSITY = 8;
BrickletDustDetector.CALLBACK_DUST_DENSITY_REACHED = 9;
BrickletDustDetector.FUNCTION_GET_DUST_DENSITY = 1;
BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_PERIOD = 2;
BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_PERIOD = 3;
BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_THRESHOLD = 4;
BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_THRESHOLD = 5;
BrickletDustDetector.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletDustDetector.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletDustDetector.FUNCTION_SET_MOVING_AVERAGE = 10;
BrickletDustDetector.FUNCTION_GET_MOVING_AVERAGE = 11;
BrickletDustDetector.FUNCTION_GET_IDENTITY = 255;
BrickletDustDetector.THRESHOLD_OPTION_OFF = 'x';
BrickletDustDetector.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletDustDetector.THRESHOLD_OPTION_INSIDE = 'i';
BrickletDustDetector.THRESHOLD_OPTION_SMALLER = '<';
BrickletDustDetector.THRESHOLD_OPTION_GREATER = '>';

function BrickletDustDetector(uid, ipcon) {
	//Measures dust density

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletDustDetector.DEVICE_IDENTIFIER, BrickletDustDetector.DEVICE_DISPLAY_NAME);
	BrickletDustDetector.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_DUST_DENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDustDetector.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDustDetector.CALLBACK_DUST_DENSITY] = [10, 'H'];
	this.callbackFormats[BrickletDustDetector.CALLBACK_DUST_DENSITY_REACHED] = [10, 'H'];



	this.getDustDensity = function(returnCallback, errorCallback) {
		/*
		Returns the dust density.
		
		If you want to get the dust density periodically, it is recommended
		to use the :cb:`Dust Density` callback and set the period with
		:func:`Set Dust Density Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_DUST_DENSITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setDustDensityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Dust Density` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Dust Density` callback is only triggered if the dust density has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDustDensityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Dust Density Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setDustDensityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Dust Density Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the dust density value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the dust density value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the dust density value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the dust density value is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_SET_DUST_DENSITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDustDensityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Dust Density Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_DUST_DENSITY_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Dust Density Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Dust Density Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverage = function(average, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the dust density.
		
		Setting the length to 0 will turn the averaging completely off. With less
		averaging, there is more noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_MOVING_AVERAGE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDustDetector.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletDustDetector;
