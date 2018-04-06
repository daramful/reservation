const express = require("express");
const http = require("http");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");
var mongo = require("mongodb");

const hostname = "127.0.0.1";

var port = 3000;
var app = express();

const srcPath = __dirname + "/public/sass";
const destPath = __dirname + "/public/styles";

//setup database
var MongoClient = mongo.MongoClient;
var MongoURL = "mongodb://" + hostname + ":27017/data";

MongoClient.connect(MongoURL, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("");
  db.close();
});

app.use(
  sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: "extended",
    prefix: "/styles" // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  })
);

//start server
app.use(express.static(__dirname + "/public"));
app.listen(port, hostname);

console.log("Server listening on port " + port);
console.log("srcPath is " + srcPath);
console.log("destPath is " + destPath);
