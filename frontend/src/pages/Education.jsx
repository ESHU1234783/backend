import { useState, useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";
import "../css/Personal.css";
import "../css/Education.css";
import aiIcon from "../assets/SVG.png";
import redoIcon from "../assets/uil_redo.png";
import ResumeHeader from "../components/ResumeHeader";
import FormFooter from "../components/FormFooter";
import AIButton from "../components/AIButton";


const Education = () => {
    const navigate = useNavigate();

    const { personalData, setPersonalData } = useContext(ResumeContext);

    const formData = personalData;
    const setFormData = setPersonalData;

    const [educations, setEducations] = useState([
        {
            school: "",
            degree: "",
            field: "",
            location: "",
            start: "",
            end: "",
            currentlyStudying: false,
            cgpa: "",
            highlights: ""
        }
    ]);


    const [showImproveAI, setShowImproveAI] = useState(true);
    const [leftButton, setLeftButton] = useState("");
    const [originalAccomplishments, setOriginalAccomplishments] = useState("");

    // Handle form input changes
    const handleChange = (index, event) => {

        const { name, value, type, checked } = event.target;

        const updatedEducations = [...educations];

        updatedEducations[index][name] =
            type === "checkbox" ? checked : value;

        setEducations(updatedEducations);

    };
    const handleImproveAccomplishments = (index) => {

        setOriginalAccomplishments(educations[index].highlights
        );

        const improvedAccomplishments =
            "Results-driven professional with strong communication, problem-solving, and teamwork skills. Passionate about delivering high-quality work, learning new technologies, and contributing effectively to organizational success.";

        const updatedEducations = [...educations];

        updatedEducations[index].highlights = improvedAccomplishments;

        setEducations(updatedEducations);

        setShowImproveAI(true);
        setLeftButton("Keep Original");
    };

    const handleKeepOriginal = (index) => {

        const updatedEducations = [...educations];

        updatedEducations[index].highlights =
            originalAccomplishments;

        setEducations(updatedEducations);

        setShowImproveAI(false);
        setLeftButton("Keep Improved");
    };
    const handleKeepImproved = () => {

        // Sab hide ho jayega
        setLeftButton("");
        setShowImproveAI(false);
    };

    const handleAddEducation = () => {

        setEducations([
            ...educations,
            {
                school: "",
                degree: "",
                field: "",
                location: "",
                start: "",
                end: "",
                currentlyStudying: false,
                cgpa: "",
                highlights: ""
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
                            STEP 3 OF 8
                        </span>

                        <h2 className="page-title">
                            Education
                        </h2>

                    </div>

                    {/* Left form card */}
                    <div className="form-card">
                        {/* Form container */}
                        <div className="form-container">

                            {educations.map((education, index) => (

                                <div className="education-form" key={index}>

                                    <div className="personal-form">

                                        {/* Company */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                School / University
                                            </label>

                                            <input
                                                type="text"
                                                name="school"
                                                className="form-input"
                                                value={education.school}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="Carnegie Mellon University"
                                            />
                                        </div>

                                        {/* Role */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                Degree
                                            </label>

                                            <input
                                                type="text"
                                                name="degree"
                                                className="form-input"
                                                value={education.degree}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="B.S. Human-Computer Interaction"
                                            />
                                        </div>

                                        {/* Field of Study */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                Field of Study
                                            </label>

                                            <input
                                                type="text"
                                                name="field"
                                                className="form-input"
                                                value={education.field}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="Computer Science"
                                            />
                                        </div>

                                        {/* Location */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                Location
                                            </label>

                                            <input
                                                type="text"
                                                name="location"
                                                className="form-input"
                                                value={education.location}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="Pittsburgh, USA"
                                            />
                                        </div>

                                        {/* Start */}
                                        <div className="form-group">
                                            <label className="form-label">Start Date</label>

                                            <input
                                                type="text"
                                                name="start"
                                                className="form-input"
                                                value={education.start}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="2013"
                                            />
                                        </div>

                                        {/* End */}
                                        <div className="form-group">
                                            <label className="form-label">End Date</label>

                                            <input
                                                type="text"
                                                name="end"
                                                className="form-input"
                                                value={education.end}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="2017"
                                            />
                                        </div>

                                        <div className="experience-checkbox">

                                            <input
                                                type="checkbox"
                                                id={`working-${index}`}
                                                name="currentlyStudying"
                                                checked={education.currentlyStudying}
                                                onChange={(e) => handleChange(index, e)}
                                                className="education-checkbox-input"
                                            />

                                            <label
                                                htmlFor={`working-${index}`}
                                                className="education-checkbox-label"
                                            >
                                                I’m currently studying here
                                            </label>

                                        </div>

                                        {/* CGPA / Percentage */}
                                        <div className="form-group">
                                            <label className="form-label">
                                                CGPA / Percentage
                                            </label>

                                            <input
                                                type="text"
                                                name="cgpa"
                                                className="form-input"
                                                value={education.cgpa}
                                                onChange={(e) => handleChange(index, e)}
                                                placeholder="8.5 CGPA or 85%"
                                            />
                                        </div>


                                    </div>



                                    {/* Accomplishments */}
                                    <div className="summary-section">

                                        <div className="summary-header">

                                            <label className="form-label">
                                                Highlights & coursework
                                            </label>

                                            <span className="character-count">
                                                {(education.highlights || "").length} chars
                                            </span>

                                        </div>

                                        <textarea
                                            className="summary-textarea"
                                            name="highlights"
                                            value={education.highlights}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder={`• Concentration in interaction design and cognitive psychology.
• Teaching assistant for Intro to HCI (2 semesters).
• Senior capstone: adaptive learning tool used by 400+ students.`}
                                        />

                                        {/* Yahan education ka form aayega */}
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



                    <div className="add-education">

                        <button
                            type="button"
                            className="add-education-btn"
                            onClick={handleAddEducation}
                        >
                            + Add Another education
                        </button>

                    </div>



                    {/* Form Footer */}
                    <FormFooter
                        onBack={() => navigate("/resume-builder/experience")}
                        onContinue={() => navigate("")}
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

                            {educations.map((education, index) => (

                                <div className="education-item" key={index}>

                                    <div className="education-header">

                                        <h4>
                                            {education.degree || "B.S. Human-Computer Interaction"}
                                        </h4>

                                        <span>
                                            {education.start || "2013"} -{" "}
                                            {education.currentlyStudying
                                                ? "Present"
                                                : (education.end || "2017")}
                                        </span>

                                    </div>

                                    <p className="education-school">
                                        {education.school || "Carnegie Mellon University"}
                                    </p>

                                    <p className="education-field">
                                        {education.field || "Computer Science"}
                                    </p>

                                    <p className="education-cgpa">
                                        {education.cgpa || "CGPA: 8.5 CGPA or 85%"}
                                    </p>

                                    <p className="education-location">
                                        {education.location || "Pittsburgh, USA"}
                                    </p>

                                </div>

                            ))}

                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
};

export default Education;