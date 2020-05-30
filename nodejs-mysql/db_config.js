var mysql = require('mysql');

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    // add database yang telah dibuat
    database:"sholihul"
});
//cek sudah bisa connect apa belum
// db.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");
// });

module.exports = db;