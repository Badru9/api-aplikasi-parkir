const express = require("express");

const router = express.Router();

const { getToken } = require("./controller");

router.post("/transaction", getToken);

module.exports = router;
