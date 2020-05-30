var http = require('http');

http.createServer(function (req,res){
    // determine response header
    res.writeHead(200, {'Content-Type':'text/html'});
    // write response body
    res.write('helllo world..');
    // end response
    res.end();
// port
}).listen(8000);

console.log("server running on http://localhost:8000");

