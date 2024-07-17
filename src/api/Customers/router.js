const express = require("express");

const router = express.Router();

const { get, create, update, destroy } = require("./controller");

router.post("/customers", create);
router.get("/customers", get);
router.get("/customers/:id", get);
router.put("/customers", update);
router.delete("/customers", destroy);

module.exports = router;
