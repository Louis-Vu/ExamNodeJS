const express = require("express");
const router = express.Router();
const controller = require("../controller/auth.controller");

router.get("/add",controller.product);
router.post("/add",controller.postProduct);


module.exports = router;