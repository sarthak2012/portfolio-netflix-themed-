import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buildLogs = [
  {
    id: 1,
    title: "Episode 1: Portfolio v1",
    description:
      "How I designed and deployed my first developer portfolio with React and Tailwind.",
    img: "https://picsum.photos/seed/portfolio/400/250",
    link: "/build-logs/1",   
  },
  {
    id: 2,
    title: "Episode 2: API Integration",
    description:
      "Breaking down how I built and connected REST APIs with Node.js and Express.",
    img: "https://picsum.photos/seed/api/400/250",
    link: "/build-logs/2",   
  },
  {
    id: 3,
    title: "Episode 3: Netflix-Inspired Portfolio",
    description:
      "The story of building this Netflix-themed portfolio using React, Vite, and Tailwind.",
    img: "https://picsum.photos/seed/netflix/400/250",
    link: "/build-logs/3",   
  },
];

export default function BuildLogs() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        🎬 Build Logs – Behind the Scenes
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {buildLogs.map((log, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={log.img}
              alt={log.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{log.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{log.description}</p>
              <Link
                to={log.link}
                className="mt-3 inline-block text-sm text-red-600 hover:text-blue-300"
              >
                Watch Log →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
