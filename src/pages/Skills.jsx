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
  {
    name: "React",
    description: "Building interactive user interfaces.",
    category: "Frontend",
    icon: "FaReact",
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime.",
    category: "Backend",
    icon: "FaNodeJs",
  },
  {
    name: "Java",
    description: "Object-oriented programming language.",
    category: "Backend",
    icon: "FaJava",
  },
  {
    name: "Spring Boot",
    description:
      "Framework for creating standalone, production-grade Spring applications.",
    category: "Backend",
    icon: "SiSpringboot",
  },
  {
    name: "Ruby on Rails",
    description: "Web application framework for Ruby.",
    category: "Backend",
    icon: "SiRubyonrails",
  },
  {
    name: "AWS",
    description: "Cloud computing services.",
    category: "Cloud",
    icon: "FaAws",
  },
  {
    name: "Docker",
    description: "Containerization platform.",
    category: "DevOps",
    icon: "FaDocker",
  },
  {
    name: "Kubernetes",
    description: "Container orchestration system.",
    category: "DevOps",
    icon: "SiKubernetes",
  },
  {
    name: "PostgreSQL",
    description: "Powerful, open-source relational database.",
    category: "Databases",
    icon: "SiPostgresql",
  },
  {
    name: "TypeScript",
    description: "Superset of JavaScript with static typing.",
    category: "Languages",
    icon: "SiTypescript",
  },
  {
    name: "HTML5",
    description: "Structure and content for the Web.",
    category: "Frontend",
    icon: "SiHtml5",
  },
  {
    name: "CSS3",
    description: "Styling language for web pages.",
    category: "Frontend",
    icon: "SiCss3",
  },
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

const categories = [
  "Frontend",
  "Backend",
  "Cloud",
  "DevOps",
  "Databases",
  "Languages",
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills by category
  const filteredSkills =
    selectedCategory === "All"
      ? mockSkills
      : mockSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center mt-8 py-8 px-2">
      <h2 className="text-2xl md:text-4xl font-bold text-white mt-28 mb-7 text-center">
        🚀 My Skills
      </h2>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          } transition`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            } transition`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <div className="text-3xl md:text-4xl mb-2 text-blue-400">
              {iconMap[skill.icon]}
            </div>
            <h3 className="text-base md:text-lg font-bold text-white mb-1 text-center">
              {skill.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-300 text-center">
              {skill.description}
            </p>
            <span className="mt-2 px-2 py-0.5 rounded text-[10px] bg-blue-700 text-white">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/" className="text-blue-400 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Skills;
