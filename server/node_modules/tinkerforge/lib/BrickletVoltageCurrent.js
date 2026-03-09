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

BrickletVoltageCurrent.DEVICE_IDENTIFIER = 227;
BrickletVoltageCurrent.DEVICE_DISPLAY_NAME = 'Voltage/Current Bricklet';
BrickletVoltageCurrent.CALLBACK_CURRENT = 22;
BrickletVoltageCurrent.CALLBACK_VOLTAGE = 23;
BrickletVoltageCurrent.CALLBACK_POWER = 24;
BrickletVoltageCurrent.CALLBACK_CURRENT_REACHED = 25;
BrickletVoltageCurrent.CALLBACK_VOLTAGE_REACHED = 26;
BrickletVoltageCurrent.CALLBACK_POWER_REACHED = 27;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT = 1;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE = 2;
BrickletVoltageCurrent.FUNCTION_GET_POWER = 3;
BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION = 4;
BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION = 5;
BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION = 6;
BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION = 7;
BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 8;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 9;
BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 10;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 11;
BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD = 12;
BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD = 13;
BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 14;
BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 15;
BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 16;
BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 17;
BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD = 18;
BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD = 19;
BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD = 20;
BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD = 21;
BrickletVoltageCurrent.FUNCTION_GET_IDENTITY = 255;
BrickletVoltageCurrent.AVERAGING_1 = 0;
BrickletVoltageCurrent.AVERAGING_4 = 1;
BrickletVoltageCurrent.AVERAGING_16 = 2;
BrickletVoltageCurrent.AVERAGING_64 = 3;
BrickletVoltageCurrent.AVERAGING_128 = 4;
BrickletVoltageCurrent.AVERAGING_256 = 5;
BrickletVoltageCurrent.AVERAGING_512 = 6;
BrickletVoltageCurrent.AVERAGING_1024 = 7;
BrickletVoltageCurrent.THRESHOLD_OPTION_OFF = 'x';
BrickletVoltageCurrent.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletVoltageCurrent.THRESHOLD_OPTION_INSIDE = 'i';
BrickletVoltageCurrent.THRESHOLD_OPTION_SMALLER = '<';
BrickletVoltageCurrent.THRESHOLD_OPTION_GREATER = '>';
BrickletVoltageCurrent.CONVERSION_TIME_140US = 0;
BrickletVoltageCurrent.CONVERSION_TIME_204US = 1;
BrickletVoltageCurrent.CONVERSION_TIME_332US = 2;
BrickletVoltageCurrent.CONVERSION_TIME_588US = 3;
BrickletVoltageCurrent.CONVERSION_TIME_1_1MS = 4;
BrickletVoltageCurrent.CONVERSION_TIME_2_116MS = 5;
BrickletVoltageCurrent.CONVERSION_TIME_4_156MS = 6;
BrickletVoltageCurrent.CONVERSION_TIME_8_244MS = 7;

function BrickletVoltageCurrent(uid, ipcon) {
	//Measures power, DC voltage and DC current up to 720W/36V/20A

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletVoltageCurrent.DEVICE_IDENTIFIER, BrickletVoltageCurrent.DEVICE_DISPLAY_NAME);
	BrickletVoltageCurrent.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltageCurrent.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_CURRENT] = [12, 'i'];
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_VOLTAGE] = [12, 'i'];
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_POWER] = [12, 'i'];
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_CURRENT_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_VOLTAGE_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletVoltageCurrent.CALLBACK_POWER_REACHED] = [12, 'i'];



	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current.
		
		If you want to get the current periodically, it is recommended to use the
		:cb:`Current` callback and set the period with
		:func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage.
		
		If you want to get the voltage periodically, it is recommended to use the
		:cb:`Voltage` callback and set the period with
		:func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.getPower = function(returnCallback, errorCallback) {
		/*
		Returns the power.
		
		If you want to get the power periodically, it is recommended to use the
		:cb:`Power` callback and set the period with
		:func:`Set Power Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(averaging, voltageConversionTime, currentConversionTime, returnCallback, errorCallback) {
		/*
		Sets the configuration of the Voltage/Current Bricklet. It is
		possible to configure number of averages as well as
		voltage and current conversion time.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CONFIGURATION, [averaging, voltageConversionTime, currentConversionTime], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CONFIGURATION, [], '', 11, 'B B B', returnCallback, errorCallback, false, true);
	};
	this.setCalibration = function(gainMultiplier, gainDivisor, returnCallback, errorCallback) {
		/*
		Since the shunt resistor that is used to measure the current is not
		perfectly precise, it needs to be calibrated by a multiplier and
		divisor if a very precise reading is needed.
		
		For example, if you are expecting a measurement of 1000mA and you
		are measuring 1023mA, you can calibrate the Voltage/Current Bricklet
		by setting the multiplier to 1000 and the divisor to 1023.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CALIBRATION, [gainMultiplier, gainDivisor], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the calibration as set by :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CALIBRATION, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Current` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Current` callback is only triggered if the current has changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Voltage` callback is only triggered if the voltage has changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setPowerCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Power` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Power` callback is only triggered if the power has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPowerCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Get Power Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Current Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the current is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the current is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Current Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Voltage Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setPowerCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Power Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the power is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the power is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the power is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the power is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_POWER_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPowerCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Power Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_POWER_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Current Reached`,
		* :cb:`Voltage Reached`,
		* :cb:`Power Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Current Callback Threshold`,
		* :func:`Set Voltage Callback Threshold`,
		* :func:`Set Power Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletVoltageCurrent.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletVoltageCurrent;
