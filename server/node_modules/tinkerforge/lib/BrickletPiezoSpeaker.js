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

BrickletPiezoSpeaker.DEVICE_IDENTIFIER = 242;
BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME = 'Piezo Speaker Bricklet';
BrickletPiezoSpeaker.CALLBACK_BEEP_FINISHED = 4;
BrickletPiezoSpeaker.CALLBACK_MORSE_CODE_FINISHED = 5;
BrickletPiezoSpeaker.FUNCTION_BEEP = 1;
BrickletPiezoSpeaker.FUNCTION_MORSE_CODE = 2;
BrickletPiezoSpeaker.FUNCTION_CALIBRATE = 3;
BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY = 255;
BrickletPiezoSpeaker.BEEP_DURATION_OFF = 0;
BrickletPiezoSpeaker.BEEP_DURATION_INFINITE = 4294967295;

function BrickletPiezoSpeaker(uid, ipcon) {
	//Creates beep with configurable frequency

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletPiezoSpeaker.DEVICE_IDENTIFIER, BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME);
	BrickletPiezoSpeaker.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletPiezoSpeaker.FUNCTION_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeaker.FUNCTION_MORSE_CODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeaker.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPiezoSpeaker.CALLBACK_BEEP_FINISHED] = [8, ''];
	this.callbackFormats[BrickletPiezoSpeaker.CALLBACK_MORSE_CODE_FINISHED] = [8, ''];



	this.beep = function(duration, frequency, returnCallback, errorCallback) {
		/*
		Beeps with the given frequency for the given duration.
		
		.. versionchanged:: 2.0.2$nbsp;(Plugin)
		   A duration of 0 stops the current beep if any, the frequency parameter is
		   ignored. A duration of 4294967295 results in an infinite beep.
		
		The Piezo Speaker Bricklet can only approximate the frequency, it will play
		the best possible match by applying the calibration (see :func:`Calibrate`).
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_BEEP, [duration, frequency], 'I H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.morseCode = function(morse, frequency, returnCallback, errorCallback) {
		/*
		Sets morse code that will be played by the piezo buzzer. The morse code
		is given as a string consisting of "." (dot), "-" (minus) and " " (space)
		for *dits*, *dahs* and *pauses*. Every other character is ignored.
		
		For example: If you set the string "...---...", the piezo buzzer will beep
		nine times with the durations "short short short long long long short
		short short".
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_MORSE_CODE, [morse, frequency], 's60 H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		The Piezo Speaker Bricklet can play 512 different tones. This function
		plays each tone and measures the exact frequency back. The result is a
		mapping between setting value and frequency. This mapping is stored
		in the EEPROM and loaded on startup.
		
		The Bricklet should come calibrated, you only need to call this
		function (once) every time you reflash the Bricklet plugin.
		
		Returns *true* after the calibration finishes.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_CALIBRATE, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletPiezoSpeaker.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletPiezoSpeaker;
