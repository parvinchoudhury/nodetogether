//server.js

var port = process.env.PORT || "8000";
const host = process.env.HOST || "0.0.0.0";
var express = require('express');

var app = express();

var rules = require('./app/index.js');
app.use(rules);

app.listen(port, host);

console.log("it works");
