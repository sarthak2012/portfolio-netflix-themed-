import { motion } from "framer-motion";
import CMS from "../assets/cms.webp"
import Frontend from "../assets/frontend.webp"
import Backend from "../assets/backend.webp"
import Framer from "../assets/frammer.webp"
import API from "../assets/api.webp"
const learningTopics = [
  {
    title: "CMS Development",
    description: "Hands-on with WordPress, Elementor, Divi, and WPBakery for modern, responsive websites.",
    img: CMS,
    stack: ["WordPress", "Elementor", "Divi"]
  },
  {
    title: "Frontend Development",
    description: "React.js, Tailwind CSS, and modern UI/UX for dynamic, user-friendly interfaces.",
    img: Frontend,
    stack: ["React", "Tailwind", "UI/UX"]
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, MongoDB & MySQL for building scalable backend systems.",
    img: Backend,
    stack: ["Node.js", "Express", "MongoDB"]
  },
  {
    title: "Framer Motion/GSAP",
    description: "Creating smooth animations for React apps.",
    img: Framer,
    stack: ["Framer Motion", "GSAP"]
  },
  {
    title: "API Integration",
    description: "Integrating RESTful APIs and third-party services for seamless functionality.",
    img: API,
    stack: ["REST API", "Third-Party API"]
  },
];

export default function Learning() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-2 text-center text-red-600 relative mt-96">
        🎓 Currently Learning
        <span className="block h-1 w-24 bg-red-600 mt-1 mx-auto rounded-full"></span>
      </h1>
      <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">
        Here’s what I’m diving into right now — the latest frameworks, tools, and technologies to keep my skills sharp.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {learningTopics.map((topic, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.06 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer relative"
          >
            <div className="relative group">
              <img
                src={topic.img}
                alt={topic.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{topic.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-red-600 text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional See All Topics Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-500 transition font-semibold shadow-lg">
          See All Topics
        </button>
      </div>
    </div>
  );
}
