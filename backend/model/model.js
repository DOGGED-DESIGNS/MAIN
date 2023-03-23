const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "dogged8000",
  database: "doggedblog",
});

module.exports = {
  db,
};
