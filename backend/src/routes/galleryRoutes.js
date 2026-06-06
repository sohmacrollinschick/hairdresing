import { Router } from "express";
import { deleteGalleryItem, getGallery, uploadImage, uploadVideo } from "../controllers/galleryController.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getGallery));
router.post("/image", authMiddleware, adminMiddleware, asyncHandler(uploadImage));
router.post("/video", authMiddleware, adminMiddleware, asyncHandler(uploadVideo));
router.delete("/:id", authMiddleware, adminMiddleware, asyncHandler(deleteGalleryItem));

export default router;
