import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "../controller/productController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/", upload.single("imageUrl"), createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.patch("/:id", upload.single("imageUrl"), updateProductById);
router.delete("/:id", deleteProductById);

export default router;
