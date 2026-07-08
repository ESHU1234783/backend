import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeTemplate from "../pages/ResumeTemplate";
import Personal from "../pages/Personal";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeTemplate />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;