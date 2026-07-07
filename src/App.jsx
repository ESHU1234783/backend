import { Route, Routes } from "react-router-dom";
import ResumeTemplate from "./pages/ResumeTemplate";


function App() {
  return (
      <Routes>
        <Route path="/" element={<ResumeTemplate />} />
      </Routes>
      )
}

export default App;