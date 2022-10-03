const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("tiny"))

app.get("/", (req, res) => {res.render('index');});
app.get('/cube', (req, res) => {res.render('cube');})
app.get('/SpaceRace', (req, res) => {res.render('SpaceRace');})
app.get('/visualizer', (req, res) => {res.render('visualizer');})
app.get('/trivia', (req, res) => {res.render('trivia');})
app.get('/pokemon', (req, res) => {res.render('pokemon');})

app.get('/music', (req, res) => {
  const fs = require('fs'); 
  res.render('music', {
    filenames: fs.readdirSync('public/music')
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {next(createError(404));});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
