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

BrickIMUV2.DEVICE_IDENTIFIER = 18;
BrickIMUV2.DEVICE_DISPLAY_NAME = 'IMU Brick 2.0';
BrickIMUV2.CALLBACK_ACCELERATION = 32;
BrickIMUV2.CALLBACK_MAGNETIC_FIELD = 33;
BrickIMUV2.CALLBACK_ANGULAR_VELOCITY = 34;
BrickIMUV2.CALLBACK_TEMPERATURE = 35;
BrickIMUV2.CALLBACK_LINEAR_ACCELERATION = 36;
BrickIMUV2.CALLBACK_GRAVITY_VECTOR = 37;
BrickIMUV2.CALLBACK_ORIENTATION = 38;
BrickIMUV2.CALLBACK_QUATERNION = 39;
BrickIMUV2.CALLBACK_ALL_DATA = 40;
BrickIMUV2.FUNCTION_GET_ACCELERATION = 1;
BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD = 2;
BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY = 3;
BrickIMUV2.FUNCTION_GET_TEMPERATURE = 4;
BrickIMUV2.FUNCTION_GET_ORIENTATION = 5;
BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION = 6;
BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR = 7;
BrickIMUV2.FUNCTION_GET_QUATERNION = 8;
BrickIMUV2.FUNCTION_GET_ALL_DATA = 9;
BrickIMUV2.FUNCTION_LEDS_ON = 10;
BrickIMUV2.FUNCTION_LEDS_OFF = 11;
BrickIMUV2.FUNCTION_ARE_LEDS_ON = 12;
BrickIMUV2.FUNCTION_SAVE_CALIBRATION = 13;
BrickIMUV2.FUNCTION_SET_ACCELERATION_PERIOD = 14;
BrickIMUV2.FUNCTION_GET_ACCELERATION_PERIOD = 15;
BrickIMUV2.FUNCTION_SET_MAGNETIC_FIELD_PERIOD = 16;
BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD_PERIOD = 17;
BrickIMUV2.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD = 18;
BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD = 19;
BrickIMUV2.FUNCTION_SET_TEMPERATURE_PERIOD = 20;
BrickIMUV2.FUNCTION_GET_TEMPERATURE_PERIOD = 21;
BrickIMUV2.FUNCTION_SET_ORIENTATION_PERIOD = 22;
BrickIMUV2.FUNCTION_GET_ORIENTATION_PERIOD = 23;
BrickIMUV2.FUNCTION_SET_LINEAR_ACCELERATION_PERIOD = 24;
BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION_PERIOD = 25;
BrickIMUV2.FUNCTION_SET_GRAVITY_VECTOR_PERIOD = 26;
BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR_PERIOD = 27;
BrickIMUV2.FUNCTION_SET_QUATERNION_PERIOD = 28;
BrickIMUV2.FUNCTION_GET_QUATERNION_PERIOD = 29;
BrickIMUV2.FUNCTION_SET_ALL_DATA_PERIOD = 30;
BrickIMUV2.FUNCTION_GET_ALL_DATA_PERIOD = 31;
BrickIMUV2.FUNCTION_SET_SENSOR_CONFIGURATION = 41;
BrickIMUV2.FUNCTION_GET_SENSOR_CONFIGURATION = 42;
BrickIMUV2.FUNCTION_SET_SENSOR_FUSION_MODE = 43;
BrickIMUV2.FUNCTION_GET_SENSOR_FUSION_MODE = 44;
BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG = 231;
BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG = 232;
BrickIMUV2.FUNCTION_GET_SEND_TIMEOUT_COUNT = 233;
BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE = 234;
BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE = 235;
BrickIMUV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 237;
BrickIMUV2.FUNCTION_ENABLE_STATUS_LED = 238;
BrickIMUV2.FUNCTION_DISABLE_STATUS_LED = 239;
BrickIMUV2.FUNCTION_IS_STATUS_LED_ENABLED = 240;
BrickIMUV2.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickIMUV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickIMUV2.FUNCTION_RESET = 243;
BrickIMUV2.FUNCTION_WRITE_BRICKLET_PLUGIN = 246;
BrickIMUV2.FUNCTION_READ_BRICKLET_PLUGIN = 247;
BrickIMUV2.FUNCTION_GET_IDENTITY = 255;
BrickIMUV2.MAGNETOMETER_RATE_2HZ = 0;
BrickIMUV2.MAGNETOMETER_RATE_6HZ = 1;
BrickIMUV2.MAGNETOMETER_RATE_8HZ = 2;
BrickIMUV2.MAGNETOMETER_RATE_10HZ = 3;
BrickIMUV2.MAGNETOMETER_RATE_15HZ = 4;
BrickIMUV2.MAGNETOMETER_RATE_20HZ = 5;
BrickIMUV2.MAGNETOMETER_RATE_25HZ = 6;
BrickIMUV2.MAGNETOMETER_RATE_30HZ = 7;
BrickIMUV2.GYROSCOPE_RANGE_2000DPS = 0;
BrickIMUV2.GYROSCOPE_RANGE_1000DPS = 1;
BrickIMUV2.GYROSCOPE_RANGE_500DPS = 2;
BrickIMUV2.GYROSCOPE_RANGE_250DPS = 3;
BrickIMUV2.GYROSCOPE_RANGE_125DPS = 4;
BrickIMUV2.GYROSCOPE_BANDWIDTH_523HZ = 0;
BrickIMUV2.GYROSCOPE_BANDWIDTH_230HZ = 1;
BrickIMUV2.GYROSCOPE_BANDWIDTH_116HZ = 2;
BrickIMUV2.GYROSCOPE_BANDWIDTH_47HZ = 3;
BrickIMUV2.GYROSCOPE_BANDWIDTH_23HZ = 4;
BrickIMUV2.GYROSCOPE_BANDWIDTH_12HZ = 5;
BrickIMUV2.GYROSCOPE_BANDWIDTH_64HZ = 6;
BrickIMUV2.GYROSCOPE_BANDWIDTH_32HZ = 7;
BrickIMUV2.ACCELEROMETER_RANGE_2G = 0;
BrickIMUV2.ACCELEROMETER_RANGE_4G = 1;
BrickIMUV2.ACCELEROMETER_RANGE_8G = 2;
BrickIMUV2.ACCELEROMETER_RANGE_16G = 3;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_7_81HZ = 0;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_15_63HZ = 1;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_31_25HZ = 2;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_62_5HZ = 3;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_125HZ = 4;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_250HZ = 5;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_500HZ = 6;
BrickIMUV2.ACCELEROMETER_BANDWIDTH_1000HZ = 7;
BrickIMUV2.SENSOR_FUSION_OFF = 0;
BrickIMUV2.SENSOR_FUSION_ON = 1;
BrickIMUV2.SENSOR_FUSION_ON_WITHOUT_MAGNETOMETER = 2;
BrickIMUV2.SENSOR_FUSION_ON_WITHOUT_FAST_MAGNETOMETER_CALIBRATION = 3;
BrickIMUV2.COMMUNICATION_METHOD_NONE = 0;
BrickIMUV2.COMMUNICATION_METHOD_USB = 1;
BrickIMUV2.COMMUNICATION_METHOD_SPI_STACK = 2;
BrickIMUV2.COMMUNICATION_METHOD_CHIBI = 3;
BrickIMUV2.COMMUNICATION_METHOD_RS485 = 4;
BrickIMUV2.COMMUNICATION_METHOD_WIFI = 5;
BrickIMUV2.COMMUNICATION_METHOD_ETHERNET = 6;
BrickIMUV2.COMMUNICATION_METHOD_WIFI_V2 = 7;

function BrickIMUV2(uid, ipcon) {
	//Full fledged AHRS with 9 degrees of freedom

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickIMUV2.DEVICE_IDENTIFIER, BrickIMUV2.DEVICE_DISPLAY_NAME);
	BrickIMUV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 3];
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ORIENTATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_QUATERNION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_LEDS_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_LEDS_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_ARE_LEDS_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SAVE_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_TEMPERATURE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_TEMPERATURE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ORIENTATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_LINEAR_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_GRAVITY_VECTOR_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_QUATERNION_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_SENSOR_FUSION_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SENSOR_FUSION_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SEND_TIMEOUT_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_ENABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_DISABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_IS_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_WRITE_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickIMUV2.FUNCTION_READ_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickIMUV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickIMUV2.CALLBACK_ACCELERATION] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_MAGNETIC_FIELD] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_ANGULAR_VELOCITY] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_TEMPERATURE] = [9, 'b'];
	this.callbackFormats[BrickIMUV2.CALLBACK_LINEAR_ACCELERATION] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_GRAVITY_VECTOR] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_ORIENTATION] = [14, 'h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_QUATERNION] = [16, 'h h h h'];
	this.callbackFormats[BrickIMUV2.CALLBACK_ALL_DATA] = [54, 'h3 h3 h3 h3 h4 h3 h3 b B'];



	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated acceleration from the accelerometer for the
		x, y and z axis. The acceleration is in the range configured with
		:func:`Set Sensor Configuration`.
		
		If you want to get the acceleration periodically, it is recommended
		to use the :cb:`Acceleration` callback and set the period with
		:func:`Set Acceleration Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ACCELERATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getMagneticField = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated magnetic field from the magnetometer for the
		x, y and z axis.
		
		If you want to get the magnetic field periodically, it is recommended
		to use the :cb:`Magnetic Field` callback and set the period with
		:func:`Set Magnetic Field Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getAngularVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the calibrated angular velocity from the gyroscope for the
		x, y and z axis. The angular velocity is in the range configured with
		:func:`Set Sensor Configuration`.
		
		If you want to get the angular velocity periodically, it is recommended
		to use the :cb:`Angular Velocity` acallback nd set the period with
		:func:`Set Angular Velocity Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the IMU Brick.
		The temperature is measured in the core of the BNO055 IC, it is not the
		ambient temperature
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_TEMPERATURE, [], '', 9, 'b', returnCallback, errorCallback, false, true);
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
		:func:`Set Orientation Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ORIENTATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
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
		:func:`Set Linear Acceleration Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
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
		:func:`Set Gravity Vector Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.getQuaternion = function(returnCallback, errorCallback) {
		/*
		Returns the current orientation (w, x, y, z) of the IMU Brick as
		`quaternions <https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation>`__.
		
		You have to divide the return values by 16383 (14 bit) to get
		the usual range of -1.0 to +1.0 for quaternions.
		
		If you want to get the quaternions periodically, it is recommended
		to use the :cb:`Quaternion` callback and set the period with
		:func:`Set Quaternion Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_QUATERNION, [], '', 16, 'h h h h', returnCallback, errorCallback, false, true);
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
		:func:`Set All Data Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ALL_DATA, [], '', 54, 'h3 h3 h3 h3 h4 h3 h3 b B', returnCallback, errorCallback, false, true);
	};
	this.ledsOn = function(returnCallback, errorCallback) {
		/*
		Turns the orientation and direction LEDs of the IMU Brick on.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_LEDS_ON, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.ledsOff = function(returnCallback, errorCallback) {
		/*
		Turns the orientation and direction LEDs of the IMU Brick off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_LEDS_OFF, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.areLedsOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the orientation and direction LEDs of the IMU Brick
		are on, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_ARE_LEDS_ON, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SAVE_CALIBRATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setAccelerationPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Acceleration` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_ACCELERATION_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAccelerationPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Acceleration Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ACCELERATION_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setMagneticFieldPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Magnetic Field` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_MAGNETIC_FIELD_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMagneticFieldPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Magnetic Field Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_MAGNETIC_FIELD_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAngularVelocityPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Angular Velocity` callback is
		triggered periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_ANGULAR_VELOCITY_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAngularVelocityPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Angular Velocity Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ANGULAR_VELOCITY_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setTemperaturePeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_TEMPERATURE_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperaturePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Temperature Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_TEMPERATURE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setOrientationPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Orientation` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_ORIENTATION_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOrientationPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Orientation Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ORIENTATION_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setLinearAccelerationPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Linear Acceleration` callback is
		triggered periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_LINEAR_ACCELERATION_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getLinearAccelerationPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Linear Acceleration Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_LINEAR_ACCELERATION_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setGravityVectorPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Gravity Vector` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_GRAVITY_VECTOR_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGravityVectorPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Gravity Vector Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_GRAVITY_VECTOR_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setQuaternionPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Quaternion` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_QUATERNION_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getQuaternionPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Quaternion Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_QUATERNION_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`All Data` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllDataPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set All Data Period`.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setSensorConfiguration = function(magnetometerRate, gyroscopeRange, gyroscopeBandwidth, accelerometerRange, accelerometerBandwidth, returnCallback, errorCallback) {
		/*
		Sets the available sensor configuration for the Magnetometer, Gyroscope and
		Accelerometer. The Accelerometer Range is user selectable in all fusion modes,
		all other configurations are auto-controlled in fusion mode.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_SENSOR_CONFIGURATION, [magnetometerRate, gyroscopeRange, gyroscopeBandwidth, accelerometerRange, accelerometerBandwidth], 'B B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the sensor configuration as set by :func:`Set Sensor Configuration`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SENSOR_CONFIGURATION, [], '', 13, 'B B B B B', returnCallback, errorCallback, false, true);
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
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_SENSOR_FUSION_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorFusionMode = function(returnCallback, errorCallback) {
		/*
		Returns the sensor fusion mode as set by :func:`Set Sensor Fusion Mode`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SENSOR_FUSION_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setSPITFPBaudrateConfig = function(enableDynamicBaudrate, minimumDynamicBaudrate, returnCallback, errorCallback) {
		/*
		The SPITF protocol can be used with a dynamic baudrate. If the dynamic baudrate is
		enabled, the Brick will try to adapt the baudrate for the communication
		between Bricks and Bricklets according to the amount of data that is transferred.
		
		The baudrate will be increased exponentially if lots of data is sent/received and
		decreased linearly if little data is sent/received.
		
		This lowers the baudrate in applications where little data is transferred (e.g.
		a weather station) and increases the robustness. If there is lots of data to transfer
		(e.g. Thermal Imaging Bricklet) it automatically increases the baudrate as needed.
		
		In cases where some data has to transferred as fast as possible every few seconds
		(e.g. RS485 Bricklet with a high baudrate but small payload) you may want to turn
		the dynamic baudrate off to get the highest possible performance.
		
		The maximum value of the baudrate can be set per port with the function
		:func:`Set SPITFP Baudrate`. If the dynamic baudrate is disabled, the baudrate
		as set by :func:`Set SPITFP Baudrate` will be used statically.
		
		.. versionadded:: 2.0.10$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG, [enableDynamicBaudrate, minimumDynamicBaudrate], '? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrateConfig = function(returnCallback, errorCallback) {
		/*
		Returns the baudrate config, see :func:`Set SPITFP Baudrate Config`.
		
		.. versionadded:: 2.0.10$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG, [], '', 13, '? I', returnCallback, errorCallback, false, true);
	};
	this.getSendTimeoutCount = function(communicationMethod, returnCallback, errorCallback) {
		/*
		Returns the timeout count for the different communication methods.
		
		The methods 0-2 are available for all Bricks, 3-7 only for Master Bricks.
		
		This function is mostly used for debugging during development, in normal operation
		the counters should nearly always stay at 0.
		
		.. versionadded:: 2.0.7$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SEND_TIMEOUT_COUNT, [communicationMethod], 'B', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setSPITFPBaudrate = function(brickletPort, baudrate, returnCallback, errorCallback) {
		/*
		Sets the baudrate for a specific Bricklet port.
		
		If you want to increase the throughput of Bricklets you can increase
		the baudrate. If you get a high error count because of high
		interference (see :func:`Get SPITFP Error Count`) you can decrease the
		baudrate.
		
		If the dynamic baudrate feature is enabled, the baudrate set by this
		function corresponds to the maximum baudrate (see :func:`Set SPITFP Baudrate Config`).
		
		Regulatory testing is done with the default baudrate. If CE compatibility
		or similar is necessary in your applications we recommend to not change
		the baudrate.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_SET_SPITFP_BAUDRATE, [brickletPort, baudrate], 'c I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrate = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the baudrate for a given Bricklet port, see :func:`Set SPITFP Baudrate`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SPITFP_BAUDRATE, [brickletPort], 'c', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPErrorCount = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Brick side. All
		Bricklets have a similar function that returns the errors on the Bricklet side.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [brickletPort], 'c', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.enableStatusLED = function(returnCallback, errorCallback) {
		/*
		Enables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_ENABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableStatusLED = function(returnCallback, errorCallback) {
		/*
		Disables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_DISABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isStatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the status LED is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_IS_STATUS_LED_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 52, 'B B3 s40', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of ±15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeBrickletPlugin = function(port, offset, chunk, returnCallback, errorCallback) {
		/*
		Writes 32 bytes of firmware to the bricklet attached at the given port.
		The bytes are written to the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_WRITE_BRICKLET_PLUGIN, [port, offset, chunk], 'c B B32', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readBrickletPlugin = function(port, offset, returnCallback, errorCallback) {
		/*
		Reads 32 bytes of firmware from the bricklet attached at the given port.
		The bytes are read starting at the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_READ_BRICKLET_PLUGIN, [port, offset], 'c B', 40, 'B32', returnCallback, errorCallback, false, true);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position is the position in the stack from '0' (bottom) to '8' (top).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickIMUV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickIMUV2;
