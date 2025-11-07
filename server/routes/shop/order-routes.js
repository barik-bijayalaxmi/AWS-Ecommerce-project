const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../controllers/shop/order-controller"); // Removed capturePayment

const router = express.Router();

// COD order creation
router.post("/create", createOrder);

// Get all orders for a user
router.get("/list/:userId", getAllOrdersByUser);

// Get order details by ID
router.get("/details/:id", getOrderDetails);

module.exports = router;
