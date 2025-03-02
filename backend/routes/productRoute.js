import express from "express"
import { createProduct, deleteProductById, getAllProduct, getProductById, updateProductById } from "../controller/productController.js";
const router = express.Router();

router.post("/", createProduct)
router.get("/", getAllProduct)
router.get("/:id", getProductById)
router.patch("/", updateProductById)
router.delete("/", deleteProductById)

export default router;