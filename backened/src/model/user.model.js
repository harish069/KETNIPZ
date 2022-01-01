const mongoose = require("mongoose");

/////Log In////////////////////
const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: false},
    email: { type: String, required: false},
    password: { type: String, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
