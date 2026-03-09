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

BrickletHallEffect.DEVICE_IDENTIFIER = 240;
BrickletHallEffect.DEVICE_DISPLAY_NAME = 'Hall Effect Bricklet';
BrickletHallEffect.CALLBACK_EDGE_COUNT = 10;
BrickletHallEffect.FUNCTION_GET_VALUE = 1;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT = 2;
BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG = 3;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG = 4;
BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT = 5;
BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT = 6;
BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD = 7;
BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD = 8;
BrickletHallEffect.FUNCTION_EDGE_INTERRUPT = 9;
BrickletHallEffect.FUNCTION_GET_IDENTITY = 255;
BrickletHallEffect.EDGE_TYPE_RISING = 0;
BrickletHallEffect.EDGE_TYPE_FALLING = 1;
BrickletHallEffect.EDGE_TYPE_BOTH = 2;

function BrickletHallEffect(uid, ipcon) {
	//Detects presence of magnetic field

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletHallEffect.DEVICE_IDENTIFIER, BrickletHallEffect.DEVICE_DISPLAY_NAME);
	BrickletHallEffect.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_EDGE_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHallEffect.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletHallEffect.CALLBACK_EDGE_COUNT] = [13, 'I ?'];



	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns *true* if a magnetic field of 3.5 millitesla or greater is detected.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_VALUE, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCount = function(resetCounter, returnCallback, errorCallback) {
		/*
		Returns the current value of the edge counter. You can configure
		edge type (rising, falling, both) that is counted with
		:func:`Set Edge Count Config`.
		
		If you set the reset counter to *true*, the count is set back to 0
		directly after it is read.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT, [resetCounter], '?', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setEdgeCountConfig = function(edgeType, debounce, returnCallback, errorCallback) {
		/*
		The edge type parameter configures if rising edges, falling edges or
		both are counted. Possible edge types are:
		
		* 0 = rising
		* 1 = falling
		* 2 = both
		
		A magnetic field of 3.5 millitesla or greater causes a falling edge and a
		magnetic field of 2.5 millitesla or smaller causes a rising edge.
		
		If a magnet comes near the Bricklet the signal goes low (falling edge), if
		a magnet is removed from the vicinity the signal goes high (rising edge).
		
		Configuring an edge counter resets its value to 0.
		
		If you don't know what any of this means, just leave it at default. The
		default configuration is very likely OK for you.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CONFIG, [edgeType, debounce], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCountConfig = function(returnCallback, errorCallback) {
		/*
		Returns the edge type and debounce time as set by :func:`Set Edge Count Config`.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CONFIG, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setEdgeInterrupt = function(edges, returnCallback, errorCallback) {
		/*
		Sets the number of edges until an interrupt is invoked.
		
		If *edges* is set to n, an interrupt is invoked for every n-th detected edge.
		
		If *edges* is set to 0, the interrupt is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_INTERRUPT, [edges], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeInterrupt = function(returnCallback, errorCallback) {
		/*
		Returns the edges as set by :func:`Set Edge Interrupt`.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_INTERRUPT, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setEdgeCountCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Edge Count` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Edge Count` callback is only triggered if the edge count has changed
		since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_SET_EDGE_COUNT_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCountCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Edge Count Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_EDGE_COUNT_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.edgeInterrupt = function(returnCallback, errorCallback) {
		/*
		This callback is triggered every n-th count, as configured with
		:func:`Set Edge Interrupt`. The parameters are the
		current count and the current value (see :func:`Get Value` and
		:func:`Get Edge Count`).
		*/
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_EDGE_INTERRUPT, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletHallEffect.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletHallEffect;
