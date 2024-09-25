const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require("../models/order");

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("Webhook signature verification failed: ", err.message);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Session: ", session);
      const orderId = session.metadata.orderId;
      // Process order
      try {
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id
        );
        console.log("line items: ", lineItems);
        const orderData = {
          orderId,
          customerEmail: session.customer_details.email,
          items: lineItems.data.map((item) => ({
            productId: item.id,
            name: item.description,
            quantity: item.quantity,
            price: item.amount_total / 100,
          })),
          totalAmount: session.amount_total / 100,
          status: "paid",
        };

        // Save to database
        const order = new Order(orderData);
        await order.save();
      } catch (err) {
        console.error("Error saving order");
      }
    }
    res.sendStatus(200);
  }
);

module.exports = router;
