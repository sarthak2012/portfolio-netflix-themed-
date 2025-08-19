
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaReact, FaAws, FaGitAlt, FaCuttlefish, FaJs, FaDatabase 
} from "react-icons/fa";
import { 
  SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, 
  SiWordpress, SiElementor, SiRubyonrails, SiHtml5, SiCss3, 
  SiVercel 
} from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import { SiVisualstudiocode } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";

const mockSkills = [
  // 🌐 Languages
  { name: "C/C++", description: "Efficient and foundational programming.", category: "Languages", icon: "FaCuttlefish" },
  { name: "JavaScript", description: "Dynamic and versatile web language.", category: "Languages", icon: "FaJs" },
  { name: "SQL", description: "Managing and querying databases.", category: "Languages", icon: "FaDatabase" },

  // 🎨 Frontend
  { name: "React.js", description: "Interactive UI development.", category: "Frontend", icon: "FaReact" },
  { name: "HTML5", description: "Structuring web content.", category: "Frontend", icon: "SiHtml5" },
  { name: "CSS3", description: "Styling and responsive layouts.", category: "Frontend", icon: "SiCss3" },
  { name: "Tailwind CSS", description: "Utility-first styling framework.", category: "Frontend", icon: "SiTailwindcss" },
  { name: "Bootstrap", description: "Prebuilt UI components.", category: "Frontend", icon: "SiBootstrap" },
  { name: "Material UI", description: "Modern React UI library.", category: "Frontend", icon: "GiMaterialsScience" },
  { name: "GSAP", description: "Animations for the web.", category: "Frontend", icon: MdSettingsApplications },
  // 🗄️ Databases
  { name: "MySQL", description: "Relational database system.", category: "Databases", icon: "SiMysql" },
  { name: "MongoDB", description: "NoSQL database for scalability.", category: "Databases", icon: "SiMongodb" },

  // ☁️ Cloud & Networking
  { name: "AWS", description: "Cloud services & deployment.", category: "Cloud", icon: "FaAws" },
  { name: "Networking Essentials", description: "Core networking concepts.", category: "Cloud", icon: "SiVercel" },

  // ⚙️ CMS
  { name: "WordPress", description: "CMS for website building.", category: "CMS", icon: "SiWordpress" },
  { name: "Divi", description: "WordPress page builder.", category: "CMS", icon: "SiWordpress" },
  { name: "Elementor", description: "Drag-and-drop page builder.", category: "CMS", icon: "SiElementor" },
  { name: "WPBakery", description: "WordPress visual composer.", category: "CMS", icon: "SiWordpress" },

  // 🛠️ Dev Tools
  { name: "Git/GitHub", description: "Version control & collaboration.", category: "Dev Tools", icon: "FaGitAlt" },
  { name: "VS Code", description: "Lightweight development IDE.", category: "Dev Tools",  icon: "SiVisualstudiocode" },

  // 💡 Core Concepts
  { name: "OOPS", description: "Object-Oriented Programming.", category: "Core Concepts", icon: "FaCuttlefish" },
  { name: "Agile/Scrum", description: "Team collaboration & sprints.", category: "Core Concepts", icon: "SiRubyonrails" },
  { name: "Responsive Design", description: "Mobile-first UI/UX.", category: "Core Concepts", icon: "DiResponsive" },

  // 🚀 Emerging Tech
  { name: "API Integration", description: "Connecting services & data.", category: "Emerging Tech", icon: "TbApi" },
  { name: "Cloud Basics", description: "Fundamentals of cloud computing.", category: "Emerging Tech", icon: "FaAws" },
];

const iconMap = {
  FaReact: <FaReact />,
  FaAws: <FaAws />,
  FaGitAlt: <FaGitAlt />,
  FaCuttlefish: <FaCuttlefish />,
  FaJs: <FaJs />,
  FaDatabase: <FaDatabase />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  GiMaterialsScience: <GiMaterialsScience />,
  MdSettingsApplications: <MdSettingsApplications />,
  SiWordpress: <SiWordpress />,
  SiElementor: <SiElementor />,
  SiRubyonrails: <SiRubyonrails />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiVercel: <SiVercel />,
  SiVisualstudiocode: <SiVisualstudiocode />,
  TbApi: <TbApi />,
  DiResponsive: <DiResponsive />
};

const categories = [
  "Languages", 
  "Frontend", 
  "Databases", 
  "Cloud", 
  "CMS", 
  "Dev Tools", 
  "Core Concepts", 
  "Emerging Tech"
];



const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // default to first category

  const filteredSkills = mockSkills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-10 px-auto ">
      <h2 className="text-3xl md:text-5xl font-bold text-white mt-10 mb-10 text-center tracking-wide ">
        🚀 My Skills
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
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