self["webpackHotUpdateworkers"](0,[
/* 0 */
/***/ (() => {

// eslint-disable-next-line import/no-anonymous-default-export
const ports = [];
let count = 0;
  // eslint-disable-next-line no-restricted-globals
  self.onconnect = function (connect) {
    console.log(connect.ports)
    var port = connect.ports[0];
    ports.push(port);
    port.postMessage(count);


    port.onmessage = (message) => {
      console.log(message);
      count = message.data + 1;
      ports.forEach((p) => {
        p.postMessage(message.data + 1);
      })

    };

  };



/***/ })
],
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c839f7100330812f7fd")
/******/ })();
/******/ 
/******/ }
);