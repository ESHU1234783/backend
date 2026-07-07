import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeTemplate from "../pages/ResumeTemplate";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;