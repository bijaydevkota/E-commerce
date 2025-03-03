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
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("imageUrl"), createCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.patch("/:id", upload.single("imageUrl"), updateCategoryById);
router.delete("/:id", deleteCategoryById);

export default router;