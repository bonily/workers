const express = require('express');
const  cors = require('cors');
const app = express();

var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:8080'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.use(express.static('public'));



const mockDataOne = [1];
const mockDataTwo = [2];




app.get('/api/one', function (req, res) {
 return res.send(mockDataOne);
});

app.post('/api/one', function (req, res) {
  mockDataOne.push(mockDataOne.length + 1);
  return res.send(mockDataOne);
})

app.get('/api/two', function (req, res) {
 return res.send(mockDataTwo);
});

app.post('/api/two', function (req, res) {
  mockDataTwo.push(mockDataTwo[mockDataTwo.length -1] *2);
  return res.send(mockDataTwo);
})


app.listen(process.env.PORT || 8080);