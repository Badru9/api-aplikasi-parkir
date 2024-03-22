const mySQL = require("mysql2");

const database = mySQL.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "aplikasi_parkir",
});

module.exports = { database };
