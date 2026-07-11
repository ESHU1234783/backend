import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import templateImage from "../assets/images/template.png"; // Resume preview image

export default function ResumeTemplate() {

  const templates = [

    {
      id: 1,
      name: "Professional",
      image: templateImage,
      ats: true,
      description:
        "Classic structure designed for corporate roles and traditional industries.",
    },

  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const navigate = useNavigate();

  const handleNext = () => {

    if (!selectedTemplate) return;

    navigate("/start");

  };

  return (

    <section className="template-page">

      {/* ================= Header ================= */}

      <div className="page-header">

        <h1 className="page-title">

          Choose Your Resume Template

        </h1>

        <p className="page-description">

          Select from our collection of premium, AI-optimized templates designed to pass through applicant tracking systems and impress hiring managers.

        </p>

      </div>

      {/* ================= Template Section ================= */}

      <div
        className={
          selectedTemplate === 1
            ? "template-section active"
            : "template-section"
        }
        onClick={() =>
          setSelectedTemplate(
            selectedTemplate === 1 ? null : 1
          )
        }
      >

        <div className="template-top">

          {/* Selection Circle */}

          <div className="template-select">

            {
              selectedTemplate === 1 &&

              <div className="template-dot"></div>
            }

          </div>

          {/* Resume Image */}

          <div className="template-image">

            <img
              src={templateImage}
              alt="Resume Template"
            />

          </div>

        </div>

        <div className="template-bottom">

          <div className="template-info-header">

            <h3 className="template-title">
              Professional
            </h3>

            <span className="ats-tag">
              ATS FRIENDLY
            </span>

          </div>

          <p className="template-description">
            Classic structure designed for corporate roles and traditional industries.
          </p>

        </div>

      </div>


      {/* ================= Next Button ================= */}

      <div className="template-action">

        <button
          className={
            selectedTemplate
              ? "btn btn-primary"
              : "btn btn-disabled"
          }
          disabled={!selectedTemplate}
          onClick={handleNext}
        >

          Next

          <FiArrowRight className="btn-icon" />

        </button>

      </div>

    </section>
  );
}