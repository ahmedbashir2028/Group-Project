// const { cloudinary } = require("../../../config/vars");
const Product = require("../../models/product.model");
// cloudinary
const cloudinary = require("cloudinary").v2;

// multer
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// configure cloudinary

cloudinary.config({
  cloud_name: "dxxln2pn2",
  api_key: "282966749357711",
  api_secret: "ua_T-bp5jtj_gPGPf8hxRSrQOqU",
});
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
    name,
    price,
    description,
    rating,
    // images,
    brand,
    stock,
    numOfReviews,
  } = req.body;

  // getting file

  const file = req.body.image;
  console.log(file);

  // cloudinary.uploader.upload(file, (error, result) => {
  //   if (error) {
  //     return res.status(400).send(error);
  //   } else {
  //     res.send({
  //       url: result.secure_url,
  //     });
  //   }
  // });
  // let result;
  // try {
  //   result = await cloudinary.uploader.upload(file, {
  //     folder: "Products",
  //     width: 150,
  //     crop: "scale",
  //   });
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).send(err);
  // }
  // image uploading
  // const result = await cloudinary.v2.uploader.upload(req.body.productImage, {
  //   folder: "Products",
  //   width: 150,
  //   crop: "scale",
  // });
  const newProduct = new Product({
    name,
    price,
    description,
    rating,
    images: {
      public_id: "result.public_id",
      url: "result.secure_url",
    },
    brand,
    stock,
    numOfReviews,
  });
  try {
    await Product.create(newProduct);
    res
      .status(201)
      .json({ message: "Product Created Successfully", newProduct });
  } catch (err) {
    const error = res.status(404).json({
      message: err,
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
    name,
    price,
    description,
    rating,
    images,
    brand,
    stock,
    numOfReviews,
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

  findedProduct.name = name;
  findedProduct.price = price;
  findedProduct.description = description;
  findedProduct.rating = rating;
  findedProduct.images = images;
  findedProduct.brand = brand;
  findedProduct.stock = stock;
  findedProduct.numOfReviews = numOfReviews;
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
