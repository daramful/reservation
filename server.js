/*
const http = require('http');
const hostname = '127.0.0.1';
var port = process.env.PORT || 3000;
var fs = require('fs');


var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/public/sass';
var destPath = __dirname + '/public/styles';


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
*/

var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/public/sass';
var destPath = __dirname + '/public/styles';

var serveStatic = require('serve-static')
var http = require('http');
var port = process.env.PORT || 8000;
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
http.createServer(app).listen(port);
console.log('Server listening on port ' + port);
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);
