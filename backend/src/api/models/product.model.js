const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  // {
  //   productId: { type: String, required: true },
  //   productName: { type: String, required: true },
  //   productBrand: { type: String, required: true },
  //   productColor: { type: String, required: true },
  //   productPrice: { type: String, required: true },
  //   productStock: { type: String, required: true },
  //   productImage: { type: String, required: true },
  //   productDetails: { type: String, required: true },
  // },
  // { timestamps: true }

  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Product name cannot exceed 5 characters"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: [true, "Please enter product images"],
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    brand: {
      type: String,
      required: [true, "Please select product Brand"],
      enum: {
        values: [
          "Iphone",
          "Samsung",
          "Vivo",
          "Oppo",
          "Realme",
          "Xiomi",
          "OnePlus",
          "Nokia",
          "Tecno",
          "Lenovo",
          "Sony",
          "LG",
          "others",
        ],
        message: "Please select correct brands",
      },
    },
    // seller: {
    //   type: String,
    //   required: [true, "please add seller name"],
    // },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
      maxLength: [5, "Product cannot exceed 5 characters"],
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          default: 0,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: false,
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("Product", ProductSchema);
