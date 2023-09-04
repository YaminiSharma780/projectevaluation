const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: { type: Number, require },
    name: { type: String, require },
    image: { type: String, require },
    creator: { type: String, require },
    region: { type: String, require },
    price: { type: Number, require },
    description: { type: String, require },
    rating: { type: Number, require },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
