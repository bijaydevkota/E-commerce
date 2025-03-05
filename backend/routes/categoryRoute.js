import express from "express";
import {
  createCategory,
  deleteCategoryById,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
} from "../controller/categoryController.js";
const router = express.Router();
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: "uploads/" });

router.post("/",verifyToken, upload.single("imageUrl"), createCategory);
router.get("/", verifyToken, getAllCategory);
router.get("/:id", getCategoryById);
router.patch("/:id",verifyToken, updateCategoryById);
router.delete("/:id",verifyToken, deleteCategoryById);

export default router;