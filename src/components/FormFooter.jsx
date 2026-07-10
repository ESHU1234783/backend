const FormFooter = ({
    onBack,
    onContinue,
    backText = "Back",
    continueText = "Save & Continue",
}) => {
    return (
        <div className="form-footer">

            <button
                type="button"
                className="back-btn"
                onClick={onBack}
            >
                <span className="back-icon">&#8249;</span>

                <span className="back-text">
                    {backText}
                </span>
            </button>

            <button
                type="button"
                className="continue-btn"
                onClick={onContinue}
            >
                <span className="continue-text">
                    {continueText}
                </span>

                <span className="continue-icon">
                    &#8250;
                </span>
            </button>

        </div>
    );
};

export default FormFooter;