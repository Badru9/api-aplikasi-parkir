const mySQL = require("mysql2");

const database = mySQL.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "aplikasi_parkir",
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
});

module.exports = database;
