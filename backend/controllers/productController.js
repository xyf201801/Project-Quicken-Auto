import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//GET api/products
//Fetching all products
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await Product.find({ ...keyword });
  res.json(products);
});

//GET /api/product/:id
//Fetching the single products by ID
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductsById };
