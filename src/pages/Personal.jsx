import { useState } from "react";
import axios from "axios";
import aiIcon from "../assets/SVG.png";
import redoIcon from "../assets/uil_redo.png";

const Personal = () => {
    const [formData, setFormData] = useState({
        fullName: "Alex Morgan",
        jobTitle: "Senior Product Designer",
        email: "alex@morgan.design",
        phone: "+1 (415) 555-0142",
        location: "San Francisco, CA",
        portfolio: "morgan.design",
        summary:
            "Product designer with 8+ years shipping consumer and B2B SaaS products. I lead cross-functional design at scale, partnering with engineering and research to turn ambiguity into clear, beautiful experiences.",
    });

    const [showImproveAI, setShowImproveAI] = useState(true);
    const [leftButton, setLeftButton] = useState("");
    const [originalSummary, setOriginalSummary] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Improve Summary with AI
    const handleImproveSummary = async () => {
        try {
            setLoading(true);

            // Save original summary
            setOriginalSummary(formData.summary);

            const response = await axios.post(
                "http://localhost:8000/api/ai/generate-summary",
                {
                    fullName: formData.fullName,
                    jobTitle: formData.jobTitle,
                    email: formData.email,
                    phone: formData.phone,
                    location: formData.location,
                    portfolio: formData.portfolio,
                    summary: formData.summary,
                }
            );

            if (response.data.success) {
                setFormData((prev) => ({
                    ...prev,
                    summary: response.data.summary,
                }));

                setShowImproveAI(true);
                setLeftButton("Keep Original");
            }
        } catch (error) {

    if (error.response?.status === 503) {
        alert("AI server is busy. Please try again after a few seconds.");
    } else {
        alert(error.response?.data?.message || "Something went wrong.");
    }


        } finally {
            setLoading(false);
        }
    };

    // Keep Original
    const handleKeepOriginal = () => {
        setFormData((prev) => ({
            ...prev,
            summary: originalSummary,
        }));

        setShowImproveAI(false);
        setLeftButton("Keep Improved");
    };

    // Keep Improved
    const handleKeepImproved = () => {
        setLeftButton("");
        setShowImproveAI(false);
    };

    return (
        <main className="personal-page">
            {/* Main content wrapper */}
            <div className="personal-content">
                {/* Step Information */}
                <section className="step-header">
                    <span className="step-count">STEP 1 OF 8</span>
                    <h2 className="page-title">Personal Details</h2>
                </section>

                {/* Main Layout */}
                <section className="personal-layout">
                    {/* Left Form Card */}
                    <div className="form-card">
                        {/* Form Container */}
                        <div className="form-container">
                            {/* Personal Information Form */}
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

                                {/* Email */}
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

                                {/* Phone */}
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
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
                                <div className="summary-header">
                                    <label className="form-label">
                                        Professional Summary
                                    </label>

                                    <span className="character-count">
                                        {formData.summary.length} chars
                                    </span>
                                </div>

                                <textarea
                                    className="summary-textarea"
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Improve with AI */}
                            <div
                                className="ai-section"
                                style={{
                                    justifyContent:
                                        leftButton === ""
                                            ? "flex-end"
                                            : leftButton === "Keep Original"
                                            ? "space-between"
                                            : "flex-start",
                                }}
                            >
                                {/* Left Button */}
                                {leftButton !== "" && (
                                    <span
                                        className="ai-improve"
                                        onClick={
                                            leftButton === "Keep Original"
                                                ? handleKeepOriginal
                                                : handleKeepImproved
                                        }
                                    >
                                        <img
                                            src={redoIcon}
                                            alt="Redo"
                                            className="keep-icon"
                                        />
                                        <span>{leftButton}</span>
                                    </span>
                                )}

                                {/* Right Button */}
                                {showImproveAI && (
                                    <span
                                        className="ai-improve"
                                        onClick={!loading ? handleImproveSummary : undefined}
                                        style={{
                                            cursor: loading ? "not-allowed" : "pointer",
                                            opacity: loading ? 0.7 : 1,
                                        }}
                                    >
                                        <img
                                            src={aiIcon}
                                            alt="AI"
                                            className="ai-icon"
                                        />
                                        <span>
                                            {loading ? "Generating..." : "Improve with AI"}
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div> {/* form-container */}

                        {/* Form Footer */}
                        <div className="form-footer">
                            {/* Back Button */}
                            <button type="button" className="back-btn">
                                <span className="back-icon">&#8249;</span>
                                <span className="back-text">Back</span>
                            </button>

                            {/* Save & Continue Button */}
                            <button type="button" className="continue-btn">
                                <span className="continue-text">
                                    Save & Continue
                                </span>

                                <span className="continue-icon">
                                    &#8250;
                                </span>
                            </button>
                        </div>
                    </div> {/* form-card */}

                    {/* Right Preview Card */}
                    <div className="preview-card">
                        {/* Preview content goes here */}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Personal;