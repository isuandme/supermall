"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  var instance = _axios["default"].create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    //  http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1
    timeout: 5000
  }); //发送请求前


  instance.interceptors.request.use(function (config) {
    return config;
  }), function (err) {} // console.log(err);
  // 响应数据
  ;
  instance.interceptors.response.use(function (res) {
    return res.data;
  }), function (err) {
    console.log(err);
  };
  return instance(config);
}