require('dotenv').config(); // make sure .env loads

const paypal = require("paypal-rest-sdk");

// Load configuration from environment variables
paypal.configure({
  mode: process.env.PAYPAL_MODE, // 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
