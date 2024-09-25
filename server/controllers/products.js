const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// GET all products
exports.index = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product (requires admin)
exports.create = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);
    // Validate and sanitize fields
    await Promise.all([
      body("name", "Name is required.")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .run(req),
      body("price", "Price must be a number.").isNumeric().run(req),
      body("notes", "Notes are required.")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .run(req),
      body("description", "Description is required.")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .run(req),
    ]);

    // Process request after sanitization.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a Product with the validated and sanitized data
    const { name, price, notes, description } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const product = new Product({
      name,
      price: parseFloat(price),
      notes,
      description,
      imageUrl: `/uploads/${image.filename}`,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params();
  const { name, price, notes, description, imageUrl } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, notes, description, imageUrl },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleted product: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
