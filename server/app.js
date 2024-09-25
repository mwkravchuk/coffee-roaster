require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const configurePassport = require("./config/passport");

const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const stripeRouter = require("./routes/stripe");
const webhookRouter = require("./routes/webhooks");
const ordersRouter = require("./routes/orders");

const app = express();

// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI_DEV;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Middleware setup
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// Configure passport
configurePassport(passport);

app.use("/api/webhook", webhookRouter);
app.use(express.json());

// File uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes setup
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/stripe", stripeRouter);
app.use("/api/orders", ordersRouter);

// Serve static files from React
app.use(express.static(path.resolve(__dirname, "client", "dist")));

// Catch all handler. React deals with these routes.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
