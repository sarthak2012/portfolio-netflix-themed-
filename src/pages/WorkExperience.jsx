

// // import React, { useEffect, useState } from "react";
// // import {
// //   VerticalTimeline,
// //   VerticalTimelineElement,
// // } from "react-vertical-timeline-component";
// // import "react-vertical-timeline-component/style.min.css";
// // import { MdOutlineWork as WorkIcon } from "react-icons/md";
// // import { IoSchool as SchoolIcon } from "react-icons/io5";
// // import { FaStar as StarIcon } from "react-icons/fa";

// // const staticData = [
// //   {
// //     timelineType: "work",
// //     title: "Senior Java Developer",
// //     name: "TechCorp Solutions",
// //     dateRange: "2021 - Present",
// //     techStack: "Java, Spring Boot, AWS",
// //     summaryPoints:
// //       "Led a team to build scalable enterprise applications and optimize system performance.",
// //   },
// //   {
// //     timelineType: "work",
// //     title: "Full Stack Developer",
// //     name: "CodeWave Technologies",
// //     dateRange: "2018 - 2021",
// //     techStack: "React, Node.js, Docker",
// //     summaryPoints:
// //       "Developed client-facing applications and microservices for high-traffic platforms.",
// //   },
// //   {
// //     timelineType: "education",
// //     title: "Bachelor of Computer Science",
// //     name: "XYZ University",
// //     dateRange: "2014 - 2018",
// //     summaryPoints:
// //       "Graduated with honors, specialized in software development and algorithms.",
// //   },
// // ];

// // const WorkExperience = () => {

// //   const [timeLineData, setTimeLineData] = useState(staticData);

// //   if (!timeLineData) return <div className="text-white text-center mt-10">Loading...</div>;

// //   return (
// //   <>
// //     <div className="flex flex-col items-center w-full pt-20 mb-10">
// //       <h2
// //         className="text-3xl font-bold text-white animate-fadeInUp mb-10"
// //         style={{ animationFillMode: "forwards", animationDuration: "2s" }}
// //       >
// //         📅 Work Experience & Education Timeline
// //       </h2>

// //       <div className="w-full max-w-4xl">
// //         <VerticalTimeline>
// //           {timeLineData.map((item, index) => (
// //             <VerticalTimelineElement
// //               key={index}
// //               className={`vertical-timeline-element--${item.timelineType}`}
// //               contentStyle={
// //                 item.timelineType === "work"
// //                   ? index === 0
// //                     ? { background: "rgb(33, 150, 243)", color: "#fff" }
// //                     : { background: "rgb(240, 240, 240)", color: "#000" }
// //                   : { background: "rgb(255, 224, 230)", color: "#000" }
// //               }
// //               contentArrowStyle={
// //                 item.timelineType === "work"
// //                   ? {
// //                       borderRight:
// //                         index === 0
// //                           ? "7px solid rgb(33, 150, 243)"
// //                           : "7px solid rgb(240, 240, 240)",
// //                     }
// //                   : { borderRight: "7px solid rgb(255, 224, 230)" }
// //               }
// //               date={item.dateRange}
// //               iconStyle={
// //                 item.timelineType === "work"
// //                   ? { background: "rgb(33, 150, 243)", color: "#fff" }
// //                   : { background: "rgb(255, 160, 200)", color: "#fff" }
// //               }
// //               icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
// //             >
// //               <div
// //                 className="transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
// //                 style={{ color: "black" }}
// //               >
// //                 {item.timelineType === "work" ? (
// //                   <>
// //                     <h3 className="font-bold text-lg">{item.title}</h3>
// //                     <h4 className="text-sm font-medium">{item.name}</h4>
// //                     <p className="mt-2 text-sm">🔧 {item.techStack}</p>
// //                     <p className="mt-1 text-sm">{item.summaryPoints}</p>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <h3 className="font-bold text-lg">{item.name}</h3>
// //                     <h4 className="text-sm font-medium">{item.title}</h4>
// //                     <p className="mt-1 text-sm">{item.summaryPoints}</p>
// //                   </>
// //                 )}
// //               </div>
// //             </VerticalTimelineElement>
// //           ))}
// //           <VerticalTimelineElement
// //             iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
// //             icon={<StarIcon />}
// //           />
// //         </VerticalTimeline>
// //       </div>

// //       <style>{`
// //         @keyframes fadeInUp {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .animate-fadeInUp {
// //           animation-name: fadeInUp;
// //           animation-fill-mode: forwards;
// //           animation-duration: 2s;
// //           animation-timing-function: ease-in-out;
// //         }
// //       `}</style>
// //     </div>
// //   </>
// // );

// // };

// // export default WorkExperience;

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { MdWork, MdSchool } from "react-icons/md";

// const timelineData = [
//   {
//     type: "work",
//     title: "Software Developer - I 🎉",
//     company: "eKincare India",
//     techStack: "React, Context API, Twilio, Razorpay, AWS",
//     details: [
//       "👨‍⚕️ Developed chat and video consultation features for patient engagement.",
//       "Built an analytics dashboard, improving data insights for medical professionals.",
//       "Optimized Lighthouse score, boosting application performance.",
//     ],
//     date: "Jul 2020 - Nov 2021",
//   },
//   {
//     type: "work",
//     title: "Mid-Level Software Developer 🎉",
//     company: "Kajima London",
//     techStack: "Ruby on Rails, React, Node.js, AWS, PostgreSQL",
//     details: [
//       "🚀 Led NHSPS Open Space Website development for a seamless user experience.",
//       "Enhanced QA processes, reducing bug rate by 20%.",
//       "Optimized system performance for 10,000+ users and 50 million bookings.",
//     ],
//     date: "Jun 2023 - Present",
//   },
//   {
//     type: "work",
//     title: "Software Developer - II 🎉",
//     company: "Roostify San Francisco",
//     techStack: "CI/CD, Automated Testing, API Gateway, Financial Data Integration",
//     details: [
//       "📈 Implemented automated testing, reducing release cycle time by 30%.",
//       "Led the development of a loan origination platform, improving response time by 25%.",
//       "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements.",
//     ],
//     date: "Nov 2021 - Dec 2022",
//   },
//   {
//     type: "work",
//     title: "Software Developer 🎉",
//     company: "LetsVenture India",
//     techStack: "Ruby on Rails, SQL, AngularJS, ReactJS, MERN stack",
//     details: [
//       "🚀 Developed key features for LetsVenture platform, supporting investment growth.",
//       "Built a CRM tool from scratch to manage investor relationships.",
//       "Created a secondary fundraising platform, facilitating $1M+ investments.",
//     ],
//     date: "July 2018 - Jul 2020",
//   },
//   {
//     type: "education",
//     title: "Masters 🎓",
//     school: "Swansea University",
//     details: [
//       "📜 Developed a form management application with Java Spring Boot and ReactJS, deployed on Heroku and Netlify.",
//     ],
//     date: "Jan 2022 - May 2023",
//   },
//   {
//     type: "education",
//     title: "Bachelor's 🏅",
//     school: "Vellore Institute of Technology",
//     details: [
//       "🔬 Contributed to ISTE and Computer Society of India, organized Gravitas Fest, and published research in IJMET.",
//     ],
//     date: "Apr 2014 - Apr 2018",
//   },
// ];

// const TimelineSection = () => {
//   return (
//     <div style={{ background: "#111", padding: "40px 20px", minHeight: "100vh" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           color: "#fff",
//           marginBottom: "40px",
//           fontSize: "2.5rem",
//           fontWeight: "bold",
//         }}
//       >
//         📅 Work Experience & Education Timeline
//       </h2>

//       <VerticalTimeline layout="1-column">
//         {timelineData.map((item, idx) => (
//           <VerticalTimelineElement
//             key={idx}
//             date={item.date}
//             iconStyle={{
//               background: item.type === "work" ? "#2196F3" : "#E91E63",
//               color: "#fff",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             icon={item.type === "work" ? <MdWork /> : <MdSchool />}
//             contentStyle={{
//               background: item.type === "work" ? "#1976d2" : "#f8bbd0",
//               color: item.type === "work" ? "#fff" : "#000",
//               boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
//               borderRadius: "8px",
//             }}
//             contentArrowStyle={{
//               borderRight: item.type === "work"
//                 ? "7px solid #1976d2"
//                 : "7px solid #f8bbd0",
//             }}
//           >
//             <h3 style={{ marginTop: 0 }}>
//               {item.type === "work" ? item.title : item.title}
//             </h3>
//             <h4 style={{ marginTop: "4px", marginBottom: "8px" }}>
//               {item.type === "work" ? item.company : item.school}
//             </h4>
//             {item.techStack && (
//               <p style={{ fontStyle: "italic", marginBottom: "8px" }}>
//                 🔧 {item.techStack}
//               </p>
//             )}
//             <ul style={{ margin: 0, paddingLeft: "20px" }}>
//               {item.details.map((point, i) => (
//                 <li key={i} style={{ marginBottom: "6px" }}>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default TimelineSection;
// The main component for the work experience and education timeline.
const WorkExperience = () => {
  // Define the data for the timeline. This is a single source of truth.
  // Each object represents an item on the timeline.
  const timelineData = [
    // Work Experience
    {
      title: "Software Developer - I 🎉",
      company: "eKincare India",
      type: "work",
      date: "Jul 2020 - Nov 2021",
      technologies: ["React", "Context API", "Twilio", "Razorpay", "AWS"],
      description: "Developed and optimized key features for patient engagement and data insights.",
      bullets: [
        "Developed chat and video consultation features for patient engagement.",
        "Built an analytics dashboard, improving data insights for medical professionals.",
        "Optimized Lighthouse score, boosting application performance."
      ]
    },
    {
      title: "Mid-Level Software Developer 🎉",
      company: "Kajima London",
      type: "work",
      date: "Jun 2023 - Present",
      technologies: ["Ruby on Rails", "React", "Node.js", "AWS", "PostgreSQL"],
      description: "Led development and optimization efforts for the NHSPS Open Space Website.",
      bullets: [
        "Led NHSPS Open Space Website development for a seamless user experience.",
        "Enhanced QA processes, reducing bug rate by 20%.",
        "Optimized system performance for 10,000+ users and 50 million bookings."
      ]
    },
    {
      title: "Software Developer - II 🎉",
      company: "Roostify San Francisco",
      type: "work",
      date: "Nov 2021 - Dec 2022",
      technologies: ["CI/CD", "Automated Testing", "API Gateway", "Financial Data Integration"],
      description: "Implemented automated testing and led development of a loan origination platform.",
      bullets: [
        "Implemented automated testing, reducing release cycle time by 30%.",
        "Led the development of a loan origination platform, improving response time by 25%.",
        "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements."
      ]
    },
    {
      title: "Software Developer 🎉",
      company: "LetsVenture India",
      type: "work",
      date: "July 2018 - Jul 2020",
      technologies: ["Ruby on Rails", "SQL", "AngularJS", "ReactJS", "MERN stack"],
      description: "Developed key features and tools to support investment growth.",
      bullets: [
        "Developed key features for LetsVenture platform, supporting investment growth.",
        "Built a CRM tool from scratch to manage investor relationships.",
        "Created a secondary fundraising platform, facilitating $1M+ investments."
      ]
    },
    // Education
    {
      title: "Masters 🎓",
      company: "Swansea University",
      type: "education",
      date: "Jan 2022 - May 2023",
      technologies: ["Java Spring Boot", "ReactJS", "Heroku", "Netlify"],
      description: "Developed a form management application for a master's project.",
      bullets: [
        "Developed a form management application with Java Spring Boot and ReactJS, deployed on Heroku and Netlify."
      ]
    },
    {
      title: "Bachelor's 🏅",
      company: "Vellore Institute of Technology",
      type: "education",
      date: "Apr 2014 - Apr 2018",
      technologies: [],
      description: "Contributed to student societies and published research.",
      bullets: [
        "Contributed to ISTE and Computer Society of India, organized Gravitas Fest, and published research in IJMET."
      ]
    }
  ];

  // Filter the data into work experience and education for separate rendering.
  const workExperience = timelineData.filter(item => item.type === "work");
  const education = timelineData.filter(item => item.type === "education");

  // A reusable component to render each individual timeline item.
  const TimelineItem = ({ item }) => (
    <div className="flex flex-col md:flex-row md:items-center w-full my-6">
      <div className="w-full md:w-1/3 text-left md:text-right md:pr-10 text-gray-400">
        <p className="font-medium text-lg">{item.date}</p>
      </div>
      <div className="relative md:w-2/3">
        {/* The connecting line for the timeline */}
        <div className="hidden md:block absolute w-px h-full bg-gray-600 left-[-5px] top-0"></div>
        {/* The circle marking the point in the timeline */}
        <div className="absolute w-4 h-4 rounded-full bg-red-600 left-[-12px] top-1 md:top-1/2 md:transform md:-translate-y-1/2"></div>
        {/* The content card for the timeline item */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 ml-4 md:ml-0">
          <h3 className="text-xl font-bold text-red-500 mb-1">{item.title}</h3>
          <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.company}</h4>
          {item.technologies.length > 0 && (
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-bold">🔧 {item.technologies.join(', ')}</span>
            </p>
          )}
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-base">
            {item.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12">

        {/* Work Experience Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-white sticky top-0 z-10 bg-gray-900 bg-opacity-90 py-4">Work Experience</h2>
          {workExperience.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-white sticky top-0 z-10 bg-gray-900 bg-opacity-90 py-4">Education</h2>
          {education.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default WorkExperience;
