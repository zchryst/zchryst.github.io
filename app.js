
const request = require('request');
const express = require('express');
const path = require('path'); // helps me build paths
var engine = require('ejs-mate');
var app = express();

// where are the templates?
app.set('views', path.join(__dirname, 'views'));
// what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// use a middleware - midlewares are like functions
// static asset
app.use( express.static(path.join(__dirname, 'public')) );
app.use(logger);

function logger(req, res, next) {
  console.log('%s request %s from %s', req.method, req.path, req.ip);
  console.log(`${req.method} request ${req.path} from ${req.ip}`);
  next();
};


app.get('/', function(req, res) {
  request('http://www.omdbapi.com/?t=' + req.query.title, function (error, omdbResponse, body) {
    body = JSON.parse(body);
    res.render('home', {movie: body});
  });
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/test', function(req, res) {
  res.render('test_home');
});



module.exports = app;
