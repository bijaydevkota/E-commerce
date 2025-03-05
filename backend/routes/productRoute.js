import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "../controller/productController.js";
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/",verifyToken, upload.single("imageUrl"), createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.patch("/:id",verifyToken, upload.single("imageUrl"), updateProductById);
router.delete("/:id",verifyToken, deleteProductById);

export default router;
