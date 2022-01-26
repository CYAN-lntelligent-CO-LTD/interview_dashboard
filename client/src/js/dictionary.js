class SensorTag {
    constructor(id, name, display, unit, value1, value2, value3, value4, value5) {
        this.id = id;
        this.name = name;
        this.display = display;
        this.unit = unit;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    }
}

var tepObj = new SensorTag(1, 'TEP', './src/icon/temperature.png', '℃', 10, 20, 30, 40, 50)
var humObj = new SensorTag(2, 'HUM', './src/icon/humidity.png', '%', 50, 60, 70, 80, 90)
var pm25Obj = new SensorTag(3, 'PM25', './src/icon/pm2.5.png', 'ug/m³', 35, 53, 58, 71, 100)
var hchoObj = new SensorTag(4, 'HCHO', './src/icon/hcho.png', 'ppm', 0.1, 0.5, 1, 2)
var co2Obj = new SensorTag(5, 'CO2', './src/icon/co2.png', 'ppm', 1000, 1200, 1600, 2000, 3000)
var o3Obj = new SensorTag(6, 'O3', './src/icon/o3.png', 'ppm', 0.164, 0.204, 0.404, 0.504, 0.604)