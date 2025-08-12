
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Loader from "./components/Loader";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import WhoIsWatching from "./components/WhoIsWatching";
import Recruiter from "./pages/Recruiter";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MainLayout from "./components/Mainlayout";
import Certifications from "./pages/Certifications";

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const navigate = useNavigate();

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsLoading(true);
    }
  };

  const handleLoaderFinish = () => {
    setIsLoading(false);
    navigate("/profile");
  };

  return (
    <div
      className="h-screen w-screen bg-black text-white flex items-center justify-center"
      onClick={handleInteraction}
    >
      {!hasInteracted && (
        <h1 className="text-6xl animate-popIn glow-text">Sarthak Srivastava</h1>
      )}

      {isLoading && <Loader onFinish={handleLoaderFinish} />}

      {!isLoading && hasInteracted && (
        <MainLayout>
          <Routes>
            <Route path="/profile" element={<WhoIsWatching />} />
            <Route path="/profile/:name" element={<Landing />} />
            <Route path="/profile/recruiter" element={<Recruiter />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hire" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
