/*
-- sql stored procedure
DELIMITER $$

CREATE PROCEDURE `filterTodo`(IN done BOOLEAN)
BEGIN
    SELECT * FROM todos WHERE completed = done;
END$$

DELIMITER ;
*/

let config = {
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'todoapp'
};

let mysql = require('mysql');

let connection = mysql.createConnection(config);

let sql = `CALL filterTodo(?)`;

connection.query(sql, true, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
});

connection.end();
