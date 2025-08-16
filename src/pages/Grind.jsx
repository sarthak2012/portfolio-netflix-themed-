import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const internshipItems = [
  {
    title: "9-to-5 Internship",
    description: "Working on assigned projects, attending stand-ups, and collaborating with the team.",
    img: "https://picsum.photos/seed/internship/400/250",
  },
  {
    title: "Collaboration & Reviews",
    description: "Code reviews, pair programming, and mentoring sessions during internship hours.",
    img: "https://picsum.photos/seed/collab/400/250",
  },
  {
    title: "Learning New Tech at Work",
    description: "Exploring frameworks, APIs, and tools relevant to internship projects.",
    img: "https://picsum.photos/seed/worktech/400/250",
  },
];

const personalItems = [
  {
    title: "Morning Coding Session",
    description: "Focusing on personal projects and skill-building before starting work.",
    img: "https://picsum.photos/seed/morning/400/250",
  },
  {
    title: "Debugging & Refactoring",
    description: "Improving code quality in personal projects and side projects.",
    img: "https://picsum.photos/seed/debug/400/250",
  },
  {
    title: "Evening Side Projects",
    description: "Building personal apps, experimenting with React, Tailwind, and other tech stacks.",
    img: "https://picsum.photos/seed/sideproject/400/250",
  },
];

function ScrollRow({ items, title }) {
  const rowRef = useRef();

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 ">{title}</h2>
      <div className="relative">
        <div
          ref={rowRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="min-w-[250px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default function DailyGrind() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 mt-[300px]">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">💻 Daily Grind</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
        A look at my 9-to-5 internship routine and personal coding habits, workflows, and tools I use day-to-day.
      </p>

      {/* Internship Section */}
      <ScrollRow items={internshipItems} title="Internship Routine" />

      {/* Personal Projects Section */}
      <ScrollRow items={personalItems} title="Personal Projects & Side Hustles" />
    </div>
  );
}
