import express from "express";
import {
    generateSummary,
    improveAccomplishments,
    suggestSkills,
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate-summary", generateSummary);

router.post("/accomplishments", improveAccomplishments);

router.post("/skills", suggestSkills);

export default router;