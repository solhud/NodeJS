var http = require('http');
var qs = require('querystring');
var fs = require('fs');

http.createServer(function (req, res){

    if(req.url === "/login/" && req.method ==="GET"){
        // show form login
        fs.readFile("login_form.html", (err, data)=>{
            if(err){ //send reply error
                res.writeHead(404, {'Content-Type':'text/html'});
                return res.end("404 not found");
            }
            // send from login_form.html
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }

    if(req.url ==="/login/" && req.method === "POST"){
        // take data from and process
        var requestBody='';
        req.on('data', function(data){
            // capture data from form
            requestBody += data;

            // send reply if data too large
            if(requestBody.length > 1e7){
                res.writeHead(413, 'Request Entity Too Large',{'Content-Type':'text/html'});
                res.end('<!doctype html><html><head><title>413</title></head><body>413:Request entity too large</body></html>');
            }
        });
        // we can already data
        //next step parse
        req.on('end', function(){
            var formData = qs.parse(requestBody);

            // cek login
            if(formData.username === "sholihul" && formData.password ==="kopi"){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('<h2>Selamat datang.....</h2>');
                res.write('<p>username:'+formData.username+'</p>');
                res.write('<p>password:'+formData.password+'</p>');
                res.write("<a href='/login/'>Kembali</a>");
                res.end();

            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('<h2>Login gagal</h2>');
                res.write("<a href='/login/'>Coba lagi</a>");
            }
        });

    }
}).listen(8000);

console.log('Server is running on http://localhost:8000');


