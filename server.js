// import limbrary http from node modules
var http = require('http');

// make object server
var server = http.createServer(function (req,res){
    // response if acces by client
    res.end("selamat datang....");
});
// the port used
server.listen(8000);

console.log("port running on http://localhost:8000");