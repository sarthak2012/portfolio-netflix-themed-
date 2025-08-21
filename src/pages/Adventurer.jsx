import videoBg from "../assets/background.webm";
import sarthak from "../assets/sarthak.webp";
import { Link } from "react-router-dom";
import ProfilePage from "../components/ProfilePage";
import skills from "../assets/skills.webp";
import Experience from "../assets/Experience.webp";
import Certifications from "../assets/Certifications.webp";
import Projects from "../assets/Projects.webp";
import Contact from "../assets/Contact.webp";
import Learning from "../assets/Learning.webp";
import Logs from "../assets/Logs.webp";
import Grind from "../assets/Grind.webp";

const topPicks = [
  {
    label: "Skills",
    img: skills,
    link: "/skills",
  },
  {
    label: "Experience",
    img: Experience,
    link: "/work-experience",
  },
  {
    label: "Certifications",
    img: Certifications,
    link: "/certifications",
  },
  {
    label: "Projects",
    img: Projects,
    link: "/projects",
  },
  {
    label: "Contact Me",
    img: Contact,
    link: "/hire",
  },
];

const continueWatching = [
  {
    label: "Currently Learning",
    img: Learning,
    link: "/currently-learning",
  },
  {
    label: "Build Logs",
    img: Logs,
    link: "/build-logs",
  },
  {
    label: "Daily Grind",
    img: Grind,
    link: "/daily-grind",
  },
  {
    label: "Contact Me",
    img: Contact,
    link: "/hire",
  },
];

const Adventurer = () => {

return (
    <div className="w-full bg-gray-900 min-h-screen">
      <ProfilePage
        title="Sarthak Srivastava – Full-Stack Developer"
        description="Exploring new tech, building sleek web experiences, and solving problems one line of code at a time."
        videoBg={videoBg}
        topPicks={topPicks}
        continueWatching={continueWatching}
        role="Adventurer"
      />
    </div>
  );
};
export default Adventurer;