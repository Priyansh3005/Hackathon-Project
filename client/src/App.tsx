import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/Landing/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Other routes will be added later */}
    </Routes>
  );
}

