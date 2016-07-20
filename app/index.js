// index.js

var express = require('express');
var app = express();

app.get('/hello', function(request, response) {
  console.log("request to /hello");
  response.send("Hello There!");
});

module.exports = app;
