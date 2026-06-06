import { Router } from "express";
import { createService, deleteService, getServices, updateService } from "../controllers/serviceController.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getServices));
router.post("/", authMiddleware, adminMiddleware, asyncHandler(createService));
router.put("/:id", authMiddleware, adminMiddleware, asyncHandler(updateService));
router.delete("/:id", authMiddleware, adminMiddleware, asyncHandler(deleteService));

export default router;
