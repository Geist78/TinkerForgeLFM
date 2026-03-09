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

BrickletLaserRangeFinderV2.DEVICE_IDENTIFIER = 2144;
BrickletLaserRangeFinderV2.DEVICE_DISPLAY_NAME = 'Laser Range Finder Bricklet 2.0';
BrickletLaserRangeFinderV2.CALLBACK_DISTANCE = 4;
BrickletLaserRangeFinderV2.CALLBACK_VELOCITY = 8;
BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE = 1;
BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_CALLBACK_CONFIGURATION = 2;
BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_CALLBACK_CONFIGURATION = 3;
BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY = 5;
BrickletLaserRangeFinderV2.FUNCTION_SET_VELOCITY_CALLBACK_CONFIGURATION = 6;
BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY_CALLBACK_CONFIGURATION = 7;
BrickletLaserRangeFinderV2.FUNCTION_SET_ENABLE = 9;
BrickletLaserRangeFinderV2.FUNCTION_GET_ENABLE = 10;
BrickletLaserRangeFinderV2.FUNCTION_SET_CONFIGURATION = 11;
BrickletLaserRangeFinderV2.FUNCTION_GET_CONFIGURATION = 12;
BrickletLaserRangeFinderV2.FUNCTION_SET_MOVING_AVERAGE = 13;
BrickletLaserRangeFinderV2.FUNCTION_GET_MOVING_AVERAGE = 14;
BrickletLaserRangeFinderV2.FUNCTION_SET_OFFSET_CALIBRATION = 15;
BrickletLaserRangeFinderV2.FUNCTION_GET_OFFSET_CALIBRATION = 16;
BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_LED_CONFIG = 17;
BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_LED_CONFIG = 18;
BrickletLaserRangeFinderV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletLaserRangeFinderV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletLaserRangeFinderV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletLaserRangeFinderV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletLaserRangeFinderV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletLaserRangeFinderV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletLaserRangeFinderV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletLaserRangeFinderV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletLaserRangeFinderV2.FUNCTION_RESET = 243;
BrickletLaserRangeFinderV2.FUNCTION_WRITE_UID = 248;
BrickletLaserRangeFinderV2.FUNCTION_READ_UID = 249;
BrickletLaserRangeFinderV2.FUNCTION_GET_IDENTITY = 255;
BrickletLaserRangeFinderV2.THRESHOLD_OPTION_OFF = 'x';
BrickletLaserRangeFinderV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLaserRangeFinderV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLaserRangeFinderV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletLaserRangeFinderV2.THRESHOLD_OPTION_GREATER = '>';
BrickletLaserRangeFinderV2.DISTANCE_LED_CONFIG_OFF = 0;
BrickletLaserRangeFinderV2.DISTANCE_LED_CONFIG_ON = 1;
BrickletLaserRangeFinderV2.DISTANCE_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletLaserRangeFinderV2.DISTANCE_LED_CONFIG_SHOW_DISTANCE = 3;
BrickletLaserRangeFinderV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletLaserRangeFinderV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletLaserRangeFinderV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletLaserRangeFinderV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletLaserRangeFinderV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_OK = 0;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletLaserRangeFinderV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletLaserRangeFinderV2.STATUS_LED_CONFIG_OFF = 0;
BrickletLaserRangeFinderV2.STATUS_LED_CONFIG_ON = 1;
BrickletLaserRangeFinderV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletLaserRangeFinderV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletLaserRangeFinderV2(uid, ipcon) {
	//Measures distance up to 40m with laser light

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletLaserRangeFinderV2.DEVICE_IDENTIFIER, BrickletLaserRangeFinderV2.DEVICE_DISPLAY_NAME);
	BrickletLaserRangeFinderV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_ENABLE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_OFFSET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_OFFSET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinderV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLaserRangeFinderV2.CALLBACK_DISTANCE] = [10, 'h'];
	this.callbackFormats[BrickletLaserRangeFinderV2.CALLBACK_VELOCITY] = [10, 'h'];



	this.getDistance = function(returnCallback, errorCallback) {
		/*
		Returns the measured distance.
		
		The laser has to be enabled, see :func:`Set Enable`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Distance` callback. You can set the callback configuration
		with :func:`Set Distance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setDistanceCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Distance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Distance` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDistanceCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Distance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c h h', returnCallback, errorCallback, false, true);
	};
	this.getVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the measured velocity. The value has a range of -12800 to 12700
		and is given in 1/100 m/s.
		
		The velocity measurement only produces stables results if a fixed
		measurement rate (see :func:`Set Configuration`) is configured. Also the laser
		has to be enabled, see :func:`Set Enable`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Velocity` callback. You can set the callback configuration
		with :func:`Set Velocity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setVelocityCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Velocity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Velocity` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_VELOCITY_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVelocityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Velocity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_VELOCITY_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c h h', returnCallback, errorCallback, false, true);
	};
	this.setEnable = function(enable, returnCallback, errorCallback) {
		/*
		Enables the laser of the LIDAR if set to *true*.
		
		We recommend that you wait 250ms after enabling the laser before
		the first call of :func:`Get Distance` to ensure stable measurements.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_ENABLE, [enable], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnable = function(returnCallback, errorCallback) {
		/*
		Returns the value as set by :func:`Set Enable`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_ENABLE, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(acquisitionCount, enableQuickTermination, thresholdValue, measurementFrequency, returnCallback, errorCallback) {
		/*
		The **Acquisition Count** defines the number of times the Laser Range Finder Bricklet
		will integrate acquisitions to find a correlation record peak. With a higher count,
		the Bricklet can measure longer distances. With a lower count, the rate increases. The
		allowed values are 1-255.
		
		If you set **Enable Quick Termination** to true, the distance measurement will be terminated
		early if a high peak was already detected. This means that a higher measurement rate can be achieved
		and long distances can be measured at the same time. However, the chance of false-positive
		distance measurements increases.
		
		Normally the distance is calculated with a detection algorithm that uses peak value,
		signal strength and noise. You can however also define a fixed **Threshold Value**.
		Set this to a low value if you want to measure the distance to something that has
		very little reflection (e.g. glass) and set it to a high value if you want to measure
		the distance to something with a very high reflection (e.g. mirror). Set this to 0 to
		use the default algorithm. The other allowed values are 1-255.
		
		Set the **Measurement Frequency** to force a fixed measurement rate. If set to 0,
		the Laser Range Finder Bricklet will use the optimal frequency according to the other
		configurations and the actual measured distance. Since the rate is not fixed in this case,
		the velocity measurement is not stable. For a stable velocity measurement you should
		set a fixed measurement frequency. The lower the frequency, the higher is the resolution
		of the calculated velocity. The allowed values are 10Hz-500Hz (and 0 to turn the fixed
		frequency off).
		
		The default values for Acquisition Count, Enable Quick Termination, Threshold Value and
		Measurement Frequency are 128, false, 0 and 0.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_CONFIGURATION, [acquisitionCount, enableQuickTermination, thresholdValue, measurementFrequency], 'B ? B H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_CONFIGURATION, [], '', 13, 'B ? B H', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverage = function(distanceAverageLength, velocityAverageLength, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the distance and velocity.
		
		Setting the length to 0 will turn the averaging completely off. With less
		averaging, there is more noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_MOVING_AVERAGE, [distanceAverageLength, velocityAverageLength], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_MOVING_AVERAGE, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setOffsetCalibration = function(offset, returnCallback, errorCallback) {
		/*
		The offset is added to the measured distance.
		It is saved in non-volatile memory, you only have to set it once.
		
		The Bricklet comes with a per-sensor factory-calibrated offset value,
		you should not have to call this function.
		
		If you want to re-calibrate the offset you first have to set it to 0.
		Calculate the offset by measuring the distance to a known distance
		and set it again.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_OFFSET_CALIBRATION, [offset], 'h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOffsetCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the offset value as set by :func:`Set Offset Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_OFFSET_CALIBRATION, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setDistanceLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Configures the distance LED to be either turned off, turned on, blink in
		heartbeat mode or show the distance (brighter = object is nearer).
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_DISTANCE_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDistanceLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the LED configuration as set by :func:`Set Distance LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_DISTANCE_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLaserRangeFinderV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletLaserRangeFinderV2;
