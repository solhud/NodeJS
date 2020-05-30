var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function (req, res){

    // send form upload
    if(req.url === "/" && req.method ==="GET"){
        fs.readFile("form_upload.html",(err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            if(err) throw err;
            res.end(data);
        });
      }
    // upload file
    if(req.url =='/' && req.method ==="POST"){
        // make object form from formidable
        var form = new formidable.IncomingForm();

        // menangani upload file
        form.parse(req, function(err,fields, files){
            var oldpath = files.filetoupload.path;
            var newpath =__dirname+"/uploads/"+files.filetoupload.name;

            // move file yang telah diupload
            mv(oldpath, newpath, function(err){
                if(err){
                    throw err;
                }
                console.log('file uploaded succesfully...');
                return res.end("file uploaded succesfully...");
            });
        });
    }
}).listen(8000);

console.log("server listening on http://localhost:8000");