
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava } from "react-icons/fa";
import {
  SiRubyonrails,
  SiTypescript,
  SiPostgresql,
  SiKubernetes,
  SiSpringboot,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const mockSkills = [
  { name: "React", description: "Building interactive user interfaces.", category: "Frontend", icon: "FaReact" },
  { name: "Node.js", description: "Server-side JavaScript runtime.", category: "Backend", icon: "FaNodeJs" },
  { name: "Java", description: "Object-oriented programming language.", category: "Backend", icon: "FaJava" },
  { name: "Spring Boot", description: "Framework for production-ready Spring applications.", category: "Backend", icon: "SiSpringboot" },
  { name: "Ruby on Rails", description: "Web application framework for Ruby.", category: "Backend", icon: "SiRubyonrails" },
  { name: "AWS", description: "Cloud computing services.", category: "Cloud", icon: "FaAws" },
  { name: "Docker", description: "Containerization platform.", category: "DevOps", icon: "FaDocker" },
  { name: "Kubernetes", description: "Container orchestration system.", category: "DevOps", icon: "SiKubernetes" },
  { name: "PostgreSQL", description: "Open-source relational database.", category: "Databases", icon: "SiPostgresql" },
  { name: "TypeScript", description: "Superset of JavaScript with static typing.", category: "Languages", icon: "SiTypescript" },
  { name: "HTML5", description: "Structure and content for the Web.", category: "Frontend", icon: "SiHtml5" },
  { name: "CSS3", description: "Styling language for web pages.", category: "Frontend", icon: "SiCss3" },
];

const iconMap = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  FaJava: <FaJava />,
  SiRubyonrails: <SiRubyonrails />,
  SiTypescript: <SiTypescript />,
  SiPostgresql: <SiPostgresql />,
  SiKubernetes: <SiKubernetes />,
  SiSpringboot: <SiSpringboot />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

const categories = ["Frontend", "Backend", "Cloud", "DevOps", "Databases", "Languages"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? mockSkills
      : mockSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-10 px-4 ">
      <h2 className="text-3xl md:text-5xl font-bold text-white mt-28 mb-10 text-center tracking-wide ">
        🚀 My Skills
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
            selectedCategory === "All"
              ? "bg-red-600 text-white"
              : "bg-neutral-800 text-gray-300 hover:bg-red-700 hover:text-white"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-neutral-800 text-gray-300 hover:bg-red-700 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 p-5 flex flex-col items-center hover:scale-105 hover:shadow-red-500/30 transition-transform duration-300"
          >
            <div className="text-4xl text-red-500 mb-3">
              {iconMap[skill.icon]}
            </div>
            <h3 className="text-lg font-bold text-white mb-1 text-center">
              {skill.name}
            </h3>
            <p className="text-xs text-gray-400 text-center mb-3">
              {skill.description}
            </p>
            <span className="mt-auto px-3 py-1 rounded-full text-[10px] bg-red-600 text-white uppercase tracking-wider">
              {skill.category}
            </span>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="mt-10">
        <Link to="/" className="text-red-500 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Skills;
