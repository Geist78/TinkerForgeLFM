const { SEGMENT_DISPLAY_UID } = require('../../utilities/constants');

class SegmentDisplay {
  constructor(ipcon) {
    this.ipcon = ipcon;
    this.bricklet = null;
    this.uid = SEGMENT_DISPLAY_UID;
    this.Tinkerforge = require('tinkerforge');

    // Segment-Muster für 0-9 (Bits: A, B, C, D, E, F, G, DP)
    // setSegments erwartet pro Digit ein 8-Boolean-Array [segA, segB, segC, segD, segE, segF, segG, dot]
    //  _
    // |_|  => A=top, B=top-right, C=bot-right, D=bot, E=bot-left, F=top-left, G=middle
    //         idx:  0      1          2          3       4           5          6       7(dot)
    this.digits = [
      [true,  true,  true,  true,  true,  true,  false, false], // 0
      [false, true,  true,  false, false, false, false, false], // 1
      [true,  true,  false, true,  true,  false, true,  false], // 2
      [true,  true,  true,  true,  false, false, true,  false], // 3
      [false, true,  true,  false, false, true,  true,  false], // 4
      [true,  false, true,  true,  false, true,  true,  false], // 5
      [true,  false, true,  true,  true,  true,  true,  false], // 6
      [true,  true,  true,  false, false, false, false, false], // 7
      [true,  true,  true,  true,  true,  true,  true,  false], // 8
      [true,  true,  true,  true,  false, true,  true,  false], // 9
    ];
  }

  async init() {
    this.bricklet = new this.Tinkerforge.BrickletSegmentDisplay4x7V2(this.uid, this.ipcon);
    this.bricklet.setBrightness(7);
    return true;
  }

  // Zeigt Sekunden als "MM:SS" auf dem Display
  showCountdown(seconds) {
    if (!this.bricklet) return;

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const d0 = Math.floor(mins / 10); // Zehnerstelle Minuten
    const d1 = mins % 10;              // Einerstelle Minuten
    const d2 = Math.floor(secs / 10); // Zehnerstelle Sekunden
    const d3 = secs % 10;              // Einerstelle Sekunden

    const digit0 = this.digits[d0];
    const digit1 = this.digits[d1];
    const digit2 = this.digits[d2];
    const digit3 = this.digits[d3];

    // colon = [upper_dot, lower_dot] (die zwei Punkte zwischen Digit 1 und 2)
    const colon = [true, true];
    const tick = false;

    this.bricklet.setSegments(digit0, digit1, digit2, digit3, colon, tick);
  }

  clear() {
    if (!this.bricklet) return;
    const off = [false, false, false, false, false, false, false, false];
    this.bricklet.setSegments(off, off, off, off, [false, false], false);
  }
}

module.exports = SegmentDisplay;
