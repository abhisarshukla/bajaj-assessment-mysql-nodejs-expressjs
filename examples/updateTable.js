let config = {
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'todoapp'
};

let mysql = require('mysql');

let connection = mysql.createConnection(config);

// update statment
let sql = `UPDATE todos
           SET completed = ?
           WHERE id = ?`;

let data = [false, 1];

// execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
  if (error){
    return console.error(error.message);
  }
  console.log('Rows affected:', results.affectedRows);
});

connection.end();
