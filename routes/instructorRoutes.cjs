const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController.cjs");

router.get("/search", instructorController.search);
router.post("/add", instructorController.add);


module.exports = router;