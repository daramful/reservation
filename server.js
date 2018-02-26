const http = require('http');
const hostname = '127.0.0.1';
var port = process.env.PORT || 8000;
const express = require("express");

var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/public/sass';
var destPath = __dirname + '/public/styles';

var serveStatic = require('serve-static')
var app = connect();
app.use('/styles', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));
app.use('/',
  serveStatic('./public', {})
);

var app = express();
app.use(express.static(__dirname + "/static"));
app.listen(port, hostname);