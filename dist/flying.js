"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseFlying = exports.default = void 0;

var _class;

const Flying = target => {
  class FlyingWrapperClass extends target {
    constructor() {
      super(...arguments);
    }

    setAltitude(height) {
      this.altitude = height;
      return this;
    }

    setFlySpeed(speed) {
      this.flySpeed = speed;
      return this;
    }

    getAltitude() {
      return this.altitude;
    }

  }

  Object.defineProperty(FlyingWrapperClass, 'name', {
    writable: true,
    value: target.name
  });
  Object.defineProperty(FlyingWrapperClass, 'name', {
    writable: false
  });
  return FlyingWrapperClass;
};

var _default = Flying;
exports.default = _default;

let BaseFlying = Flying(_class = class BaseFlying {}) || _class;

exports.BaseFlying = BaseFlying;