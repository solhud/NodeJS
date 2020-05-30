var fs = require('fs');
var http = require('http');

http.createServer(function (request, response){
    // read file use method readFile
    // two parameter (err and data)
    fs.readFile('index.html', (err, data)=>{
    if(err) throw err;
     
    //send response 
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(data);
    response.end();
    });
}).listen(8000);

console.log("server running on http://localhost:8000");