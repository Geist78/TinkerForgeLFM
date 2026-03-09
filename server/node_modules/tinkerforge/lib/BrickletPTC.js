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

BrickletPTC.DEVICE_IDENTIFIER = 226;
BrickletPTC.DEVICE_DISPLAY_NAME = 'PTC Bricklet';
BrickletPTC.CALLBACK_TEMPERATURE = 13;
BrickletPTC.CALLBACK_TEMPERATURE_REACHED = 14;
BrickletPTC.CALLBACK_RESISTANCE = 15;
BrickletPTC.CALLBACK_RESISTANCE_REACHED = 16;
BrickletPTC.CALLBACK_SENSOR_CONNECTED = 24;
BrickletPTC.FUNCTION_GET_TEMPERATURE = 1;
BrickletPTC.FUNCTION_GET_RESISTANCE = 2;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 4;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD = 5;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD = 6;
BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 7;
BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 8;
BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD = 9;
BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD = 10;
BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER = 17;
BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER = 18;
BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED = 19;
BrickletPTC.FUNCTION_SET_WIRE_MODE = 20;
BrickletPTC.FUNCTION_GET_WIRE_MODE = 21;
BrickletPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION = 22;
BrickletPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION = 23;
BrickletPTC.FUNCTION_GET_IDENTITY = 255;
BrickletPTC.THRESHOLD_OPTION_OFF = 'x';
BrickletPTC.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletPTC.THRESHOLD_OPTION_INSIDE = 'i';
BrickletPTC.THRESHOLD_OPTION_SMALLER = '<';
BrickletPTC.THRESHOLD_OPTION_GREATER = '>';
BrickletPTC.FILTER_OPTION_50HZ = 0;
BrickletPTC.FILTER_OPTION_60HZ = 1;
BrickletPTC.WIRE_MODE_2 = 2;
BrickletPTC.WIRE_MODE_3 = 3;
BrickletPTC.WIRE_MODE_4 = 4;

function BrickletPTC(uid, ipcon) {
	//Reads temperatures from Pt100 und Pt1000 sensors

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletPTC.DEVICE_IDENTIFIER, BrickletPTC.DEVICE_DISPLAY_NAME);
	BrickletPTC.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_WIRE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_WIRE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPTC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE] = [12, 'i'];
	this.callbackFormats[BrickletPTC.CALLBACK_TEMPERATURE_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE] = [12, 'i'];
	this.callbackFormats[BrickletPTC.CALLBACK_RESISTANCE_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletPTC.CALLBACK_SENSOR_CONNECTED] = [9, '?'];



	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of connected sensor.
		
		If you want to get the temperature periodically, it is recommended
		to use the :cb:`Temperature` callback and set the period with
		:func:`Set Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.getResistance = function(returnCallback, errorCallback) {
		/*
		Returns the value as measured by the MAX31865 precision delta-sigma ADC.
		
		The value can be converted with the following formulas:
		
		* Pt100:  resistance = (value * 390) / 32768
		* Pt1000: resistance = (value * 3900) / 32768
		
		If you want to get the resistance periodically, it is recommended
		to use the :cb:`Resistance` callback and set the period with
		:func:`Set Resistance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Temperature` callback is only triggered if the temperature has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setResistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Resistance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Resistance` callback is only triggered if the resistance has changed
		since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getResistanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Resistance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Temperature Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Temperature Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setResistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Resistance Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_RESISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getResistanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Resistance Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_RESISTANCE_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Temperature Reached`,
		* :cb:`Resistance Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Temperature Callback Threshold`,
		* :func:`Set Resistance Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setNoiseRejectionFilter = function(filter, returnCallback, errorCallback) {
		/*
		Sets the noise rejection filter to either 50Hz (0) or 60Hz (1).
		Noise from 50Hz or 60Hz power sources (including
		harmonics of the AC power's fundamental frequency) is
		attenuated by 82dB.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_NOISE_REJECTION_FILTER, [filter], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getNoiseRejectionFilter = function(returnCallback, errorCallback) {
		/*
		Returns the noise rejection filter option as set by
		:func:`Set Noise Rejection Filter`
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_NOISE_REJECTION_FILTER, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.isSensorConnected = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the sensor is connected correctly.
		
		If this function
		returns *false*, there is either no Pt100 or Pt1000 sensor connected,
		the sensor is connected incorrectly or the sensor itself is faulty.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_IS_SENSOR_CONNECTED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setWireMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the wire mode of the sensor. Possible values are 2, 3 and 4 which
		correspond to 2-, 3- and 4-wire sensors. The value has to match the jumper
		configuration on the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_WIRE_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getWireMode = function(returnCallback, errorCallback) {
		/*
		Returns the wire mode as set by :func:`Set Wire Mode`
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_WIRE_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setSensorConnectedCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		If you enable this callback, the :cb:`Sensor Connected` callback is triggered
		every time a Pt sensor is connected/disconnected.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_SET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorConnectedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Sensor Connected Callback Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_SENSOR_CONNECTED_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletPTC.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletPTC;
