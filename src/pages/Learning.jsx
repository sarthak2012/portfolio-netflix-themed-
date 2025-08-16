import { motion } from "framer-motion";

const learningTopics = [
  {
    title: "Next.js 14",
    description: "Server-side rendering, routing, and API integration.",
    img: "https://picsum.photos/seed/nextjs/400/250",
  },
  {
    title: "GraphQL APIs",
    description: "Query, mutation, and subscription handling in GraphQL.",
    img: "https://picsum.photos/seed/graphql/400/250",
  },
  {
    title: "AI & ML",
    description: "Building AI-powered apps and exploring machine learning models.",
    img: "https://picsum.photos/seed/ai/400/250",
  },
  {
    title: "Framer Motion",
    description: "Smooth animations for React apps.",
    img: "https://picsum.photos/seed/framer/400/250",
  },
  {
    title: "TypeScript",
    description: "Strongly typed JS for safer code.",
    img: "https://picsum.photos/seed/ts/400/250",
  },
];

export default function Learning() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center pt-10">🎓 Currently Learning</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
        Here’s what I’m diving into right now — the latest frameworks, tools, and technologies to keep my skills sharp.
      </p>

      {/* Horizontal Scroll Section */}
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {learningTopics.map((topic, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer"
          >
            <img
              src={topic.img}
              alt={topic.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{topic.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{topic.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add “See All Topics” Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-500 transition">
          See All Topics
        </button>
      </div>
    </div>
  );
}
