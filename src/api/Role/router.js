const express = require("express");

const router = express.Router();

const { create, get } = require("./controller");

router.post("/role", create);
router.get("/role", get);

module.exports = router;
