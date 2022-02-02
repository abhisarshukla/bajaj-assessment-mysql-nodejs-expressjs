const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql1234",
  database: "new_schema",
});

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter name of a student to find in database: `, (input) => {
  executeQuery(input);
  readline.close();
});

function executeQuery(name) {
  connection.connect(function (err) {
    if (err) throw err;
    connection.query("Select * from student where name = ?",[name], function (err, result, fields) {
      if (err) throw err;
      if(result.length > 0) {
        console.log(`Student with name: ${name} found!`);
        console.log(result);
      } else {
        console.log(`Not found: student with name: ${name}.`);
      }
    });
  });
}