const express = require("express");

const router = express.Router();

const customers = require("./Customers/router");
const pegawai = require("./Pegawai/router");
const transaction = require("./Transaction/router");

router.use(customers);
router.use(pegawai);
router.use(transaction);

module.exports = router;
