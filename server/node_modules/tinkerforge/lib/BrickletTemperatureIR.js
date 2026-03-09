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

BrickletTemperatureIR.DEVICE_IDENTIFIER = 217;
BrickletTemperatureIR.DEVICE_DISPLAY_NAME = 'Temperature IR Bricklet';
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE = 15;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE = 16;
BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED = 17;
BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED = 18;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE = 1;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE = 2;
BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY = 3;
BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY = 4;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 5;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD = 6;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 7;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD = 8;
BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 9;
BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD = 10;
BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 11;
BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD = 12;
BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletTemperatureIR.FUNCTION_GET_IDENTITY = 255;
BrickletTemperatureIR.THRESHOLD_OPTION_OFF = 'x';
BrickletTemperatureIR.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletTemperatureIR.THRESHOLD_OPTION_INSIDE = 'i';
BrickletTemperatureIR.THRESHOLD_OPTION_SMALLER = '<';
BrickletTemperatureIR.THRESHOLD_OPTION_GREATER = '>';

function BrickletTemperatureIR(uid, ipcon) {
	//Measures contactless object temperature between -70°C and +380°C

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletTemperatureIR.DEVICE_IDENTIFIER, BrickletTemperatureIR.DEVICE_DISPLAY_NAME);
	BrickletTemperatureIR.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTemperatureIR.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE] = [10, 'h'];
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE] = [10, 'h'];
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_AMBIENT_TEMPERATURE_REACHED] = [10, 'h'];
	this.callbackFormats[BrickletTemperatureIR.CALLBACK_OBJECT_TEMPERATURE_REACHED] = [10, 'h'];



	this.getAmbientTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the ambient temperature of the sensor.
		
		If you want to get the ambient temperature periodically, it is recommended
		to use the :cb:`Ambient Temperature` callback and set the period with
		:func:`Set Ambient Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getObjectTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the object temperature of the sensor, i.e. the temperature
		of the surface of the object the sensor is aimed at.
		
		The temperature of different materials is dependent on their `emissivity
		<https://en.wikipedia.org/wiki/Emissivity>`__. The emissivity of the material
		can be set with :func:`Set Emissivity`.
		
		If you want to get the object temperature periodically, it is recommended
		to use the :cb:`Object Temperature` callback and set the period with
		:func:`Set Object Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setEmissivity = function(emissivity, returnCallback, errorCallback) {
		/*
		Sets the `emissivity <https://en.wikipedia.org/wiki/Emissivity>`__ that is
		used to calculate the surface temperature as returned by
		:func:`Get Object Temperature`.
		
		The emissivity is usually given as a value between 0.0 and 1.0. A list of
		emissivities of different materials can be found
		`here <https://www.infrared-thermography.com/material.htm>`__.
		
		The parameter of :func:`Set Emissivity` has to be given with a factor of
		65535 (16-bit). For example: An emissivity of 0.1 can be set with the
		value 6553, an emissivity of 0.5 with the value 32767 and so on.
		
		.. note::
		 If you need a precise measurement for the object temperature, it is
		 absolutely crucial that you also provide a precise emissivity.
		
		The emissivity is stored in non-volatile memory and will still be used after a restart or power cycle of the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_EMISSIVITY, [emissivity], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEmissivity = function(returnCallback, errorCallback) {
		/*
		Returns the emissivity as set by :func:`Set Emissivity`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_EMISSIVITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setAmbientTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Ambient Temperature` callback is
		triggered periodically. A value of 0 turns the callback off.
		
		The :cb:`Ambient Temperature` callback is only triggered if the temperature has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAmbientTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Ambient Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setObjectTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Object Temperature` callback is
		triggered periodically. A value of 0 turns the callback off.
		
		The :cb:`Object Temperature` callback is only triggered if the temperature
		has changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getObjectTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Object Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAmbientTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Ambient Temperature Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the ambient temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the ambient temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the ambient temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the ambient temperature is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAmbientTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Ambient Temperature Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_AMBIENT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 13, 'c h h', returnCallback, errorCallback, false, true);
	};
	this.setObjectTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Object Temperature Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the object temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the object temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the object temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the object temperature is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getObjectTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Object Temperature Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_OBJECT_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 13, 'c h h', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Ambient Temperature Reached`,
		* :cb:`Object Temperature Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Ambient Temperature Callback Threshold`,
		* :func:`Set Object Temperature Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletTemperatureIR.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletTemperatureIR;
