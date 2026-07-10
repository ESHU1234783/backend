import aiIcon from "../assets/SVG.png";
import redoIcon from "../assets/uil_redo.png";

const AIButton = ({
    leftButton,
    showImproveAI,
    handleImproveSummary,
    handleKeepOriginal,
    handleKeepImproved,
}) => {
    return (
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
                        alt=""
                        className="ai-icon"
                    />

                    <span>{leftButton}</span>

                </span>
            )}

            {/* Right Button */}

            {showImproveAI && (
                <span
                    className="ai-improve"
                    onClick={handleImproveSummary}
                >
                    <img
                        src={aiIcon}
                        alt=""
                        className="ai-icon"
                    />

                    <span>
                        Improve with AI
                    </span>

                </span>
            )}
        </div>
    );
};

export default AIButton;