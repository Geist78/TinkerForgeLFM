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

BrickletPiezoBuzzer.DEVICE_IDENTIFIER = 214;
BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME = 'Piezo Buzzer Bricklet';
BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED = 3;
BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED = 4;
BrickletPiezoBuzzer.FUNCTION_BEEP = 1;
BrickletPiezoBuzzer.FUNCTION_MORSE_CODE = 2;
BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY = 255;

function BrickletPiezoBuzzer(uid, ipcon) {
	//Creates 1kHz beep

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletPiezoBuzzer.DEVICE_IDENTIFIER, BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME);
	BrickletPiezoBuzzer.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_MORSE_CODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_BEEP_FINISHED] = [8, ''];
	this.callbackFormats[BrickletPiezoBuzzer.CALLBACK_MORSE_CODE_FINISHED] = [8, ''];



	this.beep = function(duration, returnCallback, errorCallback) {
		/*
		Beeps for the given duration.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_BEEP, [duration], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.morseCode = function(morse, returnCallback, errorCallback) {
		/*
		Sets morse code that will be played by the piezo buzzer. The morse code
		is given as a string consisting of "." (dot), "-" (minus) and " " (space)
		for *dits*, *dahs* and *pauses*. Every other character is ignored.
		
		For example: If you set the string "...---...", the piezo buzzer will beep
		nine times with the durations "short short short long long long short
		short short".
		*/
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_MORSE_CODE, [morse], 's60', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletPiezoBuzzer.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletPiezoBuzzer;
