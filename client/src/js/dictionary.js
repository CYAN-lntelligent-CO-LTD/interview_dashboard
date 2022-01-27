// import './../img/'
import tepimg from './../icon/temperature.png';
import humimg from './../icon/humidity.png';
import pm25img from './../icon/pm2.5.png';
import hchoimg from './../icon/hcho.png';
import co2img from './../icon/co2.png';
import o3img from './../icon/o3.png';
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
var tepObj = new SensorTag(1, 'TEP', tepimg, '℃', 10, 20, 30, 40, 50)
var humObj = new SensorTag(2, 'HUM', humimg, '%', 50, 60, 70, 80, 90)
var pm25Obj = new SensorTag(3, 'PM25', pm25img, 'ug/m³', 35, 53, 58, 71, 100)
var hchoObj = new SensorTag(4, 'HCHO', hchoimg, 'ppm', 0.1, 0.5, 1, 2)
var co2Obj = new SensorTag(5, 'CO2', co2img, 'ppm', 1000, 1200, 1600, 2000, 3000)
var o3Obj = new SensorTag(6, 'O3', o3img, 'ppm', 0.164, 0.204, 0.404, 0.504, 0.604)

export {tepObj, humObj, pm25Obj, hchoObj, co2Obj, o3Obj}