const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require("express");
// var fs = require('fs');
var app = express();
app.use(express.static(__dirname + "/static"));
app.listen(port, hostname);