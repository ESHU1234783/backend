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

    navigate("/resume-builder/start");

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

      {/* ================= Template List ================= */}

      <div className="template-list">

        {

          templates.map((template) => (

            <div

              key={template.id}

              className={
                selectedTemplate === template.id
                  ?
                  "template-card active"
                  :
                  "template-card"
              }

              onClick={() =>
                setSelectedTemplate(template.id)
              }

            >

              {/* Selection Circle */}

              <div className="template-select">

                {

                  selectedTemplate === template.id &&

                  <div className="template-dot"></div>

                }

              </div>

              {/* Resume Preview */}

              <div className="template-image">

                <img

                  src={template.image}

                  alt={template.name}

                />

              </div>

              {/* Footer */}

              <div className="template-content">

                <div className="template-top">

                  <h3>

                    {template.name}

                  </h3>

                  {

                    template.ats &&

                    <span className="ats-tag">

                      ATS FRIENDLY

                    </span>

                  }

                </div>

                <p>

                  {template.description}

                </p>

              </div>

            </div>

          ))

        }

      </div>

      {/* ================= Next Button ================= */}

      <div className="template-action">

        <button

          className={
            selectedTemplate
              ?
              "btn btn-primary"
              :
              "btn btn-disabled"
          }

          disabled={!selectedTemplate}

          onClick={handleNext}

        >

          Next

          <FiArrowRight />

        </button>

      </div>

    </section>

  );

}