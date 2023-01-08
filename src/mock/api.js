

function fetchDataOne() {
  return new Promise((resolve) => {
      fetch('http://localhost:8080/api/one').then((res) => {
        return res.json();
      }).then((data) => {
        resolve(data);
      })
  });
}

function addItemToDataOne() {
  return new Promise((resolve) => {

      fetch('http://localhost:8080/api/one', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'dataOne'})
      }).then((res) => {
        return res.json();
      }).then((data) => {
        resolve(data);
      })
  });
}

function fetchDataTwo() {
  return new Promise((resolve) => {
      fetch('http://localhost:8080/api/two').then((res) => {
        return res.json();
      }).then((data) => {
        resolve(data);
      })
  });
}

function addItemToDataTwo() {
  return new Promise((resolve) => {

      fetch('http://localhost:8080/api/two', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'dataTwo'})
      }).then((res) => {
        return res.json();
      }).then((data) => {
        resolve(data);
      })
  });
}

module.exports = {
  fetchDataOne,
  fetchDataTwo,
  addItemToDataOne,
  addItemToDataTwo
}