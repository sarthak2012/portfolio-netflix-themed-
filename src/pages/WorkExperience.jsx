import { useState } from "react";

const App = () => {
  const briefcaseSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );

  const graduationCapSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.96a2 2 0 0 0-.2-1.28l-6.7-1.12a2 2 0 0 0-1.28 0l-6.7 1.12a2 2 0 0 0-.2 1.28c-.01.52-.01 1.63 0 2.15a2 2 0 0 0 .2 1.28l6.7 1.12c.52.09 1.05.09 1.57 0l6.7-1.12a2 2 0 0 0 .2-1.28c.01-.52.01-1.63 0-2.15Z" />
      <path d="m14 12.5-6.5-3.5" />
      <path d="m14 12.5 6.5-3.5" />
      <path d="M14 12.5V19" />
    </svg>
  );

  const timelineElements = [
    {
      id: 1,
      icon: "work",
      date: "Jun 2023 - Present",
      title: "Mid-Level Software Developer",
      location: "Kajima London",
      description:
        "Led NHSPS Open Space Website development for a seamless user experience. Enhanced QA processes, reducing bug rate by 20%.",
    },
    {
      id: 2,
      icon: "work",
      date: "Nov 2021 - Dec 2022",
      title: "Software Developer - II",
      location: "Roostify San Francisco",
      description:
        "Implemented automated testing, reducing release cycle time by 30%.",
    },
    {
      id: 3,
      icon: "work",
      date: "Jul 2020 - Nov 2021",
      title: "Software Developer - I",
      location: "eKincare India",
      description:
        "Developed chat and video consultation features for patient engagement.",
    },
    {
      id: 4,
      icon: "work",
      date: "Jul 2018 - Jul 2020",
      title: "Software Developer",
      location: "LetsVenture India",
      description:
        "Developed key features for LetsVenture platform, supporting investment growth.",
    },
    {
      id: 5,
      icon: "school",
      date: "Jan 2022 - May 2023",
      title: "Masters",
      location: "Swansea University",
      description:
        "Developed a form management application with Java Spring Boot and ReactJS.",
    },
    {
      id: 6,
      icon: "school",
      date: "Apr 2014 - Apr 2018",
      title: "Bachelor's",
      location: "Vellore Institute of Technology",
      description:
        "Contributed to ISTE and Computer Society of India, organized Gravitas Fest.",
    },
  ];

  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(timelineElements.length / ITEMS_PER_PAGE);

  const currentItems = timelineElements.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-black text-white font-sans h-screen flex flex-col justify-between">
      {/* Section Header */}
      <div className="py-4 px-4 text-center border-b border-gray-800">
        <h2 className="text-2xl font-bold text-red-600 border-b-2 border-red-600 inline-block pb-1">
          My Journey
        </h2>
      </div>

      {/* Timeline Items */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6 px-4">
        {currentItems.map((item, index) => {
          const isWork = item.icon === "work";
          return (
            <div
              key={item.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md w-full sm:w-[60%] text-xs"
            >
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  {isWork ? briefcaseSVG : graduationCapSVG}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <h4 className="text-gray-400 text-[10px]">{item.location}</h4>
                </div>
              </div>
              <p className="text-[11px] text-gray-300 mt-2">
                {item.description}
              </p>
              <span className="block text-[9px] text-gray-500 mt-1">
                {item.date}
              </span>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 pb-4">
        <button
          className="px-3 py-1 bg-red-600 rounded disabled:opacity-40"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
        >
          ← Prev
        </button>
        <span className="text-sm">
          {page + 1} / {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-red-600 rounded disabled:opacity-40"
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages - 1}
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default App;
