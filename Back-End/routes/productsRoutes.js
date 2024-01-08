import express from "express";
import { getProducts, getProduct, deleteProduct, updateProducts, createProduct  } from "../controller/productController.js";

const router=express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.put('/', updateProducts);


export default router;