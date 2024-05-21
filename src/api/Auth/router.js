const express = require("express");

const router = express.Router();

const { loginPegawai } = require("./controller");

router.post("/login-pegawai", loginPegawai);

module.exports = router;
