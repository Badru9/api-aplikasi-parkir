const express = require("express");

const router = express.Router();

const { getTransaction, insertParkTransaction } = require("./controller");

router.get("/transaksi-parkir", getTransaction);
router.post("/transaksi-parkir", insertParkTransaction);

module.exports = router;
