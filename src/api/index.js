const express = require("express");

const router = express.Router();

const customers = require("./Customers/router");
const pegawai = require("./Pegawai/router");
const auth = require("./Auth/router");

router.use(customers);
router.use(pegawai);
router.use(auth);

module.exports = router;
