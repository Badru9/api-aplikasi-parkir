// const mySQL = require("mysql2");

<<<<<<< HEAD
// const database = mySQL.createPool({
//   // host: "localhost",
//   // user: "badru",
//   // password: "badru123",
//   // database: "aplikasi_parkir",
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });
=======
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
>>>>>>> da1033935c66293bec5ed2112efc99cb43d6eaea

// module.exports = database;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
