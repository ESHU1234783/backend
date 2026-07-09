import { Routes, Route, Navigate } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import ResumeTemplate from "./pages/ResumeTemplate";

import ResumeStart from "./pages/ResumeStart";

import MyResume from "./pages/MyResume";

import Personal from "./pages/Personal";


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
          element={<MyResume />}
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

      </Routes>

    </DefaultLayout>

  );
}

export default App;