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

BrickletAccelerometerV2.DEVICE_IDENTIFIER = 2130;
BrickletAccelerometerV2.DEVICE_DISPLAY_NAME = 'Accelerometer Bricklet 2.0';
BrickletAccelerometerV2.CALLBACK_ACCELERATION = 8;
BrickletAccelerometerV2.CALLBACK_CONTINUOUS_ACCELERATION_16_BIT = 11;
BrickletAccelerometerV2.CALLBACK_CONTINUOUS_ACCELERATION_8_BIT = 12;
BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION = 1;
BrickletAccelerometerV2.FUNCTION_SET_CONFIGURATION = 2;
BrickletAccelerometerV2.FUNCTION_GET_CONFIGURATION = 3;
BrickletAccelerometerV2.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION = 4;
BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION = 5;
BrickletAccelerometerV2.FUNCTION_SET_INFO_LED_CONFIG = 6;
BrickletAccelerometerV2.FUNCTION_GET_INFO_LED_CONFIG = 7;
BrickletAccelerometerV2.FUNCTION_SET_CONTINUOUS_ACCELERATION_CONFIGURATION = 9;
BrickletAccelerometerV2.FUNCTION_GET_CONTINUOUS_ACCELERATION_CONFIGURATION = 10;
BrickletAccelerometerV2.FUNCTION_SET_FILTER_CONFIGURATION = 13;
BrickletAccelerometerV2.FUNCTION_GET_FILTER_CONFIGURATION = 14;
BrickletAccelerometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletAccelerometerV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletAccelerometerV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletAccelerometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletAccelerometerV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletAccelerometerV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletAccelerometerV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletAccelerometerV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletAccelerometerV2.FUNCTION_RESET = 243;
BrickletAccelerometerV2.FUNCTION_WRITE_UID = 248;
BrickletAccelerometerV2.FUNCTION_READ_UID = 249;
BrickletAccelerometerV2.FUNCTION_GET_IDENTITY = 255;
BrickletAccelerometerV2.DATA_RATE_0_781HZ = 0;
BrickletAccelerometerV2.DATA_RATE_1_563HZ = 1;
BrickletAccelerometerV2.DATA_RATE_3_125HZ = 2;
BrickletAccelerometerV2.DATA_RATE_6_2512HZ = 3;
BrickletAccelerometerV2.DATA_RATE_12_5HZ = 4;
BrickletAccelerometerV2.DATA_RATE_25HZ = 5;
BrickletAccelerometerV2.DATA_RATE_50HZ = 6;
BrickletAccelerometerV2.DATA_RATE_100HZ = 7;
BrickletAccelerometerV2.DATA_RATE_200HZ = 8;
BrickletAccelerometerV2.DATA_RATE_400HZ = 9;
BrickletAccelerometerV2.DATA_RATE_800HZ = 10;
BrickletAccelerometerV2.DATA_RATE_1600HZ = 11;
BrickletAccelerometerV2.DATA_RATE_3200HZ = 12;
BrickletAccelerometerV2.DATA_RATE_6400HZ = 13;
BrickletAccelerometerV2.DATA_RATE_12800HZ = 14;
BrickletAccelerometerV2.DATA_RATE_25600HZ = 15;
BrickletAccelerometerV2.FULL_SCALE_2G = 0;
BrickletAccelerometerV2.FULL_SCALE_4G = 1;
BrickletAccelerometerV2.FULL_SCALE_8G = 2;
BrickletAccelerometerV2.INFO_LED_CONFIG_OFF = 0;
BrickletAccelerometerV2.INFO_LED_CONFIG_ON = 1;
BrickletAccelerometerV2.INFO_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletAccelerometerV2.RESOLUTION_8BIT = 0;
BrickletAccelerometerV2.RESOLUTION_16BIT = 1;
BrickletAccelerometerV2.IIR_BYPASS_APPLIED = 0;
BrickletAccelerometerV2.IIR_BYPASS_BYPASSED = 1;
BrickletAccelerometerV2.LOW_PASS_FILTER_NINTH = 0;
BrickletAccelerometerV2.LOW_PASS_FILTER_HALF = 1;
BrickletAccelerometerV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletAccelerometerV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletAccelerometerV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletAccelerometerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletAccelerometerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletAccelerometerV2.BOOTLOADER_STATUS_OK = 0;
BrickletAccelerometerV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletAccelerometerV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletAccelerometerV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletAccelerometerV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletAccelerometerV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletAccelerometerV2.STATUS_LED_CONFIG_OFF = 0;
BrickletAccelerometerV2.STATUS_LED_CONFIG_ON = 1;
BrickletAccelerometerV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletAccelerometerV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletAccelerometerV2(uid, ipcon) {
	//Measures acceleration in three axis

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletAccelerometerV2.DEVICE_IDENTIFIER, BrickletAccelerometerV2.DEVICE_DISPLAY_NAME);
	BrickletAccelerometerV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_INFO_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_INFO_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_CONTINUOUS_ACCELERATION_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_CONTINUOUS_ACCELERATION_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_FILTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_FILTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometerV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletAccelerometerV2.CALLBACK_ACCELERATION] = [20, 'i i i'];
	this.callbackFormats[BrickletAccelerometerV2.CALLBACK_CONTINUOUS_ACCELERATION_16_BIT] = [68, 'h30'];
	this.callbackFormats[BrickletAccelerometerV2.CALLBACK_CONTINUOUS_ACCELERATION_8_BIT] = [68, 'b60'];



	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration in x, y and z direction. The values
		are given in gₙ/10000 (1gₙ = 9.80665m/s²). The range is
		configured with :func:`Set Configuration`.
		
		If you want to get the acceleration periodically, it is recommended
		to use the :cb:`Acceleration` callback and set the period with
		:func:`Set Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION, [], '', 20, 'i i i', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(dataRate, fullScale, returnCallback, errorCallback) {
		/*
		Configures the data rate and full scale range.
		Possible values are:
		
		* Data rate of 0.781Hz to 25600Hz.
		* Full scale range of ±2g up to ±8g.
		
		Decreasing data rate or full scale range will also decrease the noise on
		the data.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_CONFIGURATION, [dataRate, fullScale], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setAccelerationCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Acceleration`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		If this callback is enabled, the :cb:`Continuous Acceleration 16 Bit` callback
		and :cb:`Continuous Acceleration 8 Bit` callback will automatically be disabled.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_ACCELERATION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAccelerationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Acceleration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_ACCELERATION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setInfoLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Configures the info LED (marked as "Force" on the Bricklet) to be either turned off,
		turned on, or blink in heartbeat mode.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_INFO_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getInfoLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the LED configuration as set by :func:`Set Info LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_INFO_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setContinuousAccelerationConfiguration = function(enableX, enableY, enableZ, resolution, returnCallback, errorCallback) {
		/*
		For high throughput of acceleration data (> 1000Hz) you have to use the
		:cb:`Continuous Acceleration 16 Bit` or :cb:`Continuous Acceleration 8 Bit`
		callbacks.
		
		You can enable the callback for each axis (x, y, z) individually and choose a
		resolution of 8 bit or 16 bit.
		
		If at least one of the axis is enabled and the resolution is set to 8 bit,
		the :cb:`Continuous Acceleration 8 Bit` callback is activated. If at least
		one of the axis is enabled and the resolution is set to 16 bit,
		the :cb:`Continuous Acceleration 16 Bit` callback is activated.
		
		The returned values are raw ADC data. If you want to put this data into
		a FFT to determine the occurrences of specific frequencies we recommend
		that you use the data as is. It has all of the ADC noise in it. This noise
		looks like pure noise at first glance, but it might still have some frequnecy
		information in it that can be utilized by the FFT.
		
		Otherwise you have to use the following formulas that depend on the configured
		resolution (8/16 bit) and the full scale range (see :func:`Set Configuration`) to calculate
		the data in gₙ/10000 (same unit that is returned by :func:`Get Acceleration`):
		
		* 16 bit, full scale 2g: acceleration = value * 625 / 1024
		* 16 bit, full scale 4g: acceleration = value * 1250 / 1024
		* 16 bit, full scale 8g: acceleration = value * 2500 / 1024
		
		If a resolution of 8 bit is used, only the 8 most significant bits will be
		transferred, so you can use the following formulas:
		
		* 8 bit, full scale 2g: acceleration = value * 256 * 625 / 1024
		* 8 bit, full scale 4g: acceleration = value * 256 * 1250 / 1024
		* 8 bit, full scale 8g: acceleration = value * 256 * 2500 / 1024
		
		If no axis is enabled, both callbacks are disabled. If one of the continuous
		callbacks is enabled, the :cb:`Acceleration` callback is disabled.
		
		The maximum throughput depends on the exact configuration:
		
		.. csv-table::
		 :header: "Number of axis enabled", "Throughput 8 bit", "Throughout 16 bit"
		 :widths: 20, 20, 20
		
		 "1", "25600Hz", "25600Hz"
		 "2", "25600Hz", "15000Hz"
		 "3", "20000Hz", "10000Hz"
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_CONTINUOUS_ACCELERATION_CONFIGURATION, [enableX, enableY, enableZ, resolution], '? ? ? B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getContinuousAccelerationConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the continuous acceleration configuration as set by
		:func:`Set Continuous Acceleration Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_CONTINUOUS_ACCELERATION_CONFIGURATION, [], '', 12, '? ? ? B', returnCallback, errorCallback, false, true);
	};
	this.setFilterConfiguration = function(iirBypass, lowPassFilter, returnCallback, errorCallback) {
		/*
		Configures IIR Bypass filter mode and low pass filter roll off corner frequency.
		
		The filter can be applied or bypassed and the corner frequency can be
		half or a ninth of the output data rate.
		
		.. image:: /Images/Bricklets/bricklet_accelerometer_v2_filter.png
		   :scale: 100 %
		   :alt: Accelerometer filter
		   :align: center
		   :target: ../../_images/Bricklets/bricklet_accelerometer_v2_filter.png
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_FILTER_CONFIGURATION, [iirBypass, lowPassFilter], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFilterConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Filter Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_FILTER_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAccelerometerV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletAccelerometerV2;
