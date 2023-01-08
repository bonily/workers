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
    port.postMessage({count});


    port.onmessage = (message) => {
      console.log(message);
      count = count + 1;
      ports.forEach((p) => {
        p.postMessage({count, name: message.data.name})});

    };

  };



/***/ })
],
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60f4cf91ab0655452f4a")
/******/ })();
/******/ 
/******/ }
);