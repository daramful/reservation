const http = require('http');
const hostname = '127.0.0.1';
var port = 3000;

const express = require("express");
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();

const srcPath = __dirname + '/public/sass';
const destPath =  __dirname + '/public/styles';

app.use(sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'extended',
  prefix: '/styles'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/> 
}));

app.use(express.static(__dirname + "/public"));
app.listen(port, hostname);


console.log('Server listening on port ' + port);
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);