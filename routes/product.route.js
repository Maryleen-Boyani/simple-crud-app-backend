const express= require("express");
const Product = require("../Models/product.model");//importing the product models
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct }=require("../controllers/product.controller");    

router.get("/",  getProducts);

//get a single product
router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports=router;  