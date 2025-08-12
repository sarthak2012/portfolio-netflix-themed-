// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import sarthak from "../assets/sarthak.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-80 backdrop-blur-md z-50">
      {/* Logo with link */}
      <Link to="/profile">
        <img src={sarthak} alt="Sarthak" className="h-10 cursor-pointer" />
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6 text-lg">
        <Link
          to="/profile/recruiter"
          className="hover:text-red-500 transition text-white"
        >
          Home
        </Link>
        <Link
          to="/work-experience"
          className="hover:text-red-500 transition text-white"
        >
          Professional
        </Link>
        <Link to="/skills" className="hover:text-red-500 transition text-white">
          Skills
        </Link>
        <Link
          to="/projects"
          className="hover:text-red-500 transition text-white"
        >
          Projects
        </Link>
        <Link
          to="/certifications"
          className="hover:text-red-500 transition text-white"
        >
          Certifications
        </Link>
        <Link to="/hire" className="hover:text-red-500 transition text-white">
          Hire Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
