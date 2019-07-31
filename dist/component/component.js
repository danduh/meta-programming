"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Component = conf => {
  return async function (clazz) {
    var elem = document.createElement(conf.selector);
    elem.addEventListener('click', function (e) {
      alert('Thanks!');
    });
    const tmpl = await fetch('app-hero-component.component.html').then(str => str.text());
    Object.getOwnPropertyNames(clazz.prototype).forEach(baseClPr => {
      console.log(baseClPr);
    });
    debugger;
    elem.innerHTML = tmpl;
    document.body.appendChild(elem);
  };
};

var _default = Component;
exports.default = _default;