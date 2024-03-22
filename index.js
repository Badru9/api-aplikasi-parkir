const express = require("express");
const cors = require("cors");
const { database } = require("./database/index.js");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.get("/customers", (req, res) => {
  const sql = "SELECT * FROM customers";
  database.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.get("/pegawai", (req, res) => {
  const sql = "SELECT * FROM pegawai";
  database.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.use("/", (req, res) => {
  database.query("SELECT * FROM customers", (err, result) => {
    if (err) {
      console.log(err);
    }

    // res.json({
    //   message: "connected",
    //   data: result,
    // });
    res.json({
      message: "connected",
      data: result,
    });
    console.log(result);
  });
});
