const expres = require("express");
import Product from "../models/product.modwl.js";
const router = express.Router();
const {getProducts, getProduct} = require('../controllers/product.controller.js')
import db from '../db/conn.mjs';



router.get('/', getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

//update a product
router.put("/:id", updateProduct)
//delete a product
router.delete("/:id", deleteProduct )

export default router;