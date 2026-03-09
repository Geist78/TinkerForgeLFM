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

BrickDC.DEVICE_IDENTIFIER = 11;
BrickDC.DEVICE_DISPLAY_NAME = 'DC Brick';
BrickDC.CALLBACK_UNDER_VOLTAGE = 21;
BrickDC.CALLBACK_EMERGENCY_SHUTDOWN = 22;
BrickDC.CALLBACK_VELOCITY_REACHED = 23;
BrickDC.CALLBACK_CURRENT_VELOCITY = 24;
BrickDC.FUNCTION_SET_VELOCITY = 1;
BrickDC.FUNCTION_GET_VELOCITY = 2;
BrickDC.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickDC.FUNCTION_SET_ACCELERATION = 4;
BrickDC.FUNCTION_GET_ACCELERATION = 5;
BrickDC.FUNCTION_SET_PWM_FREQUENCY = 6;
BrickDC.FUNCTION_GET_PWM_FREQUENCY = 7;
BrickDC.FUNCTION_FULL_BRAKE = 8;
BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE = 9;
BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 10;
BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION = 11;
BrickDC.FUNCTION_ENABLE = 12;
BrickDC.FUNCTION_DISABLE = 13;
BrickDC.FUNCTION_IS_ENABLED = 14;
BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE = 15;
BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE = 16;
BrickDC.FUNCTION_SET_DRIVE_MODE = 17;
BrickDC.FUNCTION_GET_DRIVE_MODE = 18;
BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD = 19;
BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD = 20;
BrickDC.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG = 231;
BrickDC.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG = 232;
BrickDC.FUNCTION_GET_SEND_TIMEOUT_COUNT = 233;
BrickDC.FUNCTION_SET_SPITFP_BAUDRATE = 234;
BrickDC.FUNCTION_GET_SPITFP_BAUDRATE = 235;
BrickDC.FUNCTION_GET_SPITFP_ERROR_COUNT = 237;
BrickDC.FUNCTION_ENABLE_STATUS_LED = 238;
BrickDC.FUNCTION_DISABLE_STATUS_LED = 239;
BrickDC.FUNCTION_IS_STATUS_LED_ENABLED = 240;
BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickDC.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickDC.FUNCTION_RESET = 243;
BrickDC.FUNCTION_WRITE_BRICKLET_PLUGIN = 246;
BrickDC.FUNCTION_READ_BRICKLET_PLUGIN = 247;
BrickDC.FUNCTION_GET_IDENTITY = 255;
BrickDC.DRIVE_MODE_DRIVE_BRAKE = 0;
BrickDC.DRIVE_MODE_DRIVE_COAST = 1;
BrickDC.COMMUNICATION_METHOD_NONE = 0;
BrickDC.COMMUNICATION_METHOD_USB = 1;
BrickDC.COMMUNICATION_METHOD_SPI_STACK = 2;
BrickDC.COMMUNICATION_METHOD_CHIBI = 3;
BrickDC.COMMUNICATION_METHOD_RS485 = 4;
BrickDC.COMMUNICATION_METHOD_WIFI = 5;
BrickDC.COMMUNICATION_METHOD_ETHERNET = 6;
BrickDC.COMMUNICATION_METHOD_WIFI_V2 = 7;

function BrickDC(uid, ipcon) {
	//Drives one brushed DC motor with up to 28V and 5A (peak)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickDC.DEVICE_IDENTIFIER, BrickDC.DEVICE_DISPLAY_NAME);
	BrickDC.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 3];
	this.responseExpected[BrickDC.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_ACCELERATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_PWM_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_DRIVE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_SEND_TIMEOUT_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_SET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_GET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_ENABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_DISABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_IS_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_WRITE_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickDC.FUNCTION_READ_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickDC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickDC.CALLBACK_UNDER_VOLTAGE] = [10, 'H'];
	this.callbackFormats[BrickDC.CALLBACK_EMERGENCY_SHUTDOWN] = [8, ''];
	this.callbackFormats[BrickDC.CALLBACK_VELOCITY_REACHED] = [10, 'h'];
	this.callbackFormats[BrickDC.CALLBACK_CURRENT_VELOCITY] = [10, 'h'];



	this.setVelocity = function(velocity, returnCallback, errorCallback) {
		/*
		Sets the velocity of the motor. Whereas -32767 is full speed backward,
		0 is stop and 32767 is full speed forward. Depending on the
		acceleration (see :func:`Set Acceleration`), the motor is not immediately
		brought to the velocity but smoothly accelerated.
		
		The velocity describes the duty cycle of the PWM with which the motor is
		controlled, e.g. a velocity of 3277 sets a PWM with a 10% duty cycle.
		You can not only control the duty cycle of the PWM but also the frequency,
		see :func:`Set PWM Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_VELOCITY, [velocity], 'h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the velocity as set by :func:`Set Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_VELOCITY, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the motor. This value is different
		from :func:`Get Velocity` whenever the motor is currently accelerating
		to a goal set by :func:`Set Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_VELOCITY, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setAcceleration = function(acceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration of the motor. It is given in *velocity/s*. An
		acceleration of 10000 means, that every second the velocity is increased
		by 10000 (or about 30% duty cycle).
		
		For example: If the current velocity is 0 and you want to accelerate to a
		velocity of 16000 (about 50% duty cycle) in 10 seconds, you should set
		an acceleration of 1600.
		
		If acceleration is set to 0, there is no speed ramping, i.e. a new velocity
		is immediately given to the motor.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_ACCELERATION, [acceleration], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration as set by :func:`Set Acceleration`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_ACCELERATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_PWM_FREQUENCY, [frequency], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPWMFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the PWM frequency as set by :func:`Set PWM Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_PWM_FREQUENCY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_FULL_BRAKE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStackInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack input voltage. The stack input voltage is the
		voltage that is supplied via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getExternalInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage. The external input voltage is
		given via the black power input connector on the DC Brick.
		
		If there is an external input voltage and a stack input voltage, the motor
		will be driven by the external input voltage. If there is only a stack
		voltage present, the motor will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motor will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getCurrentConsumption = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of the motor.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_CONSUMPTION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.enable = function(returnCallback, errorCallback) {
		/*
		Enables the driver chip. The driver parameters can be configured (velocity,
		acceleration, etc) before it is enabled.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_ENABLE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disable = function(returnCallback, errorCallback) {
		/*
		Disables the driver chip. The configurations are kept (velocity,
		acceleration, etc) but the motor is not driven until it is enabled again.
		
		.. warning::
		 Disabling the driver chip while the motor is still turning can damage the
		 driver chip. The motor should be stopped calling :func:`Set Velocity` with 0
		 before disabling the motor power. The :func:`Set Velocity` function will **not**
		 wait until the motor is actually stopped. You have to explicitly wait for the
		 appropriate time after calling the :func:`Set Velocity` function before calling
		 the :func:`Disable` function.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_DISABLE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the driver chip is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_IS_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage, below which the :cb:`Under Voltage` callback
		is triggered. The minimum possible value that works with the DC Brick is 6V.
		You can use this function to detect the discharge of a battery that is used
		to drive the motor. If you have a fixed power supply, you likely do not need
		this functionality.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`Set Minimum Voltage`
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_DRIVE_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDriveMode = function(returnCallback, errorCallback) {
		/*
		Returns the drive mode, as set by :func:`Set Drive Mode`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_DRIVE_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setCurrentVelocityPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets a period with which the :cb:`Current Velocity` callback is triggered.
		A period of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_CURRENT_VELOCITY_PERIOD, [period], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocityPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Current Velocity Period`.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CURRENT_VELOCITY_PERIOD, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		
		.. versionadded:: 2.3.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG, [enableDynamicBaudrate, minimumDynamicBaudrate], '? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrateConfig = function(returnCallback, errorCallback) {
		/*
		Returns the baudrate config, see :func:`Set SPITFP Baudrate Config`.
		
		.. versionadded:: 2.3.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG, [], '', 13, '? I', returnCallback, errorCallback, false, true);
	};
	this.getSendTimeoutCount = function(communicationMethod, returnCallback, errorCallback) {
		/*
		Returns the timeout count for the different communication methods.
		
		The methods 0-2 are available for all Bricks, 3-7 only for Master Bricks.
		
		This function is mostly used for debugging during development, in normal operation
		the counters should nearly always stay at 0.
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_SEND_TIMEOUT_COUNT, [communicationMethod], 'B', 12, 'I', returnCallback, errorCallback, false, true);
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
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_SET_SPITFP_BAUDRATE, [brickletPort, baudrate], 'c I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrate = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the baudrate for a given Bricklet port, see :func:`Set SPITFP Baudrate`.
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_SPITFP_BAUDRATE, [brickletPort], 'c', 12, 'I', returnCallback, errorCallback, false, true);
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
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_SPITFP_ERROR_COUNT, [brickletPort], 'c', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.enableStatusLED = function(returnCallback, errorCallback) {
		/*
		Enables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_ENABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableStatusLED = function(returnCallback, errorCallback) {
		/*
		Disables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_DISABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isStatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the status LED is enabled, *false* otherwise.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_IS_STATUS_LED_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 52, 'B B3 s40', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of ±15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeBrickletPlugin = function(port, offset, chunk, returnCallback, errorCallback) {
		/*
		Writes 32 bytes of firmware to the bricklet attached at the given port.
		The bytes are written to the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_WRITE_BRICKLET_PLUGIN, [port, offset, chunk], 'c B B32', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readBrickletPlugin = function(port, offset, returnCallback, errorCallback) {
		/*
		Reads 32 bytes of firmware from the bricklet attached at the given port.
		The bytes are read starting at the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_READ_BRICKLET_PLUGIN, [port, offset], 'c B', 40, 'B32', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickDC.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickDC;
