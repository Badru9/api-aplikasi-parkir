const mySQL = require("mysql2");

const database = mySQL.createPool({
  // host: "localhost",
  // user: "badru",
  // password: "badru123",
  // database: "aplikasi_parkir",
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
  host: "localhost",
  user: "root",
  password: "",
  database: "aplikasi_parkir",
});

module.exports = database;
