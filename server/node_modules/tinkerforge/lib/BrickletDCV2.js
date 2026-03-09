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

BrickletDCV2.DEVICE_IDENTIFIER = 2165;
BrickletDCV2.DEVICE_DISPLAY_NAME = 'DC Bricklet 2.0';
BrickletDCV2.CALLBACK_EMERGENCY_SHUTDOWN = 22;
BrickletDCV2.CALLBACK_VELOCITY_REACHED = 23;
BrickletDCV2.CALLBACK_CURRENT_VELOCITY = 24;
BrickletDCV2.FUNCTION_SET_ENABLED = 1;
BrickletDCV2.FUNCTION_GET_ENABLED = 2;
BrickletDCV2.FUNCTION_SET_VELOCITY = 3;
BrickletDCV2.FUNCTION_GET_VELOCITY = 4;
BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY = 5;
BrickletDCV2.FUNCTION_SET_MOTION = 6;
BrickletDCV2.FUNCTION_GET_MOTION = 7;
BrickletDCV2.FUNCTION_FULL_BRAKE = 8;
BrickletDCV2.FUNCTION_SET_DRIVE_MODE = 9;
BrickletDCV2.FUNCTION_GET_DRIVE_MODE = 10;
BrickletDCV2.FUNCTION_SET_PWM_FREQUENCY = 11;
BrickletDCV2.FUNCTION_GET_PWM_FREQUENCY = 12;
BrickletDCV2.FUNCTION_GET_POWER_STATISTICS = 13;
BrickletDCV2.FUNCTION_SET_ERROR_LED_CONFIG = 14;
BrickletDCV2.FUNCTION_GET_ERROR_LED_CONFIG = 15;
BrickletDCV2.FUNCTION_SET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION = 16;
BrickletDCV2.FUNCTION_GET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION = 17;
BrickletDCV2.FUNCTION_SET_VELOCITY_REACHED_CALLBACK_CONFIGURATION = 18;
BrickletDCV2.FUNCTION_GET_VELOCITY_REACHED_CALLBACK_CONFIGURATION = 19;
BrickletDCV2.FUNCTION_SET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION = 20;
BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION = 21;
BrickletDCV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletDCV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletDCV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletDCV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletDCV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletDCV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletDCV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletDCV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletDCV2.FUNCTION_RESET = 243;
BrickletDCV2.FUNCTION_WRITE_UID = 248;
BrickletDCV2.FUNCTION_READ_UID = 249;
BrickletDCV2.FUNCTION_GET_IDENTITY = 255;
BrickletDCV2.DRIVE_MODE_DRIVE_BRAKE = 0;
BrickletDCV2.DRIVE_MODE_DRIVE_COAST = 1;
BrickletDCV2.ERROR_LED_CONFIG_OFF = 0;
BrickletDCV2.ERROR_LED_CONFIG_ON = 1;
BrickletDCV2.ERROR_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletDCV2.ERROR_LED_CONFIG_SHOW_ERROR = 3;
BrickletDCV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletDCV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletDCV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletDCV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletDCV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletDCV2.BOOTLOADER_STATUS_OK = 0;
BrickletDCV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletDCV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletDCV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletDCV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletDCV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletDCV2.STATUS_LED_CONFIG_OFF = 0;
BrickletDCV2.STATUS_LED_CONFIG_ON = 1;
BrickletDCV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletDCV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletDCV2(uid, ipcon) {
	//Drives one brushed DC motor with up to 28V and 5A (peak)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletDCV2.DEVICE_IDENTIFIER, BrickletDCV2.DEVICE_DISPLAY_NAME);
	BrickletDCV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDCV2.FUNCTION_SET_ENABLED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_MOTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_POWER_STATISTICS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_VELOCITY_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_VELOCITY_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDCV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDCV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDCV2.CALLBACK_EMERGENCY_SHUTDOWN] = [8, ''];
	this.callbackFormats[BrickletDCV2.CALLBACK_VELOCITY_REACHED] = [10, 'h'];
	this.callbackFormats[BrickletDCV2.CALLBACK_CURRENT_VELOCITY] = [10, 'h'];



	this.setEnabled = function(enabled, returnCallback, errorCallback) {
		/*
		Enables/Disables the driver chip. The driver parameters can be configured
		(velocity, acceleration, etc) before it is enabled.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_ENABLED, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the driver chip is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setVelocity = function(velocity, returnCallback, errorCallback) {
		/*
		Sets the velocity of the motor. Whereas -32767 is full speed backward,
		0 is stop and 32767 is full speed forward. Depending on the
		acceleration (see :func:`Set Motion`), the motor is not immediately
		brought to the velocity but smoothly accelerated.
		
		The velocity describes the duty cycle of the PWM with which the motor is
		controlled, e.g. a velocity of 3277 sets a PWM with a 10% duty cycle.
		You can not only control the duty cycle of the PWM but also the frequency,
		see :func:`Set PWM Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_VELOCITY, [velocity], 'h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the velocity as set by :func:`Set Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_VELOCITY, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the motor. This value is different
		from :func:`Get Velocity` whenever the motor is currently accelerating
		to a goal set by :func:`Set Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setMotion = function(acceleration, deceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration and deceleration of the motor. It is given in *velocity/s*.
		An acceleration of 10000 means, that every second the velocity is increased
		by 10000 (or about 30% duty cycle).
		
		For example: If the current velocity is 0 and you want to accelerate to a
		velocity of 16000 (about 50% duty cycle) in 10 seconds, you should set
		an acceleration of 1600.
		
		If acceleration and deceleration is set to 0, there is no speed ramping, i.e. a
		new velocity is immediately given to the motor.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_MOTION, [acceleration, deceleration], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMotion = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration/deceleration as set by :func:`Set Motion`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_MOTION, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.fullBrake = function(returnCallback, errorCallback) {
		/*
		Executes an active full brake.
		
		.. warning::
		 This function is for emergency purposes,
		 where an immediate brake is necessary. Depending on the current velocity and
		 the strength of the motor, a full brake can be quite violent.
		
		Call :func:`Set Velocity` with 0 if you just want to stop the motor.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_FULL_BRAKE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setDriveMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the drive mode. Possible modes are:
		
		* 0 = Drive/Brake
		* 1 = Drive/Coast
		
		These modes are different kinds of motor controls.
		
		In Drive/Brake mode, the motor is always either driving or braking. There
		is no freewheeling. Advantages are: A more linear correlation between
		PWM and velocity, more exact accelerations and the possibility to drive
		with slower velocities.
		
		In Drive/Coast mode, the motor is always either driving or freewheeling.
		Advantages are: Less current consumption and less demands on the motor and
		driver chip.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_DRIVE_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDriveMode = function(returnCallback, errorCallback) {
		/*
		Returns the drive mode, as set by :func:`Set Drive Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_DRIVE_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setPWMFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the frequency of the PWM with which the motor is driven.
		Often a high frequency
		is less noisy and the motor runs smoother. However, with a low frequency
		there are less switches and therefore fewer switching losses. Also with
		most motors lower frequencies enable higher torque.
		
		If you have no idea what all this means, just ignore this function and use
		the default frequency, it will very likely work fine.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_PWM_FREQUENCY, [frequency], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPWMFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the PWM frequency as set by :func:`Set PWM Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_PWM_FREQUENCY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getPowerStatistics = function(returnCallback, errorCallback) {
		/*
		Returns input voltage and current usage of the driver.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_POWER_STATISTICS, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setErrorLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Configures the error LED to be either turned off, turned on, blink in
		heartbeat mode or show an error.
		
		If the LED is configured to show errors it has three different states:
		
		* Off: No error present.
		* 1s interval blinking: Input voltage too low (below 6V).
		* 250ms interval blinking: Overtemperature or overcurrent.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_ERROR_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the LED configuration as set by :func:`Set Error LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_ERROR_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setEmergencyShutdownCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enable/Disable :cb:`Emergency Shutdown` callback.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEmergencyShutdownCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Emergency Shutdown Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_EMERGENCY_SHUTDOWN_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setVelocityReachedCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enable/Disable :cb:`Velocity Reached` callback.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_VELOCITY_REACHED_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVelocityReachedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Velocity Reached Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_VELOCITY_REACHED_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setCurrentVelocityCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Current Velocity`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Current Velocity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_CURRENT_VELOCITY_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDCV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletDCV2;
