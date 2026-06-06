import { Router } from "express";
import { createAppointment, deleteAppointment, getAppointments, updateAppointment } from "../controllers/appointmentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authMiddleware);
router.post("/", asyncHandler(createAppointment));
router.get("/", asyncHandler(getAppointments));
router.put("/:id", asyncHandler(updateAppointment));
router.delete("/:id", asyncHandler(deleteAppointment));

export default router;
