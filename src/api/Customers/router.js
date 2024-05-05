const express = require("express");

const router = express.Router();

const {
  findCustomer,
  deleteCustomerByID,
  insertCustomer,
  findCustomerByID,
  updateBiaya,
} = require("./controller");

router.get("/customers", findCustomer);
router.get("/customers/:id", findCustomerByID);
router.post("/customers", insertCustomer);
router.put("/customers", updateBiaya);
router.delete("/customers/:id", deleteCustomerByID);

module.exports = router;
