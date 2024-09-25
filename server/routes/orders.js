const express = require("express");
const router = express.Router();
const Order = require("../models/order");

const ordersController = require("../controllers/orders");

router.get("/:orderId", ordersController.index);

module.exports = router;
