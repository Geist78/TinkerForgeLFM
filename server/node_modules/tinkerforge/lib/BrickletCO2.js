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

BrickletCO2.DEVICE_IDENTIFIER = 262;
BrickletCO2.DEVICE_DISPLAY_NAME = 'CO2 Bricklet';
BrickletCO2.CALLBACK_CO2_CONCENTRATION = 8;
BrickletCO2.CALLBACK_CO2_CONCENTRATION_REACHED = 9;
BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION = 1;
BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_PERIOD = 2;
BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_PERIOD = 3;
BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_THRESHOLD = 4;
BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_THRESHOLD = 5;
BrickletCO2.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletCO2.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletCO2.FUNCTION_GET_IDENTITY = 255;
BrickletCO2.THRESHOLD_OPTION_OFF = 'x';
BrickletCO2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCO2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCO2.THRESHOLD_OPTION_SMALLER = '<';
BrickletCO2.THRESHOLD_OPTION_GREATER = '>';

function BrickletCO2(uid, ipcon) {
	//Measures CO2 concentration in ppm

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletCO2.DEVICE_IDENTIFIER, BrickletCO2.DEVICE_DISPLAY_NAME);
	BrickletCO2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCO2.CALLBACK_CO2_CONCENTRATION] = [10, 'H'];
	this.callbackFormats[BrickletCO2.CALLBACK_CO2_CONCENTRATION_REACHED] = [10, 'H'];



	this.getCO2Concentration = function(returnCallback, errorCallback) {
		/*
		Returns the measured CO2 concentration.
		
		If you want to get the CO2 concentration periodically, it is recommended to use
		the :cb:`CO2 Concentration` callback and set the period with
		:func:`Set CO2 Concentration Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setCO2ConcentrationCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`CO2 Concentration` callback is
		triggered periodically. A value of 0 turns the callback off.
		
		The :cb:`CO2 Concentration` callback is only triggered if the CO2 concentration
		has changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCO2ConcentrationCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set CO2 Concentration Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setCO2ConcentrationCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`CO2 Concentration Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the CO2 concentration is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the CO2 concentration is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the CO2 concentration is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the CO2 concentration is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCO2ConcentrationCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set CO2 Concentration Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`CO2 Concentration Reached`,
		
		are triggered, if the thresholds
		
		* :func:`Set CO2 Concentration Callback Threshold`,
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCO2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletCO2;
