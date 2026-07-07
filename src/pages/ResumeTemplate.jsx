import "../css/ResumeTemplate.css";

const ResumeTemplate = () => {
  return (
    <div className="resume-template">
      <div className="resume-container">
        <h2>Choose Your Resume Template</h2>

        <p className="subtitle">
          Select a template and enter your basic information to get started.
        </p>

        <form className="resume-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default ResumeTemplate;