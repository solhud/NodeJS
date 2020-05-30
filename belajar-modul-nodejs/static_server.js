var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, res){
    var q = url.parse(request.url, true);
    var filename = "."+q.pathname;

    // read file
    fs.readFile(filename, function(err,data){
        // send an error reply 
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 not found");
        }
        // send reply with content file statis
        res.writeHead(200, {'Conrtent-Type':'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8000);
console.log('server running on http://localhost:8000');