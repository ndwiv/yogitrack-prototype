const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController.cjs");

router.get("/search", customerController.searchCustomer);

module.exports = router;