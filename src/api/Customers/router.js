const express = require("express");

const router = express.Router();

const {
  findCustomer,
  deleteCustomerByID,
  insertCustomer,
  findCustomerByID,
  findCustomerByPlatNo,
  updateBiaya,
} = require("./controller");

router.get("/customers", findCustomer);
// router.get("/customers/:id", findCustomerByID);
router.get("/customers/:plat_no", findCustomerByPlatNo);
router.post("/customers", insertCustomer);
router.put("/customers", updateBiaya);
router.delete("/customers/:id", deleteCustomerByID);

module.exports = router;
