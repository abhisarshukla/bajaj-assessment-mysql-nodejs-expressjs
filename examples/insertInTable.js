let config = {
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'todoapp'
};

let mysql  = require('mysql');
let connection = mysql.createConnection(config);

// insert statment
let sql = `INSERT INTO todos(title,completed)
           VALUES('Learn how to insert a new row',true)`;

// execute the insert statment
connection.query(sql);

connection.end();
