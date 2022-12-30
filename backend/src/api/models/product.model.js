const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productBrand: { type: String, required: true },
    productColor: { type: String, required: true },
    productPrice: { type: String, required: true },
    productStock: { type: String, required: true },
    productImage: { type: String, required: true },
    productDetails: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
