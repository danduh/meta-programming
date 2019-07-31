"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Car = void 0;

var _flying = _interopRequireWildcard(require("./flying"));

var _restApi = _interopRequireWildcard(require("./rest-api"));

var _mixings = require("./mixings");

var _dec, _class;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log('********* t: @danduh81 *********  \n OUTPUT START\n********* t: @danduh81 ********* \n \n');
let Car = (_dec = (0, _mixings.mixings)(_flying.BaseFlying), _dec(_class = class Car {
  constructor(brand, model, buildYear, color) {
    Object.assign(this, {
      brand,
      model,
      buildYear,
      color
    });
  }

  getBuildYear() {
    return this.buildYear;
  }

}) || _class);
exports.Car = Car;
let myCar = new Car('Nissan', 'X-Trail', 2019, 'black');
myCar.setAltitude(50000).setFlySpeed(400);
console.log(`Altitude is ${myCar.getAltitude()}`);
console.log(`\nYear build ${myCar.getBuildYear()}`);
console.log(myCar);
console.log(' \n \n********* t: @danduh81 *********\nOUTPUT END\n********* t: @danduh81 *********\n');