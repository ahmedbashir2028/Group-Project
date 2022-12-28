const Product = require("../../models/product.model");

// get all products
const getAllProducts = async (req, res, next) => {
  let products;

  try {
    products = await Product.find();
    if (!products) {
      res
        .status(404)
        .json({ message: "No products avaailable, Please try to add one" });
      return;
    } else {
      res.send({ message: "Record Fetched Successfully", products });
    }
  } catch (err) {
    console.log(err);
  }
};

// add new product
const addNewProduct = async (req, res, next) => {
  const {
    productId,
    productName,
    productBrand,
    productColor,
    productPrice,
    productStock,
    // productImage,
    productDetails,
  } = req.body;
  const newProduct = new Product({
    productId,
    productName,
    productBrand,
    productColor,
    productPrice,
    productStock,
    productImage: "img.com",
    productDetails,
  });
  try {
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product Created Successfully", newProduct });
  } catch (err) {
    const error = res.status(404).json({
      message:
        "Some error occured while saving the product, please try again later",
    });
    return error;
  }
};

// get Specific product by id
const getProductById = async (req, res, next) => {
  const productId = req.params.id;
  let findedProduct;
  try {
    findedProduct = await Product.findById(productId);
    if (!findedProduct) {
      return res.status(404).json({ message: "Product not found " });
    } else {
      return res
        .status(200)
        .json({ message: "Product Found Succesfully", data: findedProduct });
    }
  } catch (err) {
    const error = res.status(500).json({
      message: "Some error occured while fetching data, please try again later",
    });
  }
};

// update product
const updateProduct = async (req, res, next) => {
  const {
    productId,
    productName,
    productBrand,
    productColor,
    productPrice,
    productStock,
    productImage,
    productDetails,
  } = req.body;
  const pid = req.params.id;
  let findedProduct;

  try {
    findedProduct = await Product.findById(pid);
  } catch (err) {
    const error = res
      .status(404)
      .json({ message: "Some error ocured while finding the product " });
    return error;
  }
  if (!findedProduct) {
    const error = res
      .status(404)
      .json({ message: "Product not found with given id " });
    return error;
  }

  findedProduct.productId = productId;
  findedProduct.productName = productName;
  findedProduct.productBrand = productBrand;
  findedProduct.productColor = productColor;
  findedProduct.productPrice = productPrice;
  findedProduct.productStock = productStock;
  findedProduct.productImage = productImage;
  findedProduct.productDetails = productDetails;
  try {
    await findedProduct.save();
    return res.send({
      message: "Product Updated Successfully",
      findedProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete a product

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    await Product.deleteOne({ _id: productId })
      .then(() => {
        res.status(200).json({ message: "Product Deleted Successfully" });
      })
      .catch((err) => {
        res.status(404).json({
          message:
            "An occured while deleting the product please try again later",
        });
      });
  } catch (err) {
    res.status(404).json({ message: "An error occured" });
  }
};

exports.getAllProducts = getAllProducts;
exports.addNewProduct = addNewProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
