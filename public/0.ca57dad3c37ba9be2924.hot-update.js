self["webpackHotUpdateworkers"](0,[
/* 0 */
/***/ (() => {

// eslint-disable-next-line import/no-anonymous-default-export
const ports = [];
  // eslint-disable-next-line no-restricted-globals
  self.onconnect = function (connect) {
    console.log(connect.ports)
    var port = connect.ports[0];
    ports.push(port);
    let count = 0;

    port.onmessage = (message) => {
      console.log(message);
      count = message.data + 1;
      port.postMessage(message.data + 1);
    };

  };



/***/ })
],
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("069c64c32c5b597c30f1")
/******/ })();
/******/ 
/******/ }
);