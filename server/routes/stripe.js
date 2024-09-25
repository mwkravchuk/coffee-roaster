const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const { cart } = req.body;
  const orderId = uuidv4();

  const line_items = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    // Create session with items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `https://coffee.markkravchuk.xyz/cart/checkout/${orderId}`,
      cancel_url: `https://coffee.markkravchuk.xyz/cart/`,
      metadata: {
        orderId,
      },
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session: ", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

module.exports = router;
