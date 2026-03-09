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

BrickletCO2V2.DEVICE_IDENTIFIER = 2147;
BrickletCO2V2.DEVICE_DISPLAY_NAME = 'CO2 Bricklet 2.0';
BrickletCO2V2.CALLBACK_ALL_VALUES = 8;
BrickletCO2V2.CALLBACK_CO2_CONCENTRATION = 12;
BrickletCO2V2.CALLBACK_TEMPERATURE = 16;
BrickletCO2V2.CALLBACK_HUMIDITY = 20;
BrickletCO2V2.FUNCTION_GET_ALL_VALUES = 1;
BrickletCO2V2.FUNCTION_SET_AIR_PRESSURE = 2;
BrickletCO2V2.FUNCTION_GET_AIR_PRESSURE = 3;
BrickletCO2V2.FUNCTION_SET_TEMPERATURE_OFFSET = 4;
BrickletCO2V2.FUNCTION_GET_TEMPERATURE_OFFSET = 5;
BrickletCO2V2.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION = 6;
BrickletCO2V2.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION = 7;
BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION = 9;
BrickletCO2V2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION = 10;
BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION = 11;
BrickletCO2V2.FUNCTION_GET_TEMPERATURE = 13;
BrickletCO2V2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 14;
BrickletCO2V2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 15;
BrickletCO2V2.FUNCTION_GET_HUMIDITY = 17;
BrickletCO2V2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION = 18;
BrickletCO2V2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION = 19;
BrickletCO2V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletCO2V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletCO2V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletCO2V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletCO2V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletCO2V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletCO2V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletCO2V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletCO2V2.FUNCTION_RESET = 243;
BrickletCO2V2.FUNCTION_WRITE_UID = 248;
BrickletCO2V2.FUNCTION_READ_UID = 249;
BrickletCO2V2.FUNCTION_GET_IDENTITY = 255;
BrickletCO2V2.THRESHOLD_OPTION_OFF = 'x';
BrickletCO2V2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCO2V2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCO2V2.THRESHOLD_OPTION_SMALLER = '<';
BrickletCO2V2.THRESHOLD_OPTION_GREATER = '>';
BrickletCO2V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletCO2V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletCO2V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletCO2V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletCO2V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletCO2V2.BOOTLOADER_STATUS_OK = 0;
BrickletCO2V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletCO2V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletCO2V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletCO2V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletCO2V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletCO2V2.STATUS_LED_CONFIG_OFF = 0;
BrickletCO2V2.STATUS_LED_CONFIG_ON = 1;
BrickletCO2V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletCO2V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletCO2V2(uid, ipcon) {
	//Measures CO2 concentration, temperature and humidity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletCO2V2.DEVICE_IDENTIFIER, BrickletCO2V2.DEVICE_DISPLAY_NAME);
	BrickletCO2V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_ALL_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_TEMPERATURE_OFFSET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_TEMPERATURE_OFFSET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCO2V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCO2V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCO2V2.CALLBACK_ALL_VALUES] = [14, 'H h H'];
	this.callbackFormats[BrickletCO2V2.CALLBACK_CO2_CONCENTRATION] = [10, 'H'];
	this.callbackFormats[BrickletCO2V2.CALLBACK_TEMPERATURE] = [10, 'h'];
	this.callbackFormats[BrickletCO2V2.CALLBACK_HUMIDITY] = [10, 'H'];



	this.getAllValues = function(returnCallback, errorCallback) {
		/*
		Returns all values measured by the CO2 Bricklet 2.0.
		
		If you want to get the values periodically, it is recommended to use the
		:cb:`All Values` callback. You can set the callback configuration
		with :func:`Set All Values Callback Configuration`.
		
		.. note::
		 The sensor is able to messure up to 120 °C. However it is only specified up to 70 °C.
		 Exposing the Bricklet to higher temperatures might result in permanent damage.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_ALL_VALUES, [], '', 14, 'H h H', returnCallback, errorCallback, false, true);
	};
	this.setAirPressure = function(airPressure, returnCallback, errorCallback) {
		/*
		The CO2 concentration depends (among other things) on the ambient air pressure.
		
		To increase the accuracy of the CO2 Bricklet 2.0 you can set the current air pressure.
		You use the :ref:`Barometer Bricklet 2.0 <barometer_v2_bricklet>` or the
		:ref:`Air Quality Bricklet <air_quality_bricklet>` to get the current air pressure.
		
		By default air pressure compensation is disabled. Once you set a value it
		will be used for compensation. You can turn the compensation off again by
		setting the value to 0.
		
		It is sufficient to update the value every few minutes.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_AIR_PRESSURE, [airPressure], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns the ambient air pressure as set by :func:`Set Air Pressure`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_AIR_PRESSURE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureOffset = function(offset, returnCallback, errorCallback) {
		/*
		Sets a temperature offset. A offset of 10 will decrease
		the measured temperature by 0.1 °C.
		
		If you install this Bricklet into an enclosure and you want to measure the ambient
		temperature, you may have to decrease the measured temperature by some value to
		compensate for the error because of the heating inside of the enclosure.
		
		We recommend that you leave the parts in the enclosure running for at least
		24 hours such that a temperature equilibrium can be reached. After that you can measure
		the temperature directly outside of enclosure and set the difference as offset.
		
		This temperature offset is used to calculate the relative humidity and
		CO2 concentration. In case the Bricklet is installed in an enclosure, we
		recommend to measure and set the temperature offset to improve the accuracy of
		the measurements.
		
		It is sufficient to set the temperature offset once. The offset is saved in
		non-volatile memory and is applied again after a power loss.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_TEMPERATURE_OFFSET, [offset], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureOffset = function(returnCallback, errorCallback) {
		/*
		Returns the temperature offset as set by
		:func:`Set Temperature Offset`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_TEMPERATURE_OFFSET, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setAllValuesCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Values`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after at least one of the values has changed. If the values didn't
		change within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllValuesCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Values Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getCO2Concentration = function(returnCallback, errorCallback) {
		/*
		Returns CO2 concentration.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`CO2 Concentration` callback. You can set the callback configuration
		with :func:`Set CO2 Concentration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setCO2ConcentrationCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`CO2 Concentration` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`CO2 Concentration` callback.
		
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCO2ConcentrationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set CO2 Concentration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_CO2_CONCENTRATION_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns temperature.
		
		.. note::
		 The sensor is able to messure up to 120 °C. However it is only specified up to 70 °C.
		 Exposing the Bricklet to higher temperatures might result in permanent damage.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Temperature` callback.
		
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c h h', returnCallback, errorCallback, false, true);
	};
	this.getHumidity = function(returnCallback, errorCallback) {
		/*
		Returns relative humidity.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Humidity` callback. You can set the callback configuration
		with :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_HUMIDITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setHumidityCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Humidity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Humidity` callback.
		
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHumidityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCO2V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletCO2V2;
