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

BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER = 258;
BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME = 'Industrial Analog Out Bricklet';
BrickletIndustrialAnalogOut.FUNCTION_ENABLE = 1;
BrickletIndustrialAnalogOut.FUNCTION_DISABLE = 2;
BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED = 3;
BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE = 4;
BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE = 5;
BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT = 6;
BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT = 7;
BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION = 8;
BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION = 9;
BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialAnalogOut.VOLTAGE_RANGE_0_TO_5V = 0;
BrickletIndustrialAnalogOut.VOLTAGE_RANGE_0_TO_10V = 1;
BrickletIndustrialAnalogOut.CURRENT_RANGE_4_TO_20MA = 0;
BrickletIndustrialAnalogOut.CURRENT_RANGE_0_TO_20MA = 1;
BrickletIndustrialAnalogOut.CURRENT_RANGE_0_TO_24MA = 2;

function BrickletIndustrialAnalogOut(uid, ipcon) {
	//Generates configurable DC voltage and current, 0V to 10V and 4mA to 20mA

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER, BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME);
	BrickletIndustrialAnalogOut.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.enable = function(returnCallback, errorCallback) {
		/*
		Enables the output of voltage and current.
		
		The default is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_ENABLE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disable = function(returnCallback, errorCallback) {
		/*
		Disables the output of voltage and current.
		
		The default is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_DISABLE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if output of voltage and current is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the output voltage.
		
		The output voltage and output current are linked. Changing the output voltage
		also changes the output current.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage as set by :func:`Set Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the output current.
		
		The output current and output voltage are linked. Changing the output current
		also changes the output voltage.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT, [current], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`Set Current`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(voltageRange, currentRange, returnCallback, errorCallback) {
		/*
		Configures the voltage and current range.
		
		Possible voltage ranges are:
		
		* 0V to 5V
		* 0V to 10V
		
		Possible current ranges are:
		
		* 4mA to 20mA
		* 0mA to 20mA
		* 0mA to 24mA
		
		The resolution will always be 12 bit. This means, that the
		precision is higher with a smaller range.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION, [voltageRange, currentRange], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialAnalogOut;
