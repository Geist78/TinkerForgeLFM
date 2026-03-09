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

BrickletGPS.DEVICE_IDENTIFIER = 222;
BrickletGPS.DEVICE_DISPLAY_NAME = 'GPS Bricklet';
BrickletGPS.CALLBACK_COORDINATES = 17;
BrickletGPS.CALLBACK_STATUS = 18;
BrickletGPS.CALLBACK_ALTITUDE = 19;
BrickletGPS.CALLBACK_MOTION = 20;
BrickletGPS.CALLBACK_DATE_TIME = 21;
BrickletGPS.FUNCTION_GET_COORDINATES = 1;
BrickletGPS.FUNCTION_GET_STATUS = 2;
BrickletGPS.FUNCTION_GET_ALTITUDE = 3;
BrickletGPS.FUNCTION_GET_MOTION = 4;
BrickletGPS.FUNCTION_GET_DATE_TIME = 5;
BrickletGPS.FUNCTION_RESTART = 6;
BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD = 7;
BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD = 8;
BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD = 9;
BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD = 10;
BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 11;
BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 12;
BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD = 13;
BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD = 14;
BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD = 15;
BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD = 16;
BrickletGPS.FUNCTION_GET_IDENTITY = 255;
BrickletGPS.FIX_NO_FIX = 1;
BrickletGPS.FIX_2D_FIX = 2;
BrickletGPS.FIX_3D_FIX = 3;
BrickletGPS.RESTART_TYPE_HOT_START = 0;
BrickletGPS.RESTART_TYPE_WARM_START = 1;
BrickletGPS.RESTART_TYPE_COLD_START = 2;
BrickletGPS.RESTART_TYPE_FACTORY_RESET = 3;

function BrickletGPS(uid, ipcon) {
	//Determine position, velocity and altitude using GPS

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletGPS.DEVICE_IDENTIFIER, BrickletGPS.DEVICE_DISPLAY_NAME);
	BrickletGPS.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_RESTART] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPS.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletGPS.CALLBACK_COORDINATES] = [26, 'I c I c H H H H'];
	this.callbackFormats[BrickletGPS.CALLBACK_STATUS] = [11, 'B B B'];
	this.callbackFormats[BrickletGPS.CALLBACK_ALTITUDE] = [16, 'i i'];
	this.callbackFormats[BrickletGPS.CALLBACK_MOTION] = [16, 'I I'];
	this.callbackFormats[BrickletGPS.CALLBACK_DATE_TIME] = [16, 'I I'];



	this.getCoordinates = function(returnCallback, errorCallback) {
		/*
		Returns the GPS coordinates. Latitude and longitude are given in the
		``DD.dddddd°`` format, the value 57123468 means 57.123468°.
		The parameter ``ns`` and ``ew`` are the cardinal directions for
		latitude and longitude. Possible values for ``ns`` and ``ew`` are 'N', 'S', 'E'
		and 'W' (north, south, east and west).
		
		PDOP, HDOP and VDOP are the dilution of precision (DOP) values. They specify
		the additional multiplicative effect of GPS satellite geometry on GPS
		precision. See
		`here <https://en.wikipedia.org/wiki/Dilution_of_precision_(GPS)>`__
		for more information.
		
		EPE is the "Estimated Position Error". This is not the
		absolute maximum error, it is the error with a specific confidence. See
		`here <https://www.nps.gov/gis/gps/WhatisEPE.html>`__ for more information.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES, [], '', 26, 'I c I c H H H H', returnCallback, errorCallback, false, true);
	};
	this.getStatus = function(returnCallback, errorCallback) {
		/*
		Returns the current fix status, the number of satellites that are in view and
		the number of satellites that are currently used.
		
		Possible fix status values can be:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "1", "No Fix, :func:`Get Coordinates`, :func:`Get Altitude` and :func:`Get Motion` return invalid data"
		 "2", "2D Fix, only :func:`Get Coordinates` and :func:`Get Motion` return valid data"
		 "3", "3D Fix, :func:`Get Coordinates`, :func:`Get Altitude` and :func:`Get Motion` return valid data"
		
		There is also a :ref:`blue LED <gps_bricklet_fix_led>` on the Bricklet that
		indicates the fix status.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS, [], '', 11, 'B B B', returnCallback, errorCallback, false, true);
	};
	this.getAltitude = function(returnCallback, errorCallback) {
		/*
		Returns the current altitude and corresponding geoidal separation.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE, [], '', 16, 'i i', returnCallback, errorCallback, false, true);
	};
	this.getMotion = function(returnCallback, errorCallback) {
		/*
		Returns the current course and speed. A course of 0° means the Bricklet is
		traveling north bound and 90° means it is traveling east bound.
		
		Please note that this only returns useful values if an actual movement
		is present.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION, [], '', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.getDateTime = function(returnCallback, errorCallback) {
		/*
		Returns the current date and time. The date is
		given in the format ``ddmmyy`` and the time is given
		in the format ``hhmmss.sss``. For example, 140713 means
		14.07.13 as date and 195923568 means 19:59:23.568 as time.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME, [], '', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.restart = function(restartType, returnCallback, errorCallback) {
		/*
		Restarts the GPS Bricklet, the following restart types are available:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "0", "Hot start (use all available data in the NV store)"
		 "1", "Warm start (don't use ephemeris at restart)"
		 "2", "Cold start (don't use time, position, almanacs and ephemeris at restart)"
		 "3", "Factory reset (clear all system/user configurations at restart)"
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_RESTART, [restartType], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setCoordinatesCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Coordinates` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Coordinates` callback is only triggered if the coordinates changed
		since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCoordinatesCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Coordinates Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setStatusCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Status` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Status` callback is only triggered if the status changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_STATUS_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Status Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_STATUS_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Altitude` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Altitude` callback is only triggered if the altitude changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Altitude Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setMotionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Motion` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Motion` callback is only triggered if the motion changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_MOTION_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMotionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Motion Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_MOTION_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setDateTimeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Date Time` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Date Time` callback is only triggered if the date or time changed
		since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDateTimeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Date Time Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletGPS.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletGPS;
