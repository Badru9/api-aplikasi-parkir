const express = require("express");

const router = express.Router();

const { create, get, update, destroy } = require("./controller");
router.get("/admin", get);
router.get("/admin/:id", get);
router.post("/admin", create);
router.put("/pegawai/:id", update);
router.delete("/pegawai/:id", destroy);

module.exports = router;
