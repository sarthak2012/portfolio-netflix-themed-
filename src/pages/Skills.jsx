import React, { useState } from 'react';
import { Link } from "react-router-dom";
// Import the icons you plan to use from react-icons.
// This is a minimal set to demonstrate the component.
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiKubernetes, SiSpringboot, SiHtml5, SiCss3 } from 'react-icons/si';

// This is mock data to make the component runnable.
// In your actual project, this would come from your `getSkills` function.
const mockSkills = [
  {
    name: "React",
    description: "Building interactive user interfaces.",
    category: "Frontend",
    icon: "FaReact"
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime.",
    category: "Backend",
    icon: "FaNodeJs"
  },
  {
    name: "Java",
    description: "Object-oriented programming language.",
    category: "Backend",
    icon: "FaJava"
  },
  {
    name: "Spring Boot",
    description: "Framework for creating standalone, production-grade Spring applications.",
    category: "Backend",
    icon: "SiSpringboot"
  },
  {
    name: "Ruby on Rails",
    description: "Web application framework for Ruby.",
    category: "Backend",
    icon: "SiRubyonrails"
  },
  {
    name: "AWS",
    description: "Cloud computing services.",
    category: "Cloud",
    icon: "FaAws"
  },
  {
    name: "Docker",
    description: "Containerization platform.",
    category: "DevOps",
    icon: "FaDocker"
  },
  {
    name: "Kubernetes",
    description: "Container orchestration system.",
    category: "DevOps",
    icon: "SiKubernetes"
  },
  {
    name: "PostgreSQL",
    description: "Powerful, open-source relational database.",
    category: "Databases",
    icon: "SiPostgresql"
  },
  {
    name: "TypeScript",
    description: "Superset of JavaScript with static typing.",
    category: "Languages",
    icon: "SiTypescript"
  },
  {
    name: "HTML5",
    description: "Structure and content for the Web.",
    category: "Frontend",
    icon: "SiHtml5"
  },
  {
    name: "CSS3",
    description: "Styling language for web pages.",
    category: "Frontend",
    icon: "SiCss3"
  },
];

// A map to link string icon names from the data to their actual React components.
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

// The main Skills component.
const Skills = () => {
  // Use a state hook to hold the skills data.
  // We're using the mock data directly for this self-contained example.
  const [skillsData] = useState(mockSkills);

  // Group skills by category for a structured display.
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    // We're using a <style> tag here to define the keyframes for the letter animation.
    // In a real project, this would likely be in a separate CSS file.
    <div className="bg-gray-900 text-white min-h-screen p-8 md:p-12">
      
      <div className="max-w-auto mx-auto">
        <h2 className="font-extrabold text-center py-96 text-white">My Skills</h2>
        <div className="space-y-12">
          {Object.keys(skillsByCategory).map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="text-3xl font-bold text-red-500 mb-6 border-b border-gray-700 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skillsByCategory[category].map((skill, idx) => (
                  <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl text-red-500">{iconMap[skill.icon]}</div>
                      <h3 className="text-2xl font-bold">
                        {skill.name.split('').map((letter, i) => (
                          <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                            {letter === " " ? "\u00A0" : letter}
                          </span>
                        ))}
                      </h3>
                    </div>
                    <p className="text-gray-400 mt-2">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
