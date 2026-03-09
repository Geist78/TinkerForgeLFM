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

BrickletEPaper296x128.DEVICE_IDENTIFIER = 2146;
BrickletEPaper296x128.DEVICE_DISPLAY_NAME = 'E-Paper 296x128 Bricklet';
BrickletEPaper296x128.CALLBACK_DRAW_STATUS = 11;
BrickletEPaper296x128.FUNCTION_DRAW = 1;
BrickletEPaper296x128.FUNCTION_GET_DRAW_STATUS = 2;
BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL = 3;
BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL = 4;
BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL = 5;
BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL = 6;
BrickletEPaper296x128.FUNCTION_FILL_DISPLAY = 7;
BrickletEPaper296x128.FUNCTION_DRAW_TEXT = 8;
BrickletEPaper296x128.FUNCTION_DRAW_LINE = 9;
BrickletEPaper296x128.FUNCTION_DRAW_BOX = 10;
BrickletEPaper296x128.FUNCTION_SET_UPDATE_MODE = 12;
BrickletEPaper296x128.FUNCTION_GET_UPDATE_MODE = 13;
BrickletEPaper296x128.FUNCTION_SET_DISPLAY_TYPE = 14;
BrickletEPaper296x128.FUNCTION_GET_DISPLAY_TYPE = 15;
BrickletEPaper296x128.FUNCTION_SET_DISPLAY_DRIVER = 16;
BrickletEPaper296x128.FUNCTION_GET_DISPLAY_DRIVER = 17;
BrickletEPaper296x128.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletEPaper296x128.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletEPaper296x128.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletEPaper296x128.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletEPaper296x128.FUNCTION_WRITE_FIRMWARE = 238;
BrickletEPaper296x128.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletEPaper296x128.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletEPaper296x128.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletEPaper296x128.FUNCTION_RESET = 243;
BrickletEPaper296x128.FUNCTION_WRITE_UID = 248;
BrickletEPaper296x128.FUNCTION_READ_UID = 249;
BrickletEPaper296x128.FUNCTION_GET_IDENTITY = 255;
BrickletEPaper296x128.DRAW_STATUS_IDLE = 0;
BrickletEPaper296x128.DRAW_STATUS_COPYING = 1;
BrickletEPaper296x128.DRAW_STATUS_DRAWING = 2;
BrickletEPaper296x128.COLOR_BLACK = 0;
BrickletEPaper296x128.COLOR_WHITE = 1;
BrickletEPaper296x128.COLOR_RED = 2;
BrickletEPaper296x128.COLOR_GRAY = 2;
BrickletEPaper296x128.FONT_6X8 = 0;
BrickletEPaper296x128.FONT_6X16 = 1;
BrickletEPaper296x128.FONT_6X24 = 2;
BrickletEPaper296x128.FONT_6X32 = 3;
BrickletEPaper296x128.FONT_12X16 = 4;
BrickletEPaper296x128.FONT_12X24 = 5;
BrickletEPaper296x128.FONT_12X32 = 6;
BrickletEPaper296x128.FONT_18X24 = 7;
BrickletEPaper296x128.FONT_18X32 = 8;
BrickletEPaper296x128.FONT_24X32 = 9;
BrickletEPaper296x128.ORIENTATION_HORIZONTAL = 0;
BrickletEPaper296x128.ORIENTATION_VERTICAL = 1;
BrickletEPaper296x128.UPDATE_MODE_DEFAULT = 0;
BrickletEPaper296x128.UPDATE_MODE_BLACK_WHITE = 1;
BrickletEPaper296x128.UPDATE_MODE_DELTA = 2;
BrickletEPaper296x128.DISPLAY_TYPE_BLACK_WHITE_RED = 0;
BrickletEPaper296x128.DISPLAY_TYPE_BLACK_WHITE_GRAY = 1;
BrickletEPaper296x128.DISPLAY_DRIVER_SSD1675A = 0;
BrickletEPaper296x128.DISPLAY_DRIVER_SSD1680 = 1;
BrickletEPaper296x128.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletEPaper296x128.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletEPaper296x128.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletEPaper296x128.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletEPaper296x128.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletEPaper296x128.BOOTLOADER_STATUS_OK = 0;
BrickletEPaper296x128.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletEPaper296x128.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletEPaper296x128.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletEPaper296x128.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletEPaper296x128.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletEPaper296x128.STATUS_LED_CONFIG_OFF = 0;
BrickletEPaper296x128.STATUS_LED_CONFIG_ON = 1;
BrickletEPaper296x128.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletEPaper296x128.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletEPaper296x128(uid, ipcon) {
	//Three color 296x128 e-paper display

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletEPaper296x128.DEVICE_IDENTIFIER, BrickletEPaper296x128.DEVICE_DISPLAY_NAME);
	BrickletEPaper296x128.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletEPaper296x128.FUNCTION_DRAW] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_DRAW_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_FILL_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_DRAW_TEXT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_DRAW_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_DRAW_BOX] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_UPDATE_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_UPDATE_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_DISPLAY_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_DISPLAY_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_DISPLAY_DRIVER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_DISPLAY_DRIVER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletEPaper296x128.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletEPaper296x128.CALLBACK_DRAW_STATUS] = [9, 'B'];


	this.streamStateObjects[BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, null, null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H B H B H H ?432',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H B H B',
			'unpackFormatString': 'H H ?464',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, null, null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H B H B H H ?432',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H B H B',
			'unpackFormatString': 'H H ?464',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.draw = function(returnCallback, errorCallback) {
		/*
		Draws the current black/white and red or gray buffer to the e-paper display.
		
		The Bricklet does not have any double-buffering. You should not call
		this function while writing to the buffer. See :func:`Get Draw Status`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_DRAW, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDrawStatus = function(returnCallback, errorCallback) {
		/*
		Returns one of three draw statuses:
		
		* Idle
		* Copying: Data is being copied from the buffer of the Bricklet to the buffer of the display.
		* Drawing: The display is updating its content (during this phase the flickering etc happens).
		
		You can write to the buffer (through one of the write or draw functions) when the status is
		either *idle* or *drawing*. You should not write to the buffer while it is being *copied* to the
		display. There is no double-buffering.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_DRAW_STATUS, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.writeBlackWhiteLowLevel = function(xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData, returnCallback, errorCallback) {
		/*
		Writes black/white pixels to the specified window into the buffer.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The value 0 (false) corresponds to a black pixel and the value 1 (true) to a
		white pixel.
		
		This function writes the pixels into the black/white pixel buffer, to draw the
		buffer to the display use :func:`Draw`.
		
		Use :func:`Write Color` to write red or gray pixels.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL, [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData], 'H B H B H H ?432', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readBlackWhiteLowLevel = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Returns the current content of the black/white pixel buffer for the specified window.
		
		The pixels are read into the window line by line top to bottom and
		each line is read from left to right.
		
		The current content of the buffer does not have to be the current content of the display.
		It is possible that the data was not drawn to the display yet and after a restart of
		the Bricklet the buffer will be reset to black, while the display retains its content.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', returnCallback, errorCallback, false, true);
	};
	this.writeColorLowLevel = function(xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData, returnCallback, errorCallback) {
		/*
		The E-Paper 296x128 Bricklet is available with the colors black/white/red and
		black/white/gray. Depending on the model this function writes either red or
		gray pixels to the specified window into the buffer.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The value 0 (false) means that this pixel does not have color. It will be either black
		or white (see :func:`Write Black White`). The value 1 (true) corresponds to a red or gray
		pixel, depending on the Bricklet model.
		
		This function writes the pixels into the red or gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		
		Use :func:`Write Black White` to write black/white pixels.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL, [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData], 'H B H B H H ?432', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readColorLowLevel = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Returns the current content of the red or gray pixel buffer for the specified window.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The current content of the buffer does not have to be the current content of the display.
		It is possible that the data was not drawn to the display yet and after a restart of
		the Bricklet the buffer will be reset to black, while the display retains its content.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', returnCallback, errorCallback, false, true);
	};
	this.fillDisplay = function(color, returnCallback, errorCallback) {
		/*
		Fills the complete content of the display with the given color.
		
		This function writes the pixels into the black/white/red|gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_FILL_DISPLAY, [color], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.drawText = function(positionX, positionY, font, color, orientation, text, returnCallback, errorCallback) {
		/*
		Draws a text with up to 50 characters at the pixel position (x, y).
		
		You can use one of 9 different font sizes and draw the text in
		black/white/red|gray. The text can be drawn horizontal or vertical.
		
		This function writes the pixels into the black/white/red|gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		
		The font conforms to code page 437.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_DRAW_TEXT, [positionX, positionY, font, color, orientation, text], 'H B B B B s50', 0, '', returnCallback, errorCallback, false, true);
	};
	this.drawLine = function(positionXStart, positionYStart, positionXEnd, positionYEnd, color, returnCallback, errorCallback) {
		/*
		Draws a line from (x, y)-start to (x, y)-end in the given color.
		
		This function writes the pixels into the black/white/red|gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_DRAW_LINE, [positionXStart, positionYStart, positionXEnd, positionYEnd, color], 'H B H B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.drawBox = function(positionXStart, positionYStart, positionXEnd, positionYEnd, fill, color, returnCallback, errorCallback) {
		/*
		Draws a box from (x, y)-start to (x, y)-end in the given color.
		
		If you set fill to true, the box will be filled with the
		color. Otherwise only the outline will be drawn.
		
		This function writes the pixels into the black/white/red|gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_DRAW_BOX, [positionXStart, positionYStart, positionXEnd, positionYEnd, fill, color], 'H B H B ? B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setUpdateMode = function(updateMode, returnCallback, errorCallback) {
		/*
		.. note::
		 The default update mode corresponds to the default e-paper display
		 manufacturer settings. All of the other modes are experimental and
		 will result in increased ghosting and possibly other long-term
		 side effects.
		
		 If you want to know more about the inner workings of an e-paper display
		 take a look at this excellent video from Ben Krasnow:
		 `https://www.youtube.com/watch?v=MsbiO8EAsGw <https://www.youtube.com/watch?v=MsbiO8EAsGw>`__.
		
		 If you are not sure about this option, leave the update mode at default.
		
		Currently there are three update modes available:
		
		* Default: Settings as given by the manufacturer. An update will take about
		  7.5 seconds and during the update the screen will flicker several times.
		* Black/White: This will only update the black/white pixel. It uses the manufacturer
		  settings for black/white and ignores the red or gray pixel buffer. With this mode the
		  display will flicker once and it takes about 2.5 seconds. Compared to the default settings
		  there is more ghosting.
		* Delta: This will only update the black/white pixel. It uses an aggressive method where
		  the changes are not applied for a whole buffer but only for the delta between the last
		  and the next buffer. With this mode the display will not flicker during an update and
		  it takes about 900-950ms. Compared to the other two settings there is more ghosting. This
		  mode can be used for something like a flicker-free live update of a text.
		
		With the black/white/red display if you use either the black/white or the delta mode,
		after a while of going back and forth between black and white the white color will
		start to appear red-ish or pink-ish.
		
		If you use the aggressive delta mode and rapidly change the content, we recommend that you
		change back to the default mode every few hours and in the default mode cycle between the
		three available colors a few times. This will get rid of the ghosting and after that you can
		go back to the delta mode with flicker-free updates.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_UPDATE_MODE, [updateMode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getUpdateMode = function(returnCallback, errorCallback) {
		/*
		Returns the update mode as set by :func:`Set Update Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_UPDATE_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setDisplayType = function(displayType, returnCallback, errorCallback) {
		/*
		Sets the type of the display. The e-paper display is available
		in black/white/red and black/white/gray. This will be factory set
		during the flashing and testing phase. The value is saved in
		non-volatile memory and will stay after a power cycle.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_DISPLAY_TYPE, [displayType], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDisplayType = function(returnCallback, errorCallback) {
		/*
		Returns the type of the e-paper display. It can either be
		black/white/red or black/white/gray.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_DISPLAY_TYPE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setDisplayDriver = function(displayDriver, returnCallback, errorCallback) {
		/*
		Sets the type of display driver. The Bricklet can currently support
		SSD1675A and SSD1680. This will be factory set
		during the flashing and testing phase. The value is saved in
		non-volatile memory and will stay after a power cycle.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_DISPLAY_DRIVER, [displayDriver], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDisplayDriver = function(returnCallback, errorCallback) {
		/*
		Returns the e-paper display driver.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_DISPLAY_DRIVER, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletEPaper296x128.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.writeBlackWhite = function(xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback) {
		/*
		Writes black/white pixels to the specified window into the buffer.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The value 0 (false) corresponds to a black pixel and the value 1 (true) to a
		white pixel.
		
		This function writes the pixels into the black/white pixel buffer, to draw the
		buffer to the display use :func:`Draw`.
		
		Use :func:`Write Color` to write red or gray pixels.
		*/

		var pixelsLength = 0;
		var pixelsChunkData = [];
		var pixelsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[3];

		if (pixels.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(3)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				pixelsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				pixelsLength = pixels.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 432, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'H B H B H H ?432',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (pixelsChunkOffset < pixels.length) {
					pixelsChunkData =
						this.ipcon.createChunkData(pixels, pixelsChunkOffset, 432, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL,
					                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
					                       'H B H B H H ?432',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					pixelsChunkOffset += 432;
				}
			}

			if (returnCallback) {
				returnCallback();
			}
		}
		else {
			var responseHandler = null;
			var functionToQueue = null;

			if (streamStateObject['responseProperties']['responseHandler'] === null) {
				responseHandler = function (device, fid, packetResponse) {
					var result = [];
					var payload = null;
					var llvalues = null;
					var packetErrorFlag = 0;
					var shortWriteWritten = -1;
					var streamStateObject = device.streamStateObjects[fid];
					var responseEmpty = streamStateObject['responseProperties']['streamInResponseEmpty'];
					var pixelsLength = 0;
					var pixelsChunkData = [];
					var pixelsChunkOffset = 0;

					function doNextLLCall() {
						pixelsLength = streamStateObject['responseProperties']['data'].length;
						pixelsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						pixelsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H B H B H H ?432',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 432;
					}

					function handleStreamInDone() {
						if (streamStateObject['responseProperties']['returnCB']) {
							if (streamStateObject['streamProperties']['shortWrite']) {
								for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
									if (streamStateObject['dataMapping'][i].endsWith('Written')) {
										result[i] = streamStateObject['responseProperties']['streamInWritten'];
										break;
									}
								}
							}

							if (!responseEmpty) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}
							else {
								streamStateObject['responseProperties']['returnCB'].apply(device);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (!streamStateObject) {
						return;
					}

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (responseEmpty) {
						if (streamStateObject['streamProperties']['singleChunk']) {
							handleStreamInDone();

							return;
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
					else {
						payload = device.ipcon.getPayloadFromPacket(packetResponse);
						llvalues = device.ipcon.unpack(payload,
						                               streamStateObject['responseProperties']['unpackFormatString']);

						if (!payload || !llvalues) {
							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							result.push(llvalues[i]);
						}

						if (streamStateObject['streamProperties']['singleChunk']) {
							if (streamStateObject['responseProperties']['returnCB']) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}

							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						if (streamStateObject['streamProperties']['shortWrite']) {
							for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
								if (streamStateObject['dataMapping'][i].endsWith('Written')) {
									shortWriteWritten = llvalues[i];
									streamStateObject['responseProperties']['streamInWritten'] += shortWriteWritten;
									break;
								}
							}
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 432)) {
								// Either last chunk or short write
								handleStreamInDone();
								return;
							}
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
				};

				streamStateObject['responseProperties']['responseHandler'] = responseHandler;
			}

			if (!streamStateObject['responseProperties']['running']) {
				streamStateObject['responseProperties']['running'] = true;
				streamStateObject['responseProperties']['returnCB'] = returnCallback;
				streamStateObject['responseProperties']['errorCB'] = errorCallback;
				streamStateObject['responseProperties']['data'].length = 0;
				streamStateObject['responseProperties']['data'].push.apply(streamStateObject['responseProperties']['data'],
				                                                           pixels);

				if (streamStateObject['streamProperties']['fixedLength']) {
					pixelsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					pixelsLength = pixels.length;
				}

				pixelsChunkOffset = 0;
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 432, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 432;
				streamStateObject['responseProperties']['streamInChunkLength'] = 432;
				streamStateObject['responseProperties']['streamInLLParams'] = [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletEPaper296x128.FUNCTION_WRITE_BLACK_WHITE_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'H B H B H H ?432',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writeBlackWhite.call(device, xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readBlackWhite = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Returns the current content of the black/white pixel buffer for the specified window.
		
		The pixels are read into the window line by line top to bottom and
		each line is read from left to right.
		
		The current content of the buffer does not have to be the current content of the display.
		It is possible that the data was not drawn to the display yet and after a restart of
		the Bricklet the buffer will be reset to black, while the display retains its content.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[4];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var pixelsLength = null;
					var pixelsChunkData = null;
					var pixelsOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var pixelsChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							pixelsChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							pixelsChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							pixelsLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((pixelsChunkOffset + 464) < pixelsLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;
						pixelsOutOfSync = (pixelsChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = pixelsChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!pixelsOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < pixelsLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							pixelsOutOfSync =
								(pixelsChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!pixelsOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < pixelsLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(pixelsChunkData);

									if (streamStateObject['responseProperties']['data'].length >= pixelsLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, pixelsLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (pixelsOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, pixelsLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
					
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletEPaper296x128.FUNCTION_READ_BLACK_WHITE_LOW_LEVEL,
			                       [xStart, yStart, xEnd, yEnd],
			                       'H B H B',
			                       70,
			                       'H H ?464',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readBlackWhite.call(device, xStart, yStart, xEnd, yEnd, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
	this.writeColor = function(xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback) {
		/*
		The E-Paper 296x128 Bricklet is available with the colors black/white/red and
		black/white/gray. Depending on the model this function writes either red or
		gray pixels to the specified window into the buffer.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The value 0 (false) means that this pixel does not have color. It will be either black
		or white (see :func:`Write Black White`). The value 1 (true) corresponds to a red or gray
		pixel, depending on the Bricklet model.
		
		This function writes the pixels into the red or gray pixel buffer, to draw the buffer
		to the display use :func:`Draw`.
		
		Use :func:`Write Black White` to write black/white pixels.
		*/

		var pixelsLength = 0;
		var pixelsChunkData = [];
		var pixelsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[5];

		if (pixels.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(5)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				pixelsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				pixelsLength = pixels.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 432, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'H B H B H H ?432',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (pixelsChunkOffset < pixels.length) {
					pixelsChunkData =
						this.ipcon.createChunkData(pixels, pixelsChunkOffset, 432, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL,
					                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
					                       'H B H B H H ?432',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					pixelsChunkOffset += 432;
				}
			}

			if (returnCallback) {
				returnCallback();
			}
		}
		else {
			var responseHandler = null;
			var functionToQueue = null;

			if (streamStateObject['responseProperties']['responseHandler'] === null) {
				responseHandler = function (device, fid, packetResponse) {
					var result = [];
					var payload = null;
					var llvalues = null;
					var packetErrorFlag = 0;
					var shortWriteWritten = -1;
					var streamStateObject = device.streamStateObjects[fid];
					var responseEmpty = streamStateObject['responseProperties']['streamInResponseEmpty'];
					var pixelsLength = 0;
					var pixelsChunkData = [];
					var pixelsChunkOffset = 0;

					function doNextLLCall() {
						pixelsLength = streamStateObject['responseProperties']['data'].length;
						pixelsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						pixelsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H B H B H H ?432',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 432;
					}

					function handleStreamInDone() {
						if (streamStateObject['responseProperties']['returnCB']) {
							if (streamStateObject['streamProperties']['shortWrite']) {
								for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
									if (streamStateObject['dataMapping'][i].endsWith('Written')) {
										result[i] = streamStateObject['responseProperties']['streamInWritten'];
										break;
									}
								}
							}

							if (!responseEmpty) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}
							else {
								streamStateObject['responseProperties']['returnCB'].apply(device);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (!streamStateObject) {
						return;
					}

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (responseEmpty) {
						if (streamStateObject['streamProperties']['singleChunk']) {
							handleStreamInDone();

							return;
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
					else {
						payload = device.ipcon.getPayloadFromPacket(packetResponse);
						llvalues = device.ipcon.unpack(payload,
						                               streamStateObject['responseProperties']['unpackFormatString']);

						if (!payload || !llvalues) {
							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							result.push(llvalues[i]);
						}

						if (streamStateObject['streamProperties']['singleChunk']) {
							if (streamStateObject['responseProperties']['returnCB']) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}

							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						if (streamStateObject['streamProperties']['shortWrite']) {
							for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
								if (streamStateObject['dataMapping'][i].endsWith('Written')) {
									shortWriteWritten = llvalues[i];
									streamStateObject['responseProperties']['streamInWritten'] += shortWriteWritten;
									break;
								}
							}
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 432)) {
								// Either last chunk or short write
								handleStreamInDone();
								return;
							}
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
				};

				streamStateObject['responseProperties']['responseHandler'] = responseHandler;
			}

			if (!streamStateObject['responseProperties']['running']) {
				streamStateObject['responseProperties']['running'] = true;
				streamStateObject['responseProperties']['returnCB'] = returnCallback;
				streamStateObject['responseProperties']['errorCB'] = errorCallback;
				streamStateObject['responseProperties']['data'].length = 0;
				streamStateObject['responseProperties']['data'].push.apply(streamStateObject['responseProperties']['data'],
				                                                           pixels);

				if (streamStateObject['streamProperties']['fixedLength']) {
					pixelsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					pixelsLength = pixels.length;
				}

				pixelsChunkOffset = 0;
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 432, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 432;
				streamStateObject['responseProperties']['streamInChunkLength'] = 432;
				streamStateObject['responseProperties']['streamInLLParams'] = [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletEPaper296x128.FUNCTION_WRITE_COLOR_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'H B H B H H ?432',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writeColor.call(device, xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readColor = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Returns the current content of the red or gray pixel buffer for the specified window.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		The current content of the buffer does not have to be the current content of the display.
		It is possible that the data was not drawn to the display yet and after a restart of
		the Bricklet the buffer will be reset to black, while the display retains its content.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[6];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var pixelsLength = null;
					var pixelsChunkData = null;
					var pixelsOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var pixelsChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							pixelsChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							pixelsChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							pixelsLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((pixelsChunkOffset + 464) < pixelsLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;
						pixelsOutOfSync = (pixelsChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = pixelsChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!pixelsOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < pixelsLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							pixelsOutOfSync =
								(pixelsChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!pixelsOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < pixelsLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(pixelsChunkData);

									if (streamStateObject['responseProperties']['data'].length >= pixelsLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, pixelsLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'H B H B', 70, 'H H ?464', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (pixelsOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, pixelsLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
					
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletEPaper296x128.FUNCTION_READ_COLOR_LOW_LEVEL,
			                       [xStart, yStart, xEnd, yEnd],
			                       'H B H B',
			                       70,
			                       'H H ?464',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readColor.call(device, xStart, yStart, xEnd, yEnd, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletEPaper296x128;
