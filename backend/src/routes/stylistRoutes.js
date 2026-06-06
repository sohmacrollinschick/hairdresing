import { Router } from "express";
import { createStylist, deleteStylist, getStylists, updateStylist } from "../controllers/stylistController.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getStylists));
router.post("/", authMiddleware, adminMiddleware, asyncHandler(createStylist));
router.put("/:id", authMiddleware, adminMiddleware, asyncHandler(updateStylist));
router.delete("/:id", authMiddleware, adminMiddleware, asyncHandler(deleteStylist));

export default router;
