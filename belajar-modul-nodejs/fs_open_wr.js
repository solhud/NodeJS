var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function(err,file){
    if(err) throw err;

    // content will we write to file
    let content = "hello selamat malam";

    // write content to file
    fs.writeFile(file, content, (err)=>{
        if(err) throw err;
        console.log('Saved....');
    });
    // read file
    fs.readFile(file, (err,data)=>{
        if(err) throw err;
        console.log(data.toString('utf8'));
    });
});