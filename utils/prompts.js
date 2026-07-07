/**
 * Generate a professional ATS-friendly resume summary prompt.
 *
 * @param {Object} data
 * @returns {string}
 */

export const resumeSummaryPrompt = (data) => {

    const {
        fullName,
        jobTitle,
        experience,
        skills,
        education,
        projects
    } = data;

    return `
You are an expert Resume Writer and ATS Resume Optimization Specialist.

Your task is to generate a professional resume summary.

Follow these rules strictly:

1. Write between 80 and 120 words.
2. Make it ATS-friendly.
3. Use professional English.
4. Do not use markdown.
5. Do not use bullet points.
6. Do not include headings.
7. Do not invent fake experience.
8. Only use the information provided.
9. Highlight technical skills naturally.
10. Return ONLY the summary text.

Candidate Details

Name:
${fullName}

Target Role:
${jobTitle}

Experience:
${experience}

Skills:
${skills}

Education:
${education}

Projects:
${projects}
`;
};