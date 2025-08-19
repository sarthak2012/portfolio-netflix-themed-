import internship from "../assets/Internship.webp";
import learn from "../assets/learn.webp";
import algo from "../assets/algo.webp";
import Collaboration from "../assets/Collaboration.webp";
import debug from "../assets/debug.webp";
import wekend from "../assets/wekend.webp";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const internshipItems = [
  {
    title: "9-to-5 Internship",
    description: "Working on assigned projects, attending stand-ups, and collaborating with the team.",
    img: internship,
  },
  {
    title: "Collaboration & Reviews",
    description: "Code reviews, pair programming, and mentoring sessions during internship hours.",
    img: Collaboration,
  },
  {
    title: "Learning New Tech at Work",
    description: "Exploring frameworks, APIs, and tools relevant to internship projects.",
    img: learn,
  },
];

const personalItems = [
  {
    title: "Weekend Experiments",
    description: "Dabbling with React, Tailwind, or new frameworks when time permits to explore ideas or try out new concepts.",
    img: wekend,
  },
  {
    title: "Debugging & Refactoring",
    description: "Improving code quality in personal projects and side projects.",
    img: debug,
  },
  {
    title: "Problem Solving & Practice",
    description: "Occasional algorithm practice or debugging sessions to sharpen coding skills and understand complex problems.",
    img: algo,
  },
];

function ScrollRow({ items, title }) {
  const rowRef = useRef();

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-12 relative mx-6 md:mx-20">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">{title}</h2>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07 }}
              className="relative min-w-[250px] md:min-w-[300px] h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Image with overlay */}
              <img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Text content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default function DailyGrind() {
  return (
    <div className="min-h-screen bg-black text-white py-16 mt-[400px]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-red-600">
        💻 Daily Grind
      </h1>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto text-lg md:text-xl">
        Peek into my 9-to-5 internship routine and personal coding side projects, workflows, and tools I use every day.
      </p>

      {/* Internship Section */}
      <ScrollRow items={internshipItems} title="Internship Routine" />

      {/* Personal Projects Section */}
      <ScrollRow items={personalItems} title="Occasional Coding Experiments" />
    </div>
  );
}
