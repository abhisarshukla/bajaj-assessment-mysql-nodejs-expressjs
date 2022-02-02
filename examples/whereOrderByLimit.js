const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql1234",
  database: "new_schema",
});

connection.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM student WHERE marks > 30 LIMIT 10 ORDER BY marks desc";
    connection.query(sql, function(err,result){
        if (err) throw err;
        console.log(result);
    });
});