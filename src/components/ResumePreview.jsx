const ResumePreview = ({ formData }) => {

    return (

        <div className="preview-card">

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

                </div>
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

    );

};

export default ResumePreview;