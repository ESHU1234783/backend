const ResumeHeader = ({ step, title }) => {
    return (
        <>
            {/* Resume Builder Header */}
            <header className="resume-builder-header">
                <h1 className="builder-title">
                    Resume Builder
                </h1>
            </header>

            {/* Step Header */}
            <section className="step-header">

                <span className="step-count">
                    {step}
                </span>

                <h2 className="page-title">
                    {title}
                </h2>

            </section>
        </>
    );
};

export default ResumeHeader;