const express = require("express");

const router = express.Router();

const { get, create, update, destroy } = require("./controller");

router.post("/customers", create);
router.get("/customers", get);
router.get("/customers/:id", get);
router.put("/customers/:id", update);
router.delete("/customers/:id", destroy);

module.exports = router;
