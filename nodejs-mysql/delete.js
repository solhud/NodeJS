var db = require("./db_config");

db.connect(function(err){
    if(err) throw err;

    // we will delete nasi padang
    let sql =`DELETE FROM customers WHERE id = 1`;

    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Number of records delete: "+result.affectedRows);
    });
});