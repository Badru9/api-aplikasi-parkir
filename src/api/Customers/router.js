const express = require("express");

const router = express.Router();

const {
  findCustomer,
  deleteCustomer,
  insertCustomer,
  findCustomerByID,
} = require("./controller");

router.get("/customers", findCustomer);
router.get("/customers/:id", findCustomerByID);
router.post("/customers", insertCustomer);
router.delete("/customers/:id", deleteCustomer);

module.exports = router;
