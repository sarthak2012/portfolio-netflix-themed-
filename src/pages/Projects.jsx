import React, { useState, useEffect, useRef } from "react";

// Netflix-style data
const products = [
  {
    title: "Angular to React Migration",
    description:
      "Led the team in the migration from Angular to React, focusing on complex components and Formik for validations.",
    tech: ["ReactJS", "Ruby on Rails"],
    img: "https://placehold.co/600x400/141414/ffffff?text=React+Migration",
  },
  {
    title: "NHSPS Open Space Website",
    description:
      "Led the development of a complex website for NHSPS, focusing on a seamless user experience and high performance.",
    tech: ["Ruby on Rails", "React", "PostgreSQL"],
    img: "https://placehold.co/600x400/141414/ffffff?text=Healthcare+App",
  },
  {
    title: "Loan Origination Platform",
    description:
      "Implemented automated testing and led the development of a loan origination platform, improving response time by 25%.",
    tech: ["CI/CD", "Automated Testing", "API Gateway"],
    img: "https://placehold.co/600x400/141414/ffffff?text=Financial+Platform",
  },
  {
    title: "CRM Tool & Fundraising Platform",
    description:
      "Built a CRM tool to manage investor relationships and created a fundraising platform facilitating over $1M in investments.",
    tech: ["Ruby on Rails", "SQL", "MERN stack"],
    img: "https://placehold.co/600x400/141414/ffffff?text=CRM+System",
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
