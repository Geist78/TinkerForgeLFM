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

BrickletAnalogInV2.DEVICE_IDENTIFIER = 251;
BrickletAnalogInV2.DEVICE_DISPLAY_NAME = 'Analog In Bricklet 2.0';
BrickletAnalogInV2.CALLBACK_VOLTAGE = 15;
BrickletAnalogInV2.CALLBACK_ANALOG_VALUE = 16;
BrickletAnalogInV2.CALLBACK_VOLTAGE_REACHED = 17;
BrickletAnalogInV2.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletAnalogInV2.FUNCTION_GET_VOLTAGE = 1;
BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 4;
BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 7;
BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 8;
BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletAnalogInV2.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletAnalogInV2.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletAnalogInV2.FUNCTION_SET_MOVING_AVERAGE = 13;
BrickletAnalogInV2.FUNCTION_GET_MOVING_AVERAGE = 14;
BrickletAnalogInV2.FUNCTION_GET_IDENTITY = 255;
BrickletAnalogInV2.THRESHOLD_OPTION_OFF = 'x';
BrickletAnalogInV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAnalogInV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAnalogInV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletAnalogInV2.THRESHOLD_OPTION_GREATER = '>';

function BrickletAnalogInV2(uid, ipcon) {
	//Measures DC voltage between 0V and 42V

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletAnalogInV2.DEVICE_IDENTIFIER, BrickletAnalogInV2.DEVICE_DISPLAY_NAME);
	BrickletAnalogInV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogInV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletAnalogInV2.CALLBACK_VOLTAGE] = [10, 'H'];
	this.callbackFormats[BrickletAnalogInV2.CALLBACK_ANALOG_VALUE] = [10, 'H'];
	this.callbackFormats[BrickletAnalogInV2.CALLBACK_VOLTAGE_REACHED] = [10, 'H'];
	this.callbackFormats[BrickletAnalogInV2.CALLBACK_ANALOG_VALUE_REACHED] = [10, 'H'];



	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the measured voltage. The resolution is approximately 10mV.
		
		If you want to get the voltage periodically, it is recommended to use the
		:cb:`Voltage` callback and set the period with
		:func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Voltage` callback is only triggered if the voltage has changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Voltage Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Voltage Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Analog Value Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Voltage Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Voltage Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverage = function(average, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the voltage.
		
		Setting the length to 1 will turn the averaging off. With less
		averaging, there is more noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length of the moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_MOVING_AVERAGE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAnalogInV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletAnalogInV2;
