import { Routes, Route, Navigate } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import ResumeTemplate from "./pages/ResumeTemplate";

import ResumeStart from "./pages/ResumeStart";

import Personal from "./pages/Personal";

import cors from "cors"
import Experience from "./pages/Experience";

import Education from "./pages/Education";


function App() {

  return (

    <DefaultLayout>

      <Routes>

        {/* Default Route */}

        <Route
          path="/"
          element={<Navigate to="/resume-builder" replace />}
        />

        {/* Resume Builder */}

        <Route
          path="/resume-builder"
          element={<ResumeTemplate />}
        />

        {/* My Resume */}

        <Route
          path="/resume-builder/my-resume"
          element={<h1>My Resume</h1>}
        />

        {/* Resume Start */}

        <Route
          path="/resume-builder/start"
          element={<ResumeStart />}
        />

        <Route
          path="/resume-builder/personal-info"
          element={<Personal />}
        />

        <Route
          path="/resume-builder/experience"
          element={<Experience />}
        />

         <Route
          path="/resume-builder/education"
          element={<Education />}
        />


      </Routes>

    </DefaultLayout>

  );
}

export default App;