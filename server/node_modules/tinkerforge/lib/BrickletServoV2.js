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

BrickletServoV2.DEVICE_IDENTIFIER = 2157;
BrickletServoV2.DEVICE_DISPLAY_NAME = 'Servo Bricklet 2.0';
BrickletServoV2.CALLBACK_POSITION_REACHED = 27;
BrickletServoV2.FUNCTION_GET_STATUS = 1;
BrickletServoV2.FUNCTION_SET_ENABLE = 2;
BrickletServoV2.FUNCTION_GET_ENABLED = 3;
BrickletServoV2.FUNCTION_SET_POSITION = 4;
BrickletServoV2.FUNCTION_GET_POSITION = 5;
BrickletServoV2.FUNCTION_GET_CURRENT_POSITION = 6;
BrickletServoV2.FUNCTION_GET_CURRENT_VELOCITY = 7;
BrickletServoV2.FUNCTION_SET_MOTION_CONFIGURATION = 8;
BrickletServoV2.FUNCTION_GET_MOTION_CONFIGURATION = 9;
BrickletServoV2.FUNCTION_SET_PULSE_WIDTH = 10;
BrickletServoV2.FUNCTION_GET_PULSE_WIDTH = 11;
BrickletServoV2.FUNCTION_SET_DEGREE = 12;
BrickletServoV2.FUNCTION_GET_DEGREE = 13;
BrickletServoV2.FUNCTION_SET_PERIOD = 14;
BrickletServoV2.FUNCTION_GET_PERIOD = 15;
BrickletServoV2.FUNCTION_GET_SERVO_CURRENT = 16;
BrickletServoV2.FUNCTION_SET_SERVO_CURRENT_CONFIGURATION = 17;
BrickletServoV2.FUNCTION_GET_SERVO_CURRENT_CONFIGURATION = 18;
BrickletServoV2.FUNCTION_SET_INPUT_VOLTAGE_CONFIGURATION = 19;
BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE_CONFIGURATION = 20;
BrickletServoV2.FUNCTION_GET_OVERALL_CURRENT = 21;
BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE = 22;
BrickletServoV2.FUNCTION_SET_CURRENT_CALIBRATION = 23;
BrickletServoV2.FUNCTION_GET_CURRENT_CALIBRATION = 24;
BrickletServoV2.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION = 25;
BrickletServoV2.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION = 26;
BrickletServoV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletServoV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletServoV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletServoV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletServoV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletServoV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletServoV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletServoV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletServoV2.FUNCTION_RESET = 243;
BrickletServoV2.FUNCTION_WRITE_UID = 248;
BrickletServoV2.FUNCTION_READ_UID = 249;
BrickletServoV2.FUNCTION_GET_IDENTITY = 255;
BrickletServoV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletServoV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletServoV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletServoV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletServoV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletServoV2.BOOTLOADER_STATUS_OK = 0;
BrickletServoV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletServoV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletServoV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletServoV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletServoV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletServoV2.STATUS_LED_CONFIG_OFF = 0;
BrickletServoV2.STATUS_LED_CONFIG_ON = 1;
BrickletServoV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletServoV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletServoV2(uid, ipcon) {
	//Drives up to 10 RC Servos

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletServoV2.DEVICE_IDENTIFIER, BrickletServoV2.DEVICE_DISPLAY_NAME);
	BrickletServoV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletServoV2.FUNCTION_GET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_MOTION_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_MOTION_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_DEGREE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_DEGREE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_PERIOD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_SERVO_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_SERVO_CURRENT_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_SERVO_CURRENT_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_INPUT_VOLTAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_OVERALL_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_CURRENT_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_CURRENT_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletServoV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletServoV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletServoV2.CALLBACK_POSITION_REACHED] = [12, 'H h'];



	this.getStatus = function(returnCallback, errorCallback) {
		/*
		Returns the status information of the Servo Bricklet 2.0.
		
		The status includes
		
		* for each channel if it is enabled or disabled,
		* for each channel the current position,
		* for each channel the current velocity,
		* for each channel the current usage and
		* the input voltage.
		
		Please note that the position and the velocity is a snapshot of the
		current position and velocity of the servo in motion.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_STATUS, [], '', 72, '?10 h10 h10 H10 H', returnCallback, errorCallback, false, true);
	};
	this.setEnable = function(servoChannel, enable, returnCallback, errorCallback) {
		/*
		Enables a servo channel (0 to 9). If a servo is enabled, the configured position,
		velocity, acceleration, etc. are applied immediately.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_ENABLE, [servoChannel, enable], 'H ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnabled = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns *true* if the specified servo channel is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_ENABLED, [servoChannel], 'H', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setPosition = function(servoChannel, position, returnCallback, errorCallback) {
		/*
		Sets the position in °/100 for the specified servo channel.
		
		The default range of the position is -9000 to 9000, but it can be specified
		according to your servo with :func:`Set Degree`.
		
		If you want to control a linear servo or RC brushless motor controller or
		similar with the Servo Brick, you can also define lengths or speeds with
		:func:`Set Degree`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_POSITION, [servoChannel, position], 'H h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPosition = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the position of the specified servo channel as set by :func:`Set Position`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_POSITION, [servoChannel], 'H', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getCurrentPosition = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the *current* position of the specified servo channel. This may not be the
		value of :func:`Set Position` if the servo is currently approaching a
		position goal.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_CURRENT_POSITION, [servoChannel], 'H', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocity = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the specified servo channel. This may not be the
		velocity specified by :func:`Set Motion Configuration`. if the servo is
		currently approaching a velocity goal.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_CURRENT_VELOCITY, [servoChannel], 'H', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setMotionConfiguration = function(servoChannel, velocity, acceleration, deceleration, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the specified servo channel in °/100s as well as
		the acceleration and deceleration in °/100s²
		
		With a velocity of 0 °/100s the position will be set immediately (no velocity).
		
		With an acc-/deceleration of 0 °/100s² the velocity will be set immediately
		(no acc-/deceleration).
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_MOTION_CONFIGURATION, [servoChannel, velocity, acceleration, deceleration], 'H I I I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMotionConfiguration = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the motion configuration as set by :func:`Set Motion Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_MOTION_CONFIGURATION, [servoChannel], 'H', 20, 'I I I', returnCallback, errorCallback, false, true);
	};
	this.setPulseWidth = function(servoChannel, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum pulse width of the specified servo channel in µs.
		
		Usually, servos are controlled with a
		`PWM <https://en.wikipedia.org/wiki/Pulse-width_modulation>`__, whereby the
		length of the pulse controls the position of the servo. Every servo has
		different minimum and maximum pulse widths, these can be specified with
		this function.
		
		If you have a datasheet for your servo that specifies the minimum and
		maximum pulse width, you should set the values accordingly. If your servo
		comes without any datasheet you have to find the values via trial and error.
		
		Both values have a range from 1 to 65535 (unsigned 16-bit integer). The
		minimum must be smaller than the maximum.
		
		The default values are 1000µs (1ms) and 2000µs (2ms) for minimum and
		maximum pulse width.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_PULSE_WIDTH, [servoChannel, min, max], 'H I I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPulseWidth = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum pulse width for the specified servo channel as set by
		:func:`Set Pulse Width`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_PULSE_WIDTH, [servoChannel], 'H', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.setDegree = function(servoChannel, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum degree for the specified servo channel (by default
		given as °/100).
		
		This only specifies the abstract values between which the minimum and maximum
		pulse width is scaled. For example: If you specify a pulse width of 1000µs
		to 2000µs and a degree range of -90° to 90°, a call of :func:`Set Position`
		with 0 will result in a pulse width of 1500µs
		(-90° = 1000µs, 90° = 2000µs, etc.).
		
		Possible usage:
		
		* The datasheet of your servo specifies a range of 200° with the middle position
		  at 110°. In this case you can set the minimum to -9000 and the maximum to 11000.
		* You measure a range of 220° on your servo and you don't have or need a middle
		  position. In this case you can set the minimum to 0 and the maximum to 22000.
		* You have a linear servo with a drive length of 20cm, In this case you could
		  set the minimum to 0 and the maximum to 20000. Now you can set the Position
		  with :func:`Set Position` with a resolution of cm/100. Also the velocity will
		  have a resolution of cm/100s and the acceleration will have a resolution of
		  cm/100s².
		* You don't care about units and just want the highest possible resolution. In
		  this case you should set the minimum to -32767 and the maximum to 32767.
		* You have a brushless motor with a maximum speed of 10000 rpm and want to
		  control it with a RC brushless motor controller. In this case you can set the
		  minimum to 0 and the maximum to 10000. :func:`Set Position` now controls the rpm.
		
		Both values have a possible range from -32767 to 32767
		(signed 16-bit integer). The minimum must be smaller than the maximum.
		
		The default values are -9000 and 9000 for the minimum and maximum degree.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_DEGREE, [servoChannel, min, max], 'H h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDegree = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum degree for the specified servo channel as set by
		:func:`Set Degree`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_DEGREE, [servoChannel], 'H', 12, 'h h', returnCallback, errorCallback, false, true);
	};
	this.setPeriod = function(servoChannel, period, returnCallback, errorCallback) {
		/*
		Sets the period of the specified servo channel in µs.
		
		Usually, servos are controlled with a
		`PWM <https://en.wikipedia.org/wiki/Pulse-width_modulation>`__. Different
		servos expect PWMs with different periods. Most servos run well with a
		period of about 20ms.
		
		If your servo comes with a datasheet that specifies a period, you should
		set it accordingly. If you don't have a datasheet and you have no idea
		what the correct period is, the default value (19.5ms) will most likely
		work fine.
		
		The minimum possible period is 1µs and the maximum is 1000000µs.
		
		The default value is 19.5ms (19500µs).
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_PERIOD, [servoChannel, period], 'H I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPeriod = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the period for the specified servo channel as set by :func:`Set Period`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_PERIOD, [servoChannel], 'H', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getServoCurrent = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the current consumption of the specified servo channel in mA.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_SERVO_CURRENT, [servoChannel], 'H', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setServoCurrentConfiguration = function(servoChannel, averagingDuration, returnCallback, errorCallback) {
		/*
		Sets the averaging duration of the current measurement for the specified servo channel in ms.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_SERVO_CURRENT_CONFIGURATION, [servoChannel, averagingDuration], 'H B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getServoCurrentConfiguration = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the servo current configuration for the specified servo channel as set
		by :func:`Set Servo Current Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_SERVO_CURRENT_CONFIGURATION, [servoChannel], 'H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setInputVoltageConfiguration = function(averagingDuration, returnCallback, errorCallback) {
		/*
		Sets the averaging duration of the input voltage measurement for the specified servo channel in ms.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_INPUT_VOLTAGE_CONFIGURATION, [averagingDuration], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getInputVoltageConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the input voltage configuration as set by :func:`Set Input Voltage Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE_CONFIGURATION, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getOverallCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of all servos together in mA.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_OVERALL_CURRENT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the input voltage in mV. The input voltage is
		given via the black power input connector on the Servo Brick.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setCurrentCalibration = function(offset, returnCallback, errorCallback) {
		/*
		Sets an offset value (in mA) for each channel.
		
		Note: On delivery the Servo Bricklet 2.0 is already calibrated.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_CURRENT_CALIBRATION, [offset], 'h10', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the current calibration as set by :func:`Set Current Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_CURRENT_CALIBRATION, [], '', 28, 'h10', returnCallback, errorCallback, false, true);
	};
	this.setPositionReachedCallbackConfiguration = function(servoChannel, enabled, returnCallback, errorCallback) {
		/*
		Enable/Disable :cb:`Position Reached` callback.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION, [servoChannel, enabled], 'H ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionReachedCallbackConfiguration = function(servoChannel, returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Position Reached Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION, [servoChannel], 'H', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletServoV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletServoV2;
