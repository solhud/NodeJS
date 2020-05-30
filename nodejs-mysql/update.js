var db = require("./db_config");

db.connect(function(err){
    if(err) throw err;

    // we will update addres nasi padang
    let sql = `UPDATE customers
                SET address='Pogung'
                WHERE id = 1`;

    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Number of record inserted.."+result.affectedRows);
    });
});