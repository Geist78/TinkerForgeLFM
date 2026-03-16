# TinkerForge LFM Server

A Node.js server for managing TinkerForge IoT devices with sensor data collection and actor control.

## 📁 Project Structure

```
server/
├── config.json                 # Configuration file
├── package.json               # Dependencies
├── server.js                  # Main entry point
├── Api.js                     # Express routes and API
├── bricks/
│   ├── index.js              # BrickManager - device connection handler
│   ├── sensors/
│   │   ├── temperature.js    # PTC Bricklet 2.0
│   │   ├── light.js          # Ambient Light Bricklet 3.0
│   │   ├── humidity.js       # Humidity Bricklet 2.0
│   │   ├── motion.js         # Motion Detector Bricklet 2.0
│   │   └── nfc.js            # NFC Bricklet
│   └── actors/
│       ├── speaker.js        # Piezo Speaker Bricklet 2.0
│       ├── lcd.js            # LCD 128x64 Bricklet
│       ├── button.js         # Dual Button Bricklet 2.0
│       └── display.js        # E-Paper 296x128 Bricklet
└── utilities/
    └── constants.js          # Device UIDs and configuration
```

## 🚀 Getting Started

### Installation

```bash
cd server
npm install
```

### Configuration

Edit `config.json` to set your Master Brick IP and port:

```json
{
  "tinkerforge": {
    "ip": "172.20.10.242",
    "port": 4223
  }
}
```

### Running the Server

**Development mode (with auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Status

- `GET /api/status` - Get overall system status
- `GET /api/health` - Health check

### Sensors

#### Temperature

- `GET /api/sensors/temperature` - Get current temperature

Response:

```json
{
  "sensor": "temperature",
  "value": 25.5,
  "unit": "°C",
  "timestamp": "2026-03-16T10:30:00.000Z"
}
```

#### Light

- `GET /api/sensors/light` - Get current light level

Response:

```json
{
  "sensor": "light",
  "value": 450.25,
  "unit": "lux",
  "timestamp": "2026-03-16T10:30:00.000Z"
}
```

#### Humidity

- `GET /api/sensors/humidity` - Get current humidity

Response:

```json
{
  "sensor": "humidity",
  "value": 65.3,
  "unit": "%RH",
  "timestamp": "2026-03-16T10:30:00.000Z"
}
```

#### Motion

- `GET /api/sensors/motion` - Get motion detection status

Response:

```json
{
  "sensor": "motion",
  "detected": true,
  "timestamp": "2026-03-16T10:30:00.000Z"
}
```

#### NFC

- `GET /api/sensors/nfc` - Get NFC scanner state

Response:

```json
{
  "sensor": "nfc",
  "state": 128,
  "idle": true,
  "timestamp": "2026-03-16T10:30:00.000Z"
}
```

### Actors

#### Speaker

Play a tone:

```bash
POST /api/actors/speaker/tone
Content-Type: application/json

{
  "frequency": 1000,
  "duration": 1000
}
```

Play a beep:

```bash
POST /api/actors/speaker/beep
Content-Type: application/json

{
  "duration": 100
}
```

Play an alarm:

```bash
POST /api/actors/speaker/alarm
```

#### LCD Display

Write text:

```bash
POST /api/actors/lcd/write
Content-Type: application/json

{
  "line": 0,
  "column": 0,
  "text": "Hello World"
}
```

Clear display:

```bash
POST /api/actors/lcd/clear
```

#### Dual Button

Get button state:

```bash
GET /api/actors/button/state
```

Set LED:

```bash
POST /api/actors/button/led
Content-Type: application/json

{
  "button": "left",
  "state": true
}
```

#### E-Paper Display

Draw text:

```bash
POST /api/actors/display/text
Content-Type: application/json

{
  "x": 0,
  "y": 0,
  "font": 0,
  "text": "Hello",
  "color": "black"
}
```

Clear display:

```bash
POST /api/actors/display/clear
```

Update display:

```bash
POST /api/actors/display/update
```

## 🔌 Device UIDs

Update `utilities/constants.js` with your actual device UIDs:

**Sensors:**

- `TEMPERATURE_SENSOR_UID` - PTC Bricklet 2.0
- `LIGHT_SENSOR_UID` - Ambient Light Bricklet 3.0
- `HUMIDITY_SENSOR_UID` - Humidity Bricklet 2.0
- `MOTION_DETECTOR_UID` - Motion Detector Bricklet 2.0
- `NFC_SCANNER_UID` - NFC Bricklet

**Actors:**

- `SPEAKER_UID` - Piezo Speaker Bricklet 2.0
- `LCD_DISPLAY_UID` - LCD 128x64 Bricklet
- `BUTTON_UID` - Dual Button Bricklet 2.0
- `DISPLAY_UID` - E-Paper 296x128 Bricklet

## 📊 Example Usage

```bash
# Get temperature
curl http://localhost:3000/api/sensors/temperature

# Play a beep
curl -X POST http://localhost:3000/api/actors/speaker/beep \
  -H "Content-Type: application/json" \
  -d '{"duration": 500}'

# Write to LCD
curl -X POST http://localhost:3000/api/actors/lcd/write \
  -H "Content-Type: application/json" \
  -d '{"line": 0, "column": 0, "text": "TinkerForge"}'
```

## 🛠️ Development

### Dependencies

- **express** - Web framework
- **tinkerforge** - TinkerForge device communication
- **nodemon** - Auto-reload during development

### Features

✅ Modular sensor classes with event callbacks
✅ Modular actor classes with command sending
✅ Centralized connection management
✅ Graceful shutdown handling
✅ Error handling and logging
✅ RESTful API endpoints
✅ Configuration management
✅ Auto-reconnection support

## 📝 License

MIT
