const Product = require("../models/product.model");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //product does not exists
    if (!product) {
      return res.status(404).json({ message: "Product Not found!" });
    }

    // product exists
    // A check wether the product was updated in the DB or not
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    //product does not exists
    if (!product) {
      return res.status(404).json({ message: "Product Not found!" });
    }

    // product exists
    // A check wether the product was updated in the DB or not
    res.status(200).json({ message: "Product Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
