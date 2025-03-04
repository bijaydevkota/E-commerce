import express from "express";
const router = express.Router();
import multer from "multer";
import { deleteUserById, getAllUser, getUserById, loginUser, registerUser, updateUserById } from "../controller/userController.js";
const upload = multer({ dest: "uploads/" });

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.patch("/:id",  updateUserById);
router.delete("/:id", deleteUserById);

export default router;