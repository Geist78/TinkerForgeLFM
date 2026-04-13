const { getAllSensorData } = require('./bricks/sensors/_return_sensor_data');

getAllSensorData().then(({ temperature,humidity,motion,nfc,light }) => {
  const temp = temperature.celsius;
  const humi = humidity.relativeHumidity

// TEMP  -------------------------------------------------------------------
  if (temp <= 18) {
      console.log("Display:",temp," COLD (LED BLAU)");
  } else if (temp <= 27) {
      console.log("Display: ",temp," NORMAL (LED GRÜN)");
  } else if (temp <= 30) {
      console.log("Display: ",temp," WARN  (LED GELB)");
  } else if (temp <= 35) {
      console.log("Display: ",temp," HIGH (LED ROT + ALARM)");
  } else {
      console.log("Display: ",temp," CRITICAL (Notfall_E-Mail)");
  }


// HUMIDITY ---------------------------------------------------------------
  if (humi < 30) {
    console.log("GOOD",humi,"%")
  }else if (humi <60){
    console.log("NORMAL",humi,"%")
  }else if(humi < 75){
    console.log("TOO WET",humi,"%")
  }

});