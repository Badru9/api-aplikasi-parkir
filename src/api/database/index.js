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

// module.exports = database;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
