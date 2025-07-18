import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./Login";
import SignUp from "./signUp";
import GamesPage from "./pages/games";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="*" element={<div className="text-center text-white mt-20">Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
