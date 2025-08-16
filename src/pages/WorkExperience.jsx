
// import { useState } from "react";

// C
//   const briefcaseSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="22"
//       height="22"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
//       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//     </svg>
//   );

//   const graduationCapSVG = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="22"
//       height="22"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21.42 10.96a2 2 0 0 0-.2-1.28l-6.7-1.12a2 2 0 0 0-1.28 0l-6.7 1.12a2 2 0 0 0-.2 1.28c-.01.52-.01 1.63 0 2.15a2 2 0 0 0 .2 1.28l6.7 1.12c.52.09 1.05.09 1.57 0l6.7-1.12a2 2 0 0 0 .2-1.28c.01-.52.01-1.63 0-2.15Z" />
//       <path d="m14 12.5-6.5-3.5" />
//       <path d="m14 12.5 6.5-3.5" />
//       <path d="M14 12.5V19" />
//     </svg>
//   );

//   const timelineElements = [
//     {
//       id: 1,
//       icon: "work",
//       date: "Jun 2023 - Present",
//       title: "Mid-Level Software Developer",
//       location: "Kajima London",
//       description:
//         "Led NHSPS Open Space Website development for a seamless user experience. Enhanced QA processes, reducing bug rate by 20%.",
//     },
//     {
//       id: 2,
//       icon: "work",
//       date: "Nov 2021 - Dec 2022",
//       title: "Software Developer - II",
//       location: "Roostify San Francisco",
//       description:
//         "Implemented automated testing, reducing release cycle time by 30%.",
//     },
//     {
//       id: 3,
//       icon: "work",
//       date: "Jul 2020 - Nov 2021",
//       title: "Software Developer - I",
//       location: "eKincare India",
//       description:
//         "Developed chat and video consultation features for patient engagement.",
//     },
//     {
//       id: 4,
//       icon: "work",
//       date: "Jul 2018 - Jul 2020",
//       title: "Software Developer",
//       location: "LetsVenture India",
//       description:
//         "Developed key features for LetsVenture platform, supporting investment growth.",
//     },
//     {
//       id: 5,
//       icon: "school",
//       date: "Jan 2022 - May 2023",
//       title: "Masters",
//       location: "Swansea University",
//       description:
//         "Developed a form management application with Java Spring Boot and ReactJS.",
//     },
//     {
//       id: 6,
//       icon: "school",
//       date: "Apr 2014 - Apr 2018",
//       title: "Bachelor's",
//       location: "Vellore Institute of Technology",
//       description:
//         "Contributed to ISTE and Computer Society of India, organized Gravitas Fest.",
//     },
//   ];

//   const ITEMS_PER_PAGE = 3;
//   const [page, setPage] = useState(0);
//   const totalPages = Math.ceil(timelineElements.length / ITEMS_PER_PAGE);

//   const currentItems = timelineElements.slice(
//     page * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
//   );

//   return (
//     <section className="bg-[#141414] text-white font-sans min-h-screen flex flex-col justify-between">
//       {/* Section Header */}
//       <div className="px-6 text-left border-b border-gray-800 mt-16 mb-8">
//         <h2 className="text-3xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-1">
//           My Journey
//         </h2>
//       </div>

//       {/* Timeline Items */}
//       <div className="flex-1 flex flex-wrap justify-center items-center gap-6 px-6">
//         {currentItems.map((item) => {
//           const isWork = item.icon === "work";
//           return (
//             <div
//               key={item.id}
//               className="relative bg-gray-900 rounded-xl shadow-lg w-full sm:w-[30%] p-5 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="text-red-500">
//                   {isWork ? briefcaseSVG : graduationCapSVG}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <h4 className="text-gray-400 text-sm">{item.location}</h4>
//                 </div>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {item.description}
//               </p>
//               <span className="block text-[11px] text-gray-500 mt-3 italic">
//                 {item.date}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center items-center gap-6 py-6">
//         <button
//           className="px-5 py-2 bg-red-600 rounded-full text-sm font-semibold shadow-md hover:bg-red-700 transition disabled:opacity-40"
//           onClick={() => setPage((p) => p - 1)}
//           disabled={page === 0}
//         >
//           ← Prev
//         </button>
//         <span className="text-sm font-medium tracking-wide">
//           {page + 1} / {totalPages}
//         </span>
//         <button
//           className="px-5 py-2 bg-red-600 rounded-full text-sm font-semibold shadow-md hover:bg-red-700 transition disabled:opacity-40"
//           onClick={() => setPage((p) => p + 1)}
//           disabled={page === totalPages - 1}
//         >
//           Next →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;




import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";

const WorkExperience = () => {
  // Local timeline data (instead of backend)
  const [timeLineData] = useState([
    {
      timelineType: "work",
      title: "Mid-Level Software Developer",
      name: "Kajima London",
      techStack: "React, Node.js, AWS, Docker",
      summaryPoints:
        "Led NHSPS Open Space Website development, improved QA processes reducing bug rate by 20%.",
      dateRange: "Jun 2023 - Present",
    },
    {
      timelineType: "work",
      title: "Software Developer - II",
      name: "Roostify San Francisco",
      techStack: "React, TypeScript, Cypress",
      summaryPoints:
        "Implemented automated testing, reducing release cycle time by 30%.",
      dateRange: "Nov 2021 - Dec 2022",
    },
    {
      timelineType: "work",
      title: "Software Developer - I",
      name: "eKincare India",
      techStack: "Node.js, React, WebRTC",
      summaryPoints:
        "Developed chat and video consultation features for patient engagement.",
      dateRange: "Jul 2020 - Nov 2021",
    },
    {
      timelineType: "school",
      title: "Masters in Computer Science",
      name: "Swansea University",
      summaryPoints:
        "Built a form management app with Java Spring Boot & ReactJS.",
      dateRange: "Jan 2022 - May 2023",
    },
    {
      timelineType: "school",
      title: "Bachelor’s in Computer Science",
      name: "Vellore Institute of Technology",
      summaryPoints:
        "Contributed to ISTE and Computer Society of India, organized Gravitas Fest.",
      dateRange: "Apr 2014 - Apr 2018",
    },
  ]);

  return (
    <section className="bg-black min-h-screen py-12 font-sans pt-[1300px] pb-10">
      {/* Netflix styled header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-red-600 border-b-4 border-red-600 inline-block pb-2">
          📅 Work Experience & Education
        </h2>
      </div>

      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{
              background: "#1f1f1f",
              color: "#fff",
              border: "1px solid rgba(229,9,20,0.5)",
              boxShadow: "0 0 15px rgba(229,9,20,0.5)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1f1f1f",
            }}
            date={item.dateRange}
            dateClassName="text-red-500 font-semibold"
            iconStyle={{
              background:
                item.timelineType === "work" ? "#E50914" : "#b91c1c",
              color: "#fff",
              boxShadow: "0 0 12px rgba(229,9,20,0.9)",
            }}
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-gray-400">{item.name}</h4>
                <p className="text-sm text-gray-300 mt-2">
                  🔧 {item.techStack}
                </p>
                <p className="text-gray-200 mt-2">{item.summaryPoints}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <h4 className="text-gray-400">{item.title}</h4>
                <p className="text-gray-200 mt-2">{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}

        {/* Ending star */}
        <VerticalTimelineElement
          iconStyle={{
            background: "rgb(16, 204, 82)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(16,204,82,0.8)",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
