const express = require("express");
const router = express.Router();
const controller = require("../../../controllers/admin/products.controller");

router.route("/list").get(controller.getAllProducts);
router.route("/new").post(controller.addNewProduct);
router.route("/find/:id").get(controller.getProductById);
router.route("/update/:id").patch(controller.updateProduct);
router.route("/delete/:id").delete(controller.deleteProduct);
module.exports = router;
