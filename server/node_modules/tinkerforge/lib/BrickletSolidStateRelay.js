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

BrickletSolidStateRelay.DEVICE_IDENTIFIER = 244;
BrickletSolidStateRelay.DEVICE_DISPLAY_NAME = 'Solid State Relay Bricklet';
BrickletSolidStateRelay.CALLBACK_MONOFLOP_DONE = 5;
BrickletSolidStateRelay.FUNCTION_SET_STATE = 1;
BrickletSolidStateRelay.FUNCTION_GET_STATE = 2;
BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletSolidStateRelay.FUNCTION_GET_IDENTITY = 255;

function BrickletSolidStateRelay(uid, ipcon) {
	//Controls AC and DC Solid State Relays

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSolidStateRelay.DEVICE_IDENTIFIER, BrickletSolidStateRelay.DEVICE_DISPLAY_NAME);
	BrickletSolidStateRelay.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_SET_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSolidStateRelay.CALLBACK_MONOFLOP_DONE] = [9, '?'];



	this.setState = function(state, returnCallback, errorCallback) {
		/*
		Sets the state of the relays *true* means on and *false* means off.
		
		A running monoflop timer will be aborted if this function is called.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_SET_STATE, [state], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getState = function(returnCallback, errorCallback) {
		/*
		Returns the state of the relay, *true* means on and *false* means off.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_STATE, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(state, time, returnCallback, errorCallback) {
		/*
		The first parameter  is the desired state of the relay (*true* means on
		and *false* means off). The second parameter indicates the time that
		the relay should hold the state.
		
		If this function is called with the parameters (true, 1500):
		The relay will turn on and in 1.5s it will turn off again.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you
		have a RS485 bus and a Solid State Relay Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds. The relay will be on all the time. If now the RS485
		connection is lost, the relay will turn off in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_SET_MONOFLOP, [state, time], '? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(returnCallback, errorCallback) {
		/*
		Returns the current state and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the state flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_MONOFLOP, [], '', 17, '? I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelay.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSolidStateRelay;
