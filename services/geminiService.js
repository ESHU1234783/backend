import ai from "../config/gemini.js";
import { resumeSummaryPrompt } from "../utils/prompts.js";

/**
 * Generate Resume Summary using Gemini AI
 * @param {Object} resumeData
 * @returns {Promise<string>}
 */

export const generateResumeSummary = async(resumeData) => {
    try {
        // Create prompt
        const prompt = resumeSummaryPrompt(resumeData);

        // Send prompt to Gemini
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        // Extract generated text
        const summary = response.text;

        if (!summary) {
            throw new Error("No response generated from Gemini.");
        }

        return summary.trim();

    } catch (error) {

        console.error("Gemini Service Error:", error);

        throw new Error(
            error.message || "Failed to generate resume summary."
        );
    }
};