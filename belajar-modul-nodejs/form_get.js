var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req,res){
    var q = url.parse(req.url, true);

    if(q.pathname == "/search" && req.method =="GET"){

        // take parameter from URL
        var keywoard = q.query.keywoard;

        if(keywoard){
            // take from form by method GET
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("<h3> Search Result :</h3>");
            res.write("<p> Anda mencari :<b>"+keywoard+"</b></p>");
            res.write("<pre>Tidak ada hasil, maaf website masih dalam pengembangan</pre>");
            res.end("<a href='/search/'>Kembali</a>");
        }else{
            // show from search
            fs.readFile('search.html', (err,data)=>{
                if(err){ //send reply error
                    res.writeHead(404, {'Content-Type':'text/html'});
                    return res.end("404 not found");
                }
                // send form search.html
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            });

        }
    }

}).listen(8000);

console.log('server is running on http:/localhost:8000');


// for run
// http://localhost:8000/search/