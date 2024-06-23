const express = require("express");

const router = express.Router();

const { create, get, update, destroy, updateImage } = require("./controller");
router.get("/admin", get);
router.get("/admin/:id", get);
router.post("/admin", create);
router.put("/admin/:id", update);
// router.post("/admin/:id", updateImage);
router.delete("/admin/:id", destroy);

module.exports = router;
