const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + "/static"));
app.listen(port, hostname);