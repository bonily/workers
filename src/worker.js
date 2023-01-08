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

