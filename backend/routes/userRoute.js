import express from "express";
const router = express.Router();
import multer from "multer";
import { deleteUserById, getAllUser, getUserById, loginUser, registerUser, updateUserById } from "../controller/userController.js";
const upload = multer({ dest: "uploads/" });

router.post("/register", upload.single("imageUrl"), registerUser);
router.post("/login", upload.single("imageUrl"), loginUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.patch("/:id", upload.single("imageUrl"), updateUserById);
router.delete("/:id", deleteUserById);

export default router;