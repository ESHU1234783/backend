import express from "express";
import { generateSummary } from "../controllers/aiController.js";
//import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/ai/generate-summary
 * @desc    Generate Resume Summary using Gemini AI
 * @access  Private
 */

router.post(
    "/generate-summary",

    generateSummary
);

export default router;