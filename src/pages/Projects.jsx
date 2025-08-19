import React, { useState, useEffect, useRef } from "react";

// Netflix-style data
const products = [
{
    title: "School Management System",
    description:
      "Architected and developed a MERN-based school management app with full CRUD admin dashboard for announcements, academic planners, admissions, faculty, and applications.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    img: "https://placehold.co/600x400/141414/ffffff?text=School+System",
  },
  {
    title: "Portfolio Generation Website",
    description:
      "Collaborated in a 4-member team to build a portfolio builder using Django backend with HTML, CSS, and JS frontend. Created 10+ reusable React components for customization.",
    tech: ["Django", "React", "HTML5", "CSS", "JavaScript"],
    img: "https://placehold.co/600x400/141414/ffffff?text=Portfolio+Builder",
  },
  {
    title: "Behance-Inspired Platform",
    description:
      "Led frontend development of a creative showcase platform using React and Tailwind. Added features for content uploads, likes, and user interactions.",
    tech: ["React", "TailwindCSS"],
    img: "https://placehold.co/600x400/141414/ffffff?text=Creative+Platform",
  },
];

// Netflix-style Product Card
const ProductCard = ({ product, inView, delay }) => {
  return (
    <div
      style={{ transitionDelay: delay }}
      className={`
        bg-[#141414] rounded-lg overflow-hidden
        transform transition-all duration-700 ease-in-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-[0_0_15px_rgba(229,9,20,0.7)]
      `}
    >
      <img
        src={product.img}
        loading="lazy"
        alt={`Preview of ${product.title}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">
          {product.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tech.map((techItem, i) => (
            <span
              key={i}
              className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [inViewStates, setInViewStates] = useState(
    new Array(products.length).fill(false)
  );
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setInViewStates((prevStates) => {
              const newStates = [...prevStates];
              newStates[index] = true;
              return newStates;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mt-80 mb-4">
          My Work
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my professional experience and key projects,
          highlighting technical skills and contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((prod, idx) => (
          <div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            data-index={idx}
          >
            <ProductCard
              product={prod}
              inView={inViewStates[idx]}
              delay={`${idx * 150}ms`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
