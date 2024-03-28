const express = require("express");

const router = express.Router();

const {
  findPegawai,
  findPegawaiByID,
  insertPegawai,
  updatePegawai,
  deletePegawaiByID,
} = require("./controller");

router.get("/pegawai", findPegawai);
router.get("/pegawai/:id", findPegawaiByID);
router.post("/pegawai", insertPegawai);
router.put("/pegawai/:id", updatePegawai);
router.delete("/pegawai/:id", deletePegawaiByID);

module.exports = router;
