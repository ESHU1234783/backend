import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./css/global.css";
import "./css/components.css";
import "./css/pages.css";
import "./css/resume.css";
import "./css/responsive.css";
import "./css/Personal.css";

import App from "./App.jsx";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"></link>

  createRoot(document.getElementById("root")).render(

  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);