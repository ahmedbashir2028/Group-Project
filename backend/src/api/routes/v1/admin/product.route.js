const express = require("express");
const router = express.Router();
const controller = require("../../../controllers/admin/products.controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.route("/list").get(controller.getAllProducts);
router.route("/new").post(upload.single("file"), controller.addNewProduct);
router.route("/find/:id").get(controller.getProductById);
router.route("/update/:id").patch(controller.updateProduct);
router.route("/delete/:id").delete(controller.deleteProduct);
module.exports = router;
