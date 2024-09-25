const express = require("express");
const router = express.Router();
const { requireAuth, requireAdmin } = require("../middleware/auth");
const productController = require("../controllers/products");
const upload = require("../middleware/uploadConfig");

// GET products
router.get("/", productController.index);

// CREATE a new product
router.post("/", upload.single("image"), productController.create);

// EDIT a product
router.put("/:id", productController.update);

// DELETE a product
router.delete("/:id", productController.delete);

module.exports = router;
