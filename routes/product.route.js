const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

// create products api
router.post("/", productController.createProduct);

// get products api
router.get("/", productController.getProducts);

//get product by id
router.get("/:id", productController.getProductById);

//update a product by id
router.put("/:id", productController.updateProduct);

// delete a product by Id
router.delete("/:id", productController.deleteProduct);

module.exports = router;
