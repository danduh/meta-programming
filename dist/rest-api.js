"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRestAPI = exports.default = void 0;

var _dec, _class;

const RestAPI = function (url) {
  return target => {
    class RestAPI extends target {
      constructor() {
        super(...arguments);
        this.baseUrl = url ? url : 'http://';
      }

      get() {
        console.log('will use', this.baseUrl);
      }

      getById() {
        console.log('will use', `${this.baseUrl}/${id}`);
      }

      create() {
        console.log('will use', `${this.baseUrl}/${id}`);
      }

      save() {
        console.log('->> will send data to', `${this.baseUrl}`);
      }

    }

    ;
    Object.defineProperty(RestAPI, 'name', {
      writable: true,
      value: target.name
    });
    Object.defineProperty(RestAPI, 'name', {
      writable: false
    });
    return RestAPI;
  };
};

var _default = RestAPI;
exports.default = _default;
let BaseRestAPI = (_dec = RestAPI(), _dec(_class = class BaseRestAPI {
  setBaseUrl(url) {
    this.baseUrl = url;
    return this;
  }

}) || _class);
exports.BaseRestAPI = BaseRestAPI;