var fs = require('fs');

// flag w kasihtau fs.open  make or write new file
// there is many flag
fs.open('mynewfile2.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved.....');
});