var fs = require('fs');

// create a file named mynewfile1.txt
fs.appendFile('mynewfile.txt','Hello semangat', function(err){
    if(err) throw err;
    console.log('saved');
})
// if run 2x then write 2x