const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    telnum: { type: Number, required: true, uniquie: true },
    email: { type: String, required: true, uniquie: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
