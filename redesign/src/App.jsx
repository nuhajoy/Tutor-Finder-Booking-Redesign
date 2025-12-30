import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import TutorFinderForm from "./pages/TutorFinderForm";
import TutorProfile from "./pages/TutorProfile";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-tutor" element={<FindTutor />} /> {/* Direct list */}
        <Route path="/tutor-finder" element={<TutorFinderForm />} />{" "}
        {/* Guided form */}
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
   
  );
}
