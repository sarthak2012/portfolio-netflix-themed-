import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import episode1 from "../assets/episode1.webp";
import episode2 from "../assets/episode2.webp";
import episode3 from "../assets/episode3.webp";

const buildLogs = [
  {
    id: 1,
    title: "Episode 1: The First Portfolio",
    description: "The pilot episode where it all began.",
    details: `I kicked things off with my very first portfolio site — built using React and TailwindCSS. 
Think of it as my "origin story." The toughest challenge? Making it responsive and visually appealing while keeping performance smooth. 
For the grand finale, I deployed it on Vercel, pushing it live in minutes like a season drop on Netflix.`,
    img: episode1,
    stack: ["React", "TailwindCSS", "Vercel"],
  },
  {
    id: 2,
    title: "Episode 2: APIs Unchained",
    description: "When backend met frontend.",
    details: `In this chapter, I built REST APIs with Node.js and Express. 
It felt like directing multiple characters — routes, controllers, and middlewares — all playing their part. 
With Postman as my testing ground, I tackled CORS, authentication, and error handling like plot twists to keep everything secure and smooth.`,
    img: episode2,
    stack: ["Node.js", "Express", "Postman"],
  },
  {
    id: 3,
    title: "Episode 3: Netflix-Inspired Portfolio",
    description: "Recreating the binge-worthy experience.",
    details: `This was the highlight episode. I designed my portfolio to look and feel like Netflix, 
complete with dynamic routing, sleek UI components, and Tailwind-powered styling. 
To give it that "recommendation engine" vibe, I integrated mock APIs for personalized picks. 
It turned my portfolio into a binge-worthy project showcase.`,
    img: episode3,
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
];

export default function BuildDetail() {
  const { id } = useParams();
  const log = buildLogs.find((item) => item.id.toString() === id);

  if (!log) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        Episode not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner Image with gradient overlay */}
      <div className="relative w-full h-80 md:h-96">
        <img
          src={log.img}
          alt={log.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Episode info panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto p-6 md:-mt-20 bg-gradient-to-t from-black/90 to-black rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-extrabold mb-2 text-red-600">
          {log.title}
        </h1>
        <p className="text-gray-400 italic mb-4 mt-5">{log.description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {log.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-red-800 rounded-full text-sm text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Details / Episode breakdown */}
        <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
          {log.details}
        </p>

        {/* Back button */}
        <div className="mt-8">
          <Link
            to="/build-logs"
            className="text-red-500 hover:text-red-400 font-semibold"
          >
            ← Back to Build Logs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
