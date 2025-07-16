import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="text-center text-white mt-20">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}
