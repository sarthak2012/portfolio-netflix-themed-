// src/pages/BuildDetail.jsx
import { useParams, Link } from "react-router-dom";

const buildLogs = [
  {
    id: 1,
    title: "Episode 1: The First Portfolio",
    description: "The pilot episode where it all began.",
    details: `I kicked things off with my very first portfolio site — built using React and TailwindCSS. 
    Think of it as my "origin story." The toughest challenge? Making it responsive and visually appealing while keeping performance smooth. 
    For the grand finale, I deployed it on Vercel, pushing it live in minutes like a season drop on Netflix.`
  },
  {
    id: 2,
    title: "Episode 2: APIs Unchained",
    description: "When backend met frontend.",
    details: `In this chapter, I built REST APIs with Node.js and Express. 
    It felt like directing multiple characters — routes, controllers, and middlewares — all playing their part. 
    With Postman as my testing ground, I tackled CORS, authentication, and error handling like plot twists to keep everything secure and smooth.`
  },
  {
    id: 3,
    title: "Episode 3: Netflix-Inspired Portfolio",
    description: "Recreating the binge-worthy experience.",
    details: `This was the highlight episode. I designed my portfolio to look and feel like Netflix, 
    complete with dynamic routing, sleek UI components, and Tailwind-powered styling. 
    To give it that "recommendation engine" vibe, I integrated mock APIs for personalized picks. 
    It turned my portfolio into a binge-worthy project showcase.`
  }
];

export default function BuildDetail() {
  const { id } = useParams();
  const log = buildLogs.find((item) => item.id.toString() === id);

  if (!log) {
    return <div className="text-center mt-10 text-xl text-red-500">Episode not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-black bg-opacity-90 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold mb-3 text-red-600">{log.title}</h1>
      <p className="text-gray-400 mb-6 italic">{log.description}</p>
      <div className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">{log.details}</div>

      <div className="mt-8">
        <Link
          to="/build-logs"
          className="text-red-500 hover:underline"
        >
          ← Back to Build Logs
        </Link>
      </div>
    </div>
  );
}
