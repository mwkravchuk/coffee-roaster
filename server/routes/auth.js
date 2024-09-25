const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

// POST register page
router.post("/register", authController.register);

// POST login
router.post("/login", authController.login);

// GET logout
router.get("/logout", authController.logout);

module.exports = router;
