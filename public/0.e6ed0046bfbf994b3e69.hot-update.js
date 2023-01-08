"use strict";
self["webpackHotUpdateworkers"](0,[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  self.onconnect = function (connect) {
    var port = connect.ports[0];
    let count = 0;

    port.onmessage = (message) => {
      console.log(message);
      count = message.data + 1;
      port.postMessage(message.data + 1);
    };

  };
});


/***/ })
],
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3516605a89f9714459a7")
/******/ })();
/******/ 
/******/ }
);