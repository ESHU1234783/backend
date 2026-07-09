import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeTemplate from "../pages/ResumeTemplate";
import Personal from "../pages/Personal";
import Experience from "../pages/Experience";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeTemplate />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;