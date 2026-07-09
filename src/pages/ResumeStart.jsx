import { FiPlusCircle, FiUploadCloud } from "react-icons/fi";
import { LuFileUp } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ResumeStart() {

    const navigate = useNavigate();

    const handleCreateResume = () => {
        navigate("/resume-builder/personal-info");

    };

    return (

        <section className="resume-start-page">

            {/* Page Header */}

            <div className="page-header">

                <h1 className="page-title">

                    How Would You Like to Get Started?

                </h1>

                <p className="page-description">

                    Our AI engine works best when it has a foundation to build upon.
                    Choose an option to begin crafting your professional story.

                </p>

            </div>

            {/* Cards */}

            <div className="resume-start-grid">

                {/* Create Resume */}

                <div className="start-card">

                    <div className="start-icon">

                        <FiPlusCircle size={20} color="#5A5A5A" />

                    </div>

                    <h3>

                        Create a New Resume

                    </h3>

                    <p>

                        Start from scratch with step-by-step guidance from our
                        career experts and AI.

                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={handleCreateResume}
                    >

                        Create New

                    </button>

                </div>

                {/* Upload Resume */}

                <div className="start-card upload-card">

                    <div className="start-icon">

                        <LuFileUp size={18} color="#FFFFFF" />

                    </div>

                    <h3>

                        Upload Existing Resume

                    </h3>

                    <p>

                        Import your current resume and let our AI optimize it
                        for modern standards.

                    </p>

                    <label className="upload-box">

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            hidden
                        />

                        <FiUploadCloud />

                        <span>

                            Drop your resume here or
                            <strong> Browse Files</strong>

                        </span>

                        <small>

                            Supports PDF, DOCX (Max 10MB)

                        </small>

                    </label>

                </div>

            </div>

        </section>

    );

}

export default ResumeStart;