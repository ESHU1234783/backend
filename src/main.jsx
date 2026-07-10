import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ResumeProvider } from "./context/ResumeContext";

import "./index.css";
import "./css/global.css";
import "./css/components.css";
import "./css/pages.css";
import "./css/resume.css";
import "./css/responsive.css";
import "./css/Personal.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </BrowserRouter>
  </StrictMode>
);