const express = require("express");

const router = express.Router();

const customers = require("./Customers/router");
const pegawai = require("./Pegawai/router");

router.use(customers);
router.use(pegawai);

module.exports = router;
