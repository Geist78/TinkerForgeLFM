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

BrickletDualRelay.DEVICE_IDENTIFIER = 26;
BrickletDualRelay.DEVICE_DISPLAY_NAME = 'Dual Relay Bricklet';
BrickletDualRelay.CALLBACK_MONOFLOP_DONE = 5;
BrickletDualRelay.FUNCTION_SET_STATE = 1;
BrickletDualRelay.FUNCTION_GET_STATE = 2;
BrickletDualRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletDualRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletDualRelay.FUNCTION_SET_SELECTED_STATE = 6;
BrickletDualRelay.FUNCTION_GET_IDENTITY = 255;

function BrickletDualRelay(uid, ipcon) {
	//Two relays to switch AC/DC devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletDualRelay.DEVICE_IDENTIFIER, BrickletDualRelay.DEVICE_DISPLAY_NAME);
	BrickletDualRelay.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDualRelay.FUNCTION_SET_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDualRelay.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDualRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDualRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDualRelay.FUNCTION_SET_SELECTED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDualRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDualRelay.CALLBACK_MONOFLOP_DONE] = [10, 'B ?'];



	this.setState = function(relay1, relay2, returnCallback, errorCallback) {
		/*
		Sets the state of the relays, *true* means on and *false* means off.
		For example: (true, false) turns relay 1 on and relay 2 off.
		
		If you just want to set one of the relays and don't know the current state
		of the other relay, you can get the state with :func:`Get State` or you
		can use :func:`Set Selected State`.
		
		All running monoflop timers will be aborted if this function is called.
		*/
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_STATE, [relay1, relay2], '? ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getState = function(returnCallback, errorCallback) {
		/*
		Returns the state of the relays, *true* means on and *false* means off.
		*/
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_STATE, [], '', 10, '? ?', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(relay, state, time, returnCallback, errorCallback) {
		/*
		The first parameter can be 1 or 2 (relay 1 or relay 2). The second parameter
		is the desired state of the relay (*true* means on and *false* means off).
		The third parameter indicates the time that the relay should hold
		the state.
		
		If this function is called with the parameters (1, true, 1500):
		Relay 1 will turn on and in 1.5s it will turn off again.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you
		have a RS485 bus and a Dual Relay Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds. The relay will be on all the time. If now the RS485
		connection is lost, the relay will turn off in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_MONOFLOP, [relay, state, time], 'B ? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(relay, returnCallback, errorCallback) {
		/*
		Returns (for the given relay) the current state and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the state flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_MONOFLOP, [relay], 'B', 17, '? I I', returnCallback, errorCallback, false, true);
	};
	this.setSelectedState = function(relay, state, returnCallback, errorCallback) {
		/*
		Sets the state of the selected relay (1 or 2), *true* means on and *false* means off.
		
		A running monoflop timer for the selected relay will be aborted if this function is called.
		
		The other relay remains untouched.
		*/
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_SET_SELECTED_STATE, [relay, state], 'B ?', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDualRelay.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletDualRelay;
