// run server
// change package.json
// ->"server":"node index.js"
var http = require('http');

http.createServer(function (req, res){
    res.end("hello ");

}).listen(8080);

console.log("server running on http://localhost:8080");