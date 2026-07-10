import { useState, useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import "../css/Personal.css";
import "../css/Experience.css";
import aiIcon from "../assets/SVG.png";
import redoIcon from "../assets/uil_redo.png";
import ResumeHeader from "../components/ResumeHeader";
import FormFooter from "../components/FormFooter";
import AIButton from "../components/AIButton";


const Experience = () => {
    const navigate = useNavigate();

    const { personalData, setPersonalData } = useContext(ResumeContext);

    const formData = personalData;
    const setFormData = setPersonalData;

    const [experiences, setExperiences] = useState([
        {
            company: "Linear",
            role: "Senior Product Designer",
            start: "Mar 2022",
            end: "Present",
            currentlyWorking: true,
            accomplishments:
`• Led redesign of the issue triage flow, cutting time-to-action by
38%.
• Shipped Linear AI suggestions used by 60% of weekly active
teams.
• Mentored 4 designers and ran the weekly design crit.`
        },

    ]);

    const previewExperiences =
        experiences.length === 1
            ? [
                experiences[0],
                {
                    company: "Notion",
                    role: "Product Designer",
                    start: "2019",
                    end: "2022",
                    currentlyWorking: false,
                    accomplishments:
                        "• Designed the templates gallery — a top-3 acquisition surface.\n• Partnered with research to define the activation north-star metric."
                }
            ]
            : experiences;

    const [showImproveAI, setShowImproveAI] = useState(true);
    const [leftButton, setLeftButton] = useState("");
    const [originalAccomplishments, setOriginalAccomplishments] = useState("");

    // Handle form input changes
    const handleChange = (index, event) => {

        const { name, value, type, checked } = event.target;

        const updatedExperiences = [...experiences];

        updatedExperiences[index][name] =
            type === "checkbox" ? checked : value;

        setExperiences(updatedExperiences);

    };
    const handleImproveAccomplishments = (index) => {

        setOriginalAccomplishments(experiences[index].accomplishments);

        const improvedAccomplishments =
            "Results-driven professional with strong communication, problem-solving, and teamwork skills. Passionate about delivering high-quality work, learning new technologies, and contributing effectively to organizational success.";

        const updatedExperiences = [...experiences];

        updatedExperiences[index].accomplishments = improvedAccomplishments;

        setExperiences(updatedExperiences);

        setShowImproveAI(true);
        setLeftButton("Keep Original");
    };

    const handleKeepOriginal = (index) => {

        const updatedExperiences = [...experiences];

        updatedExperiences[index].accomplishments =
            originalAccomplishments;

        setExperiences(updatedExperiences);

        setShowImproveAI(false);
        setLeftButton("Keep Improved");
    };
    const handleKeepImproved = () => {

        // Sab hide ho jayega
        setLeftButton("");
        setShowImproveAI(false);
    };

    const handleAddExperience = () => {

        setExperiences([
            ...experiences,
            {
                company: "Notion",
                role: "Product Designer",
                start: "2019",
                end: "2022",
                currentlyWorking: false,
                accomplishments:
                    "• Designed the templates gallery — a top-3 acquisition surface.\n• Partnered with research to define the activation north-star metric."
            }
        ]);

    };

    return (
        <main className="personal-page">
            {/* Main layout */}
            <section className="personal-layout">
                {/* Left Side */}
                <div className="left-section">

                    {/* Page Heading */}
                    <div className="page-heading">

                        <span className="step-text">
                            STEP 2 OF 8
                        </span>

                        <h2 className="page-title">
                            EXPERIENCE
                        </h2>

                    </div>

                    {/* Left form card */}
                    <div className="form-card">
                        {/* Form container */}
                        <div className="form-container">

                            {experiences.map((experience, index) => (

                                <div className="experience-form" key={index}>

                                    <div className="personal-form">

                                        {/* Company */}
                                        <div className="form-group">
                                            <label className="form-label">Company</label>

                                            <input
                                                type="text"
                                                name="company"
                                                className="form-input"
                                                value={experience.company}
                                                onChange={(e) => handleChange(index, e)}

                                            />
                                        </div>

                                        {/* Role */}
                                        <div className="form-group">
                                            <label className="form-label">Role</label>

                                            <input
                                                type="text"
                                                name="role"
                                                className="form-input"
                                                value={experience.role}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>

                                        {/* Start */}
                                        <div className="form-group">
                                            <label className="form-label">Start Date</label>

                                            <input
                                                type="text"
                                                name="start"
                                                className="form-input"
                                                value={experience.start}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>

                                        {/* End */}
                                        <div className="form-group">
                                            <label className="form-label">End Date</label>

                                            <input
                                                type="text"
                                                name="end"
                                                className="form-input"
                                                value={experience.end}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>

                                        <div className="experience-checkbox">

                                            <input
                                                type="checkbox"
                                                id={`working-${index}`}
                                                name="currentlyWorking"
                                                checked={experience.currentlyWorking}
                                                onChange={(e) => handleChange(index, e)}
                                                className="experience-checkbox-input"
                                            />

                                            <label
                                                htmlFor={`working-${index}`}
                                                className="experience-checkbox-label"
                                            >
                                                Currently Working
                                            </label>

                                        </div>

                                    </div>



                                    {/* Accomplishments */}
                                    <div className="summary-section">

                                        <div className="summary-header">

                                            <label className="form-label">
                                                Accomplishments
                                            </label>

                                            <span className="character-count">
                                                {experience.accomplishments.length}chars
                                            </span>

                                        </div>

                                        <textarea
                                            className="summary-textarea"
                                            name="accomplishments"
                                            value={experience.accomplishments}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="Describe your achievements..."
                                        />

                                          {/* Yahan Experience ka form aayega */}
                                    <AIButton
                                        leftButton={leftButton}
                                        showImproveAI={showImproveAI}
                                        aiIcon={aiIcon}
                                        redoIcon={redoIcon}
                                        handleImproveSummary={() => handleImproveAccomplishments(index)}
                                        handleKeepOriginal={() => handleKeepOriginal(index)}
                                        handleKeepImproved={handleKeepImproved}
                                    />

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>



                    <div className="add-experience">

                        <button
                            type="button"
                            className="add-experience-btn"
                            onClick={handleAddExperience}
                        >
                            + Add Another Experience
                        </button>

                    </div>



                    {/* Form Footer */}
                    <FormFooter
                        onBack={() => navigate("/resume-builder/personal-info")}
                        onContinue={() => navigate("/resume-builder/education")}
                    />

                </div>

                {/* Right Preview */}
                <div className="preview-card">

                    <div className="resume-preview">

                        {/* Name */}
                        <h1 className="resume-name">
                            {formData.fullName}
                        </h1>

                        <p className="resume-job-title">
                            {formData.jobTitle}
                        </p>

                        <div className="resume-contact-row">
                            <span>{formData.email}</span>
                            <span>{formData.phone}</span>
                            <span>{formData.location}</span>
                        </div>

                        <div className="resume-portfolio">
                            {formData.portfolio}
                        </div>

                        <div className="resume-divider"></div>


                        {/* Summary Section */}
                        <div className="resume-summary">

                            <h3 className="resume-section-title">
                                SUMMARY
                            </h3>

                            <p className="resume-summary-text">
                                {formData.summary}
                            </p>

                        </div>

                        {/* Experience */}

                        <div className="resume-experience">

                            <h3 className="resume-section-title">
                                EXPERIENCE
                            </h3>

                            {/* Experience 1 */}

                            {previewExperiences.map((experience, index) => (

                                <div className="experience-item" key={index}>

                                    <div className="experience-header">

                                        <h4>{experience.role}</h4>

                                        <span>
                                            {experience.start} - {experience.currentlyWorking
                                                ? "Present"
                                                : experience.end}
                                        </span>

                                    </div>

                                    <p className="company-name">
                                        {experience.company}
                                    </p>

                                    <div className="experience-description">

                                        {experience.accomplishments
                                            .split("\n")
                                            .map((item, i) => (

                                                <p key={i}>
                                                    {item}
                                                </p>

                                            ))}

                                    </div>

                                </div>

                            ))}

                        </div>
                        {/* Skills */}
                        <div className="resume-skills">

                            <h3 className="resume-section-title">
                                SKILLS
                            </h3>

                            <div className="skills-list">

                                <span className="skill-tag">Product Design</span>

                                <span className="skill-tag">Design Systems</span>

                                <span className="skill-tag">Prototyping</span>

                                <span className="skill-tag">User Research</span>

                                <span className="skill-tag">Figma</span>

                                <span className="skill-tag">Framer</span>

                                <span className="skill-tag">Design Ops</span>

                            </div>

                        </div>

                        {/* Education */}

                        <div className="resume-education">

                            <h3 className="resume-section-title">
                                EDUCATION
                            </h3>

                            <div className="education-item">

                                <div className="education-header">

                                    <h4>B.S.Human-Computer Interaction</h4>

                                    <span>2013 – 2017</span>

                                </div>

                                <p className="education-school">
                                    Carnegie Mellon University
                                </p>

                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
};

export default Experience;