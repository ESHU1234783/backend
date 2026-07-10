import { Routes, Route, Navigate } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import ResumeTemplate from "./pages/ResumeTemplate";

import ResumeStart from "./pages/ResumeStart";

import MyResume from "./pages/MyResume";

import Personal from "./pages/Personal";

import Experience from "./pages/Experience";


function App() {

  return (

    <DefaultLayout>

      <Routes>

        {/* Default Route */}

        <Route
          path="/"
          element={<Navigate to="/" replace />}
        />

        {/* Resume Builder */}

        <Route
          path="/resume-builder"
          element={<ResumeTemplate />}
        />

        {/* My Resume */}

        <Route
          path="/my-resume"
          element={<MyResume />}
        />

        {/* Resume Start */}

        <Route
          path="/start"
          element={<ResumeStart />}
        />

        <Route
          path="/personal"
          element={<Personal />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

      </Routes>

    </DefaultLayout >

  );
}

export default App;