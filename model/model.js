const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dogged8000",
  database: "dogged",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("there was no error");
  }
});

module.exports = {
  db,
};
