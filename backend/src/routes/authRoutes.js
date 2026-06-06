import { Router } from "express";
import { login, profile, register } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.post("/register", asyncHandler(register));
router.post("/login", asyncHandler(login));
router.get("/profile", authMiddleware, asyncHandler(profile));

export default router;
