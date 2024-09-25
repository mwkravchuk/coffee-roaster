// Product model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

// Export model
module.exports = mongoose.model("User", UserSchema);