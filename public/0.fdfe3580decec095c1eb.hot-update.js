self["webpackHotUpdateworkers"](0,[
/* 0 */
/***/ (() => {

// eslint-disable-next-line import/no-anonymous-default-export

  // eslint-disable-next-line no-restricted-globals
  self.onconnect = function (connect) {
    var port = connect.ports[0];
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
/******/ 	__webpack_require__.h = () => ("14b975e235413e1c492b")
/******/ })();
/******/ 
/******/ }
);