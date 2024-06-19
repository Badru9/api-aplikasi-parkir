const express = require("express");

const router = express.Router();

const customers = require("./Customers/router");
const Admin = require("./Admin/router");
const transaction = require("./Transaction/router");
const auth = require("./Auth/router");
const parkTransaction = require("./ParkTransaction/router");
const Role = require("./Role/router");

router.use(customers);
router.use(Admin);
router.use(transaction);
router.use(auth);
router.use(parkTransaction);
router.use(Role);

module.exports = router;
