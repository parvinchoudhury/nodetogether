// index.js

var Express = require('Express');
var app = Express();

app.get('/hello', function(request, response) {
  console.log("request to /hello");
  response.send("Hello There!");
});

module.exports = app;
