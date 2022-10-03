"use strict";

var express = require("express");

var path = require("path");

var logger = require("morgan");

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express["static"](path.join(__dirname, 'src')));
app.use(logger("tiny"));
app.get("/", function (req, res) {
  res.render('index');
});
module.exports = app;