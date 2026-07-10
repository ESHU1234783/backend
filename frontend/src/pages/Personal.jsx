import { useState, useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import "../css/Personal.css";
import aiIcon from "../assets/SVG.png";
import redoIcon from "../assets/uil_redo.png";
import createProfile from "../service/fetchcall.js"
import ResumeHeader from "../components/ResumeHeader";
import FormFooter from "../components/FormFooter";
import AIButton from "../components/AIButton";

const Personal = () => {
    const navigate = useNavigate();
    const { personalData, setPersonalData } = useContext(ResumeContext);
    const formData = personalData;
    const setFormData = setPersonalData;

    const [showImproveAI, setShowImproveAI] = useState(true);
    const [leftButton, setLeftButton] = useState("");
    const [originalSummary, setOriginalSummary] = useState("");

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleImproveSummary = () => {

        setOriginalSummary(formData.summary);

        const improvedSummary =
            "Results-driven professional with strong communication, problem-solving, and teamwork skills. Passionate about delivering high-quality work, learning new technologies, and contributing effectively to organizational success.";

        setFormData({
            ...formData,
            summary: improvedSummary,
        });

        setShowImproveAI(true);
        setLeftButton("Keep Original");
    };
    const handleKeepOriginal = () => {

        setFormData({
            ...formData,
            summary: originalSummary,
        });

        setShowImproveAI(false);
        setLeftButton("Keep Improved");
    };
    const handleKeepImproved = () => {

        // Sab hide ho jayega
        setLeftButton("");
        setShowImproveAI(false);
    };

    return (
        <section className="personal-layout">
            {/* Left Side */}
            <div className="left-section">

                {/* Page Heading */}
                <div className="page-heading">

                    <span className="step-text">
                        STEP 1 OF 8
                    </span>

                    <h2 className="page-title">
                        Personal Details
                    </h2>

                </div>

                {/* Left form card */}
                <div className="form-card">
                    {/* Form container */}
                    <div className="form-container">
                        {/* Personal information form */}
                        <div className="personal-form">


                            {/* Full Name */}
                            <div className="form-group">
                                <label className="form-label">Full Name</label>

                                <input
                                    type="text"
                                    name="fullName"
                                    className="form-input"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Job Title */}
                            <div className="form-group">
                                <label className="form-label">Job Title</label>

                                <input
                                    type="text"
                                    name="jobTitle"
                                    className="form-input"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="form-group">
                                <label className="form-label">Phone </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Location */}
                            <div className="form-group">
                                <label className="form-label">Location</label>

                                <input
                                    type="text"
                                    name="location"
                                    className="form-input"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Portfolio */}
                            <div className="form-group">
                                <label className="form-label">Portfolio</label>

                                <input
                                    type="url"
                                    name="portfolio"
                                    className="form-input"
                                    value={formData.portfolio}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        {/* Professional Summary */}
                        <div className="summary-section">

                            {/* Summary Header */}
                            <div className="summary-header">
                                <label className="form-label">
                                    Professional Summary
                                </label>

                                <span className="character-count">
                                    206 chars
                                </span>
                            </div>

                            {/* Professional Summary Input */}
                            <textarea
                                className="summary-textarea"
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                            />

                            {/* Improve with AI */}
                            <AIButton
                                leftButton={leftButton}
                                showImproveAI={showImproveAI}
                                handleImproveSummary={handleImproveSummary}
                                handleKeepOriginal={handleKeepOriginal}
                                handleKeepImproved={handleKeepImproved}
                            />

                        </div>


                    </div>

                </div>
                {/* Form Footer */}
                <FormFooter
                    onBack={() => navigate(-1)}
                    onContinue={() => navigate("/resume-builder/experience")}
                />
            </div>

            {/* Right Preview */}
            <div className="preview-card">

                <div className="resume-preview">

                    {/* Name */}
                    <h1 className="resume-name">
                        {formData.fullName}
                    </h1>

                    {/* Job Title */}
                    <p className="resume-job-title">
                        {formData.jobTitle}
                    </p>

                    {/* Contact Row 1 */}
                    <div className="resume-contact-row">
                        <span>{formData.email}</span>
                        <span>{formData.phone}</span>
                        <span>{formData.location}</span>
                    </div>

                    {/* Portfolio */}
                    <div className="resume-portfolio">
                        {formData.portfolio}
                    </div>

                    {/* Purple Divider */}
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

                        <div className="experience-item">

                            <div className="experience-header">

                                <h4>Senior Product Designer</h4>

                                <span>Mar 2022 – Present</span>

                            </div>

                            <p className="company-name">Linear</p>
                            <div className="experience-description">

                                <p>
                                    Led redesign of the issue triage flow, cutting
                                    time-to-action by 38%.
                                </p>

                                <p>
                                    Shipped Linear AI suggestions used by 60% of
                                    weekly active teams.
                                </p>

                                <p>
                                    Mentored 4 designers and ran the weekly design
                                    crit.
                                </p>
                            </div>

                        </div>

                        {/* Experience 2 */}

                        <div className="experience-item">

                            <div className="experience-header">

                                <h4>Product Designer</h4>

                                <span>2019 – 2022</span>

                            </div>

                            <p className="company-name">Notion</p>
                            <div className="experience-description">

                                <p>
                                    Designed the templates gallery — a top-3
                                    acquisition surface.
                                </p>

                                <p>
                                    Partnered with research to define the activation
                                    north-star metric.
                                </p>
                            </div>

                        </div>

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

    );
};

export default Personal;