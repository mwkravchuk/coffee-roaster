// Product model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  notes: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Product", ProductSchema);