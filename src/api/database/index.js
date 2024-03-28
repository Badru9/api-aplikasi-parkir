const mySQL = require("mysql2");

const database = mySQL.createPool({
  host: "localhost",
  user: "badru",
  password: "123",
  database: "aplikasi_parkir",
});

module.exports = database;
