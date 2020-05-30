var fs = require('fs');

// old name, new name 
fs.rename('mynewfile3.txt', 'mynew.txt', function(err){
    if(err) throw err;
    console.log('file renamed');
});