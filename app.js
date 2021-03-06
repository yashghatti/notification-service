console.log("=> Starting notification service...");

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var slack = require('./routes/slack');
var actuator = require('express-actuator');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/slack', slack);
app.use(actuator());

module.exports = app;
