const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

const server = require("http").createServer(app);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const api = require("./api");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", api);

module.exports = server;
