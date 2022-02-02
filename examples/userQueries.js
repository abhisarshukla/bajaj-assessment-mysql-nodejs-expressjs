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

readline.question(`Enter a SQL Query: `, (input) => {
  executeQuery(input);
  readline.close();
});

function executeQuery(query) {
  connection.connect(function (err) {
    if (err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      console.log("Query successful!");
      // console.log(fields);
      console.log(result);
    });
  });
}
