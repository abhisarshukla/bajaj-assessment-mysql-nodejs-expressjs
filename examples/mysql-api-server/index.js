const express = require("express");
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql1234',
  database: 'new_schema',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

const app = express();
const port = 3000;

app.use(express.text());

app.get("/students", async (_req, res) => {
  const result = await executeQuery("SELECT * FROM Student;");
  res.send(JSON.stringify(result));
});

app.get("/student/:id", async (req, res) => {
  let response = ''
  try {
    response = await executeQuery(`SELECT * FROM Student WHERE id = ${req.params.id};`);
    res.send(JSON.stringify(response));
  }
  catch(err) {
    res.status(500).send({error: "Something went wrong with the query!"});
  }
});

app.get("/student/branch/:branch", async (req, res) => {
  let response = ''
  try {
    response = await executeQuery(`SELECT * FROM Student WHERE branch = '${req.params.branch}';`);
    res.send(JSON.stringify(response));
  }
  catch(err) {
    console.log(err);
    res.status(500).send({error: "Something went wrong with the query!"});
  }
});

app.get("/", async (req, res) => {
  const result = await executeQuery(req.body);
  res.send(JSON.stringify(result));
})

async function executeQuery(query) {
  const [rows, _fields] = await connection.execute(query);
  return rows;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
