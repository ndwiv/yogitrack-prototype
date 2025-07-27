const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController.cjs");

router.get("/ids", packageController.getPackageIds);
router.get("/getPackage", packageController.getPackage);

module.exports = router;