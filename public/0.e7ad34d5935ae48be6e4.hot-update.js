self["webpackHotUpdateworkers"](0,[
/* 0 */
/***/ (() => {

// eslint-disable-next-line import/no-anonymous-default-export

const ports = [];
let count = 0;
  // eslint-disable-next-line no-restricted-globals
  self.onconnect = function (connect) {
    
    var port = connect.ports[0];
    ports.push(port);
    port.postMessage({count});




    port.onmessage = (message) => {
      count = count + 1;
      ports.forEach((p) => {
        p.postMessage({count})
      });

        ports.filter((p) => p !== port).forEach((p) => {
          p.postMessage({name: message.data.name})})
    };

  };



/***/ })
],
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a0c89a90531c4976a8f")
/******/ })();
/******/ 
/******/ }
);