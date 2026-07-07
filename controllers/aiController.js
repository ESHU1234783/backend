import { generateResumeSummary } from "../services/geminiService.js";

/**
 * @desc Generate Resume Summary using Gemini AI
 * @route POST /api/ai/generate-summary
 * @access Private
 */

export const generateSummary = async(req, res) => {
    try {

        const {
            fullName,
            jobTitle,
            experience,
            skills,
            education,
            projects
        } = req.body;

        // Required field validation
        if (!fullName ||
            !jobTitle ||
            !skills ||
            !education
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields."
            });
        }

        // Resume Data Object
        const resumeData = {
            fullName,
            jobTitle,
            experience,
            skills,
            education,
            projects
        };

        // Generate AI Summary
        const summary = await generateResumeSummary(resumeData);

        return res.status(200).json({
            success: true,
            summary
        });

    } catch (error) {

        console.error("AI Controller Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};