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

BrickletIMUV3.DEVICE_IDENTIFIER = 2161;
BrickletIMUV3.DEVICE_DISPLAY_NAME = 'IMU Bricklet 3.0';
BrickletIMUV3.CALLBACK_ACCELERATION = 33;
BrickletIMUV3.CALLBACK_MAGNETIC_FIELD = 34;
BrickletIMUV3.CALLBACK_ANGULAR_VELOCITY = 35;
BrickletIMUV3.CALLBACK_TEMPERATURE = 36;
BrickletIMUV3.CALLBACK_LINEAR_ACCELERATION = 37;
BrickletIMUV3.CALLBACK_GRAVITY_VECTOR = 38;
BrickletIMUV3.CALLBACK_ORIENTATION = 39;
BrickletIMUV3.CALLBACK_QUATERNION = 40;
BrickletIMUV3.CALLBACK_ALL_DATA = 41;
BrickletIMUV3.FUNCTION_GET_ACCELERATION = 1;
BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD = 2;
BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY = 3;
BrickletIMUV3.FUNCTION_GET_TEMPERATURE = 4;
BrickletIMUV3.FUNCTION_GET_ORIENTATION = 5;
BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION = 6;
BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR = 7;
BrickletIMUV3.FUNCTION_GET_QUATERNION = 8;
BrickletIMUV3.FUNCTION_GET_ALL_DATA = 9;
BrickletIMUV3.FUNCTION_SAVE_CALIBRATION = 10;
BrickletIMUV3.FUNCTION_SET_SENSOR_CONFIGURATION = 11;
BrickletIMUV3.FUNCTION_GET_SENSOR_CONFIGURATION = 12;
BrickletIMUV3.FUNCTION_SET_SENSOR_FUSION_MODE = 13;
BrickletIMUV3.FUNCTION_GET_SENSOR_FUSION_MODE = 14;
BrickletIMUV3.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION = 15;
BrickletIMUV3.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION = 16;
BrickletIMUV3.FUNCTION_SET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION = 17;
BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION = 18;
BrickletIMUV3.FUNCTION_SET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION = 19;
BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION = 20;
BrickletIMUV3.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 21;
BrickletIMUV3.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 22;
BrickletIMUV3.FUNCTION_SET_ORIENTATION_CALLBACK_CONFIGURATION = 23;
BrickletIMUV3.FUNCTION_GET_ORIENTATION_CALLBACK_CONFIGURATION = 24;
BrickletIMUV3.FUNCTION_SET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION = 25;
BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION = 26;
BrickletIMUV3.FUNCTION_SET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION = 27;
BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION = 28;
BrickletIMUV3.FUNCTION_SET_QUATERNION_CALLBACK_CONFIGURATION = 29;
BrickletIMUV3.FUNCTION_GET_QUATERNION_CALLBACK_CONFIGURATION = 30;
BrickletIMUV3.FUNCTION_SET_ALL_DATA_CALLBACK_CONFIGURATION = 31;
BrickletIMUV3.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATION = 32;
BrickletIMUV3.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIMUV3.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIMUV3.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIMUV3.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIMUV3.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIMUV3.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIMUV3.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIMUV3.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIMUV3.FUNCTION_RESET = 243;
BrickletIMUV3.FUNCTION_WRITE_UID = 248;
BrickletIMUV3.FUNCTION_READ_UID = 249;
BrickletIMUV3.FUNCTION_GET_IDENTITY = 255;
BrickletIMUV3.MAGNETOMETER_RATE_2HZ = 0;
BrickletIMUV3.MAGNETOMETER_RATE_6HZ = 1;
BrickletIMUV3.MAGNETOMETER_RATE_8HZ = 2;
BrickletIMUV3.MAGNETOMETER_RATE_10HZ = 3;
BrickletIMUV3.MAGNETOMETER_RATE_15HZ = 4;
BrickletIMUV3.MAGNETOMETER_RATE_20HZ = 5;
BrickletIMUV3.MAGNETOMETER_RATE_25HZ = 6;
BrickletIMUV3.MAGNETOMETER_RATE_30HZ = 7;
BrickletIMUV3.GYROSCOPE_RANGE_2000DPS = 0;
BrickletIMUV3.GYROSCOPE_RANGE_1000DPS = 1;
BrickletIMUV3.GYROSCOPE_RANGE_500DPS = 2;
BrickletIMUV3.GYROSCOPE_RANGE_250DPS = 3;
BrickletIMUV3.GYROSCOPE_RANGE_125DPS = 4;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_523HZ = 0;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_230HZ = 1;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_116HZ = 2;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_47HZ = 3;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_23HZ = 4;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_12HZ = 5;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_64HZ = 6;
BrickletIMUV3.GYROSCOPE_BANDWIDTH_32HZ = 7;
BrickletIMUV3.ACCELEROMETER_RANGE_2G = 0;
BrickletIMUV3.ACCELEROMETER_RANGE_4G = 1;
BrickletIMUV3.ACCELEROMETER_RANGE_8G = 2;
BrickletIMUV3.ACCELEROMETER_RANGE_16G = 3;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_7_81HZ = 0;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_15_63HZ = 1;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_31_25HZ = 2;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_62_5HZ = 3;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_125HZ = 4;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_250HZ = 5;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_500HZ = 6;
BrickletIMUV3.ACCELEROMETER_BANDWIDTH_1000HZ = 7;
BrickletIMUV3.SENSOR_FUSION_OFF = 0;
BrickletIMUV3.SENSOR_FUSION_ON = 1;
BrickletIMUV3.SENSOR_FUSION_ON_WITHOUT_MAGNETOMETER = 2;
BrickletIMUV3.SENSOR_FUSION_ON_WITHOUT_FAST_MAGNETOMETER_CALIBRATION = 3;
BrickletIMUV3.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIMUV3.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIMUV3.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIMUV3.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIMUV3.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIMUV3.BOOTLOADER_STATUS_OK = 0;
BrickletIMUV3.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIMUV3.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIMUV3.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIMUV3.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIMUV3.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIMUV3.STATUS_LED_CONFIG_OFF = 0;
BrickletIMUV3.STATUS_LED_CONFIG_ON = 1;
BrickletIMUV3.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIMUV3.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIMUV3(uid, ipcon) {
	//Full fledged AHRS with 9 degrees of freedom

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIMUV3.DEVICE_IDENTIFIER, BrickletIMUV3.DEVICE_DISPLAY_NAME);
	BrickletIMUV3.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SAVE_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_SENSOR_FUSION_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_SENSOR_FUSION_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_ORIENTATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ORIENTATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_QUATERNION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_QUATERNION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_ALL_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIMUV3.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIMUV3.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIMUV3.CALLBACK_ACCELERATION] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_MAGNETIC_FIELD] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_ANGULAR_VELOCITY] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_TEMPERATURE] = [9, 'b'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_LINEAR_ACCELERATION] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_GRAVITY_VECTOR] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_ORIENTATION] = [14, 'h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_QUATERNION] = [16, 'h h h h'];
	this.callbackFormats[BrickletIMUV3.CALLBACK_ALL_DATA] = [54, 'h3 h3 h3 h3 h4 h3 h3 b B'];



	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated acceleration from the accelerometer for the
		x, y and z axis. The acceleration is in the range configured with
		:func:`Set Sensor Configuration`.
		
		If you want to get the acceleration periodically, it is recommended
		to use the :cb:`Acceleration` callback and set the period with
		:func:`Set Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ACCELERATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getMagneticField = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated magnetic field from the magnetometer for the
		x, y and z axis.
		
		If you want to get the magnetic field periodically, it is recommended
		to use the :cb:`Magnetic Field` callback and set the period with
		:func:`Set Magnetic Field Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getAngularVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated angular velocity from the gyroscope for the
		x, y and z axis. The angular velocity is in the range configured with
		:func:`Set Sensor Configuration`.
		
		If you want to get the angular velocity periodically, it is recommended
		to use the :cb:`Angular Velocity` acallback nd set the period with
		:func:`Set Angular Velocity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the IMU Brick.
		The temperature is measured in the core of the BNO055 IC, it is not the
		ambient temperature
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_TEMPERATURE, [], '', 9, 'b', returnCallback, errorCallback, false, true);
	};
	this.getOrientation = function(returnCallback, errorCallback) {
		/*
		Returns the current orientation (heading, roll, pitch) of the IMU Brick as
		independent Euler angles. Note that Euler angles always
		experience a `gimbal lock <https://en.wikipedia.org/wiki/Gimbal_lock>`__.
		We recommend that you use quaternions instead, if you need the absolute
		orientation.
		
		If you want to get the orientation periodically, it is recommended
		to use the :cb:`Orientation` callback and set the period with
		:func:`Set Orientation Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ORIENTATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getLinearAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the linear acceleration of the IMU Brick for the
		x, y and z axis. The acceleration is in the range configured with
		:func:`Set Sensor Configuration`.
		
		The linear acceleration is the acceleration in each of the three
		axis of the IMU Brick with the influences of gravity removed.
		
		It is also possible to get the gravity vector with the influence of linear
		acceleration removed, see :func:`Get Gravity Vector`.
		
		If you want to get the linear acceleration periodically, it is recommended
		to use the :cb:`Linear Acceleration` callback and set the period with
		:func:`Set Linear Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getGravityVector = function(returnCallback, errorCallback) {
		/*
		Returns the current gravity vector of the IMU Brick for the
		x, y and z axis.
		
		The gravity vector is the acceleration that occurs due to gravity.
		Influences of additional linear acceleration are removed.
		
		It is also possible to get the linear acceleration with the influence
		of gravity removed, see :func:`Get Linear Acceleration`.
		
		If you want to get the gravity vector periodically, it is recommended
		to use the :cb:`Gravity Vector` callback and set the period with
		:func:`Set Gravity Vector Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getQuaternion = function(returnCallback, errorCallback) {
		/*
		Returns the current orientation (w, x, y, z) of the IMU Brick as
		`quaternions <https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation>`__.
		
		You have to divide the return values by 16383 (14 bit) to get
		the usual range of -1.0 to +1.0 for quaternions.
		
		If you want to get the quaternions periodically, it is recommended
		to use the :cb:`Quaternion` callback and set the period with
		:func:`Set Quaternion Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_QUATERNION, [], '', 16, 'h h h h', returnCallback, errorCallback, false, true);
	};
	this.getAllData = function(returnCallback, errorCallback) {
		/*
		Return all of the available data of the IMU Brick.
		
		* acceleration (see :func:`Get Acceleration`)
		* magnetic field (see :func:`Get Magnetic Field`)
		* angular velocity (see :func:`Get Angular Velocity`)
		* Euler angles (see :func:`Get Orientation`)
		* quaternion (see :func:`Get Quaternion`)
		* linear acceleration (see :func:`Get Linear Acceleration`)
		* gravity vector (see :func:`Get Gravity Vector`)
		* temperature (see :func:`Get Temperature`)
		* calibration status (see below)
		
		The calibration status consists of four pairs of two bits. Each pair
		of bits represents the status of the current calibration.
		
		* bit 0-1: Magnetometer
		* bit 2-3: Accelerometer
		* bit 4-5: Gyroscope
		* bit 6-7: System
		
		A value of 0 means for "not calibrated" and a value of 3 means
		"fully calibrated". In your program you should always be able to
		ignore the calibration status, it is used by the calibration
		window of the Brick Viewer and it can be ignored after the first
		calibration. See the documentation in the calibration window for
		more information regarding the calibration of the IMU Brick.
		
		If you want to get the data periodically, it is recommended
		to use the :cb:`All Data` callback and set the period with
		:func:`Set All Data Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ALL_DATA, [], '', 54, 'h3 h3 h3 h3 h4 h3 h3 b B', returnCallback, errorCallback, false, true);
	};
	this.saveCalibration = function(returnCallback, errorCallback) {
		/*
		A call of this function saves the current calibration to be used
		as a starting point for the next restart of continuous calibration
		of the IMU Brick.
		
		A return value of *true* means that the calibration could be used and
		*false* means that it could not be used (this happens if the calibration
		status is not "fully calibrated").
		
		This function is used by the calibration window of the Brick Viewer, you
		should not need to call it in your program.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SAVE_CALIBRATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setSensorConfiguration = function(magnetometerRate, gyroscopeRange, gyroscopeBandwidth, accelerometerRange, accelerometerBandwidth, returnCallback, errorCallback) {
		/*
		Sets the available sensor configuration for the Magnetometer, Gyroscope and
		Accelerometer. The Accelerometer Range is user selectable in all fusion modes,
		all other configurations are auto-controlled in fusion mode.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_SENSOR_CONFIGURATION, [magnetometerRate, gyroscopeRange, gyroscopeBandwidth, accelerometerRange, accelerometerBandwidth], 'B B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the sensor configuration as set by :func:`Set Sensor Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_SENSOR_CONFIGURATION, [], '', 13, 'B B B B B', returnCallback, errorCallback, false, true);
	};
	this.setSensorFusionMode = function(mode, returnCallback, errorCallback) {
		/*
		If the fusion mode is turned off, the functions :func:`Get Acceleration`,
		:func:`Get Magnetic Field` and :func:`Get Angular Velocity` return uncalibrated
		and uncompensated sensor data. All other sensor data getters return no data.
		
		Since firmware version 2.0.6 you can also use a fusion mode without magnetometer.
		In this mode the calculated orientation is relative (with magnetometer it is
		absolute with respect to the earth). However, the calculation can't be influenced
		by spurious magnetic fields.
		
		Since firmware version 2.0.13 you can also use a fusion mode without fast
		magnetometer calibration. This mode is the same as the normal fusion mode,
		but the fast magnetometer calibration is turned off. So to find the orientation
		the first time will likely take longer, but small magnetic influences might
		not affect the automatic calibration as much.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_SENSOR_FUSION_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorFusionMode = function(returnCallback, errorCallback) {
		/*
		Returns the sensor fusion mode as set by :func:`Set Sensor Fusion Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_SENSOR_FUSION_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setAccelerationCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Acceleration` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAccelerationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setMagneticFieldCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Magnetic Field` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMagneticFieldCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Magnetic Field Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_MAGNETIC_FIELD_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setAngularVelocityCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Angular Velocity` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAngularVelocityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Angular Velocity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ANGULAR_VELOCITY_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Temperature` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setOrientationCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Orientation` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_ORIENTATION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOrientationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Orientation Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ORIENTATION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setLinearAccelerationCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Linear Acceleration` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getLinearAccelerationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Linear Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_LINEAR_ACCELERATION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setGravityVectorCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Gravity Vector` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGravityVectorCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Gravity Vector Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_GRAVITY_VECTOR_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setQuaternionCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Quaternion` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_QUATERNION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getQuaternionCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Quaternion Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_QUATERNION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setAllDataCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Data` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_ALL_DATA_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllDataCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set All Data Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIMUV3.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIMUV3;
