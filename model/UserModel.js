const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be more than 4 charaters"],
    minlenth: 5,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Name must be more than 7 charaters"],
    minlenth: 5,
  },
  avatar: String,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("users", userSchema);
