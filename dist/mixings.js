"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixings = mixings;

function mixings(Klass) {
  return target => {
    Object.getOwnPropertyNames(Klass.prototype).forEach(baseClPr => {
      const prDescr = Object.getOwnPropertyDescriptor(Klass.prototype, baseClPr);
      Object.defineProperty(target.prototype, baseClPr, prDescr);
    });
    return target;
  };
}