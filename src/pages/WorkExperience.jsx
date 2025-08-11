import React from "react";

const timelineData = [
  // Work Experience
  {
    title: "Software Developer - I 🎉",
    company: "eKincare India",
    type: "work",
    date: "Jul 2020 - Nov 2021",
    technologies: ["React", "Context API", "Twilio", "Razorpay", "AWS"],
    bullets: [
      "Developed chat and video consultation features for patient engagement.",
      "Built an analytics dashboard, improving data insights for medical professionals.",
      "Optimized Lighthouse score, boosting application performance.",
    ],
  },
  {
    title: "Mid-Level Software Developer 🎉",
    company: "Kajima London",
    type: "work",
    date: "Jun 2023 - Present",
    technologies: ["Ruby on Rails", "React", "Node.js", "AWS", "PostgreSQL"],
    bullets: [
      "Led NHSPS Open Space Website development for a seamless user experience.",
      "Enhanced QA processes, reducing bug rate by 20%.",
      "Optimized system performance for 10,000+ users and 50 million bookings.",
    ],
  },
  {
    title: "Software Developer - II 🎉",
    company: "Roostify San Francisco",
    type: "work",
    date: "Nov 2021 - Dec 2022",
    technologies: [
      "CI/CD",
      "Automated Testing",
      "API Gateway",
      "Financial Data Integration",
    ],
    bullets: [
      "Implemented automated testing, reducing release cycle time by 30%.",
      "Led the development of a loan origination platform, improving response time by 25%.",
      "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements.",
    ],
  },
  {
    title: "Software Developer 🎉",
    company: "LetsVenture India",
    type: "work",
    date: "July 2018 - Jul 2020",
    technologies: [
      "Ruby on Rails",
      "SQL",
      "AngularJS",
      "ReactJS",
      "MERN stack",
    ],
    bullets: [
      "Developed key features for LetsVenture platform, supporting investment growth.",
      "Built a CRM tool from scratch to manage investor relationships.",
      "Created a secondary fundraising platform, facilitating $1M+ investments.",
    ],
  },
  // Education
  {
    title: "Masters 🎓",
    company: "Swansea University",
    type: "education",
    date: "Jan 2022 - May 2023",
    technologies: ["Java Spring Boot", "ReactJS", "Heroku", "Netlify"],
    bullets: [
      "Developed a form management application with Java Spring Boot and ReactJS, deployed on Heroku and Netlify.",
    ],
  },
  {
    title: "Bachelor's 🏅",
    company: "Vellore Institute of Technology",
    type: "education",
    date: "Apr 2014 - Apr 2018",
    technologies: [],
    bullets: [
      "Contributed to ISTE and Computer Society of India, organized Gravitas Fest, and published research in IJMET.",
    ],
  },
];

const TimelineItem = ({ item }) => (
  <div className="flex flex-col md:flex-row md:items-center w-full my-6">
    <div className="w-full md:w-1/4 text-left md:text-right md:pr-6 text-gray-400 shrink-0">
      <p className="font-medium text-base md:text-lg">{item.date}</p>
    </div>
    <div className="relative md:w-3/4">
      {/* Timeline line and dot */}
      <div className="hidden md:block absolute w-px h-full bg-gray-700 left-[-8px] top-0"></div>
      <div
        className={`absolute w-3 h-3 rounded-full ${
          item.type === "work" ? "bg-blue-500" : "bg-pink-400"
        } left-[-13px] top-2 md:top-1/2 md:transform md:-translate-y-1/2`}
      ></div>
      {/* Card */}
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md border border-gray-700 ml-4 md:ml-0">
        <h3 className="text-base md:text-xl font-bold text-blue-400 mb-1">
          {item.title}
        </h3>
        <h4 className="text-sm md:text-lg font-semibold text-gray-200 mb-2">
          {item.company}
        </h4>
        {item.technologies.length > 0 && (
          <p className="text-xs md:text-sm text-blue-200 mb-2">
            <span className="font-bold">🔧 {item.technologies.join(", ")}</span>
          </p>
        )}
        <ul className="list-disc pl-4 space-y-1 text-gray-300 text-xs md:text-base">
          {item.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const WorkExperience = () => {
  const workExperience = timelineData.filter((item) => item.type === "work");
  const education = timelineData.filter((item) => item.type === "education");

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto py-8 px-2 md:px-8">
        {/* Work Experience Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-white bg-gray-900 bg-opacity-90 py-2 rounded-lg shadow">
            Work Experience
          </h2>
          {workExperience.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        {/* Education Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-white bg-gray-900 bg-opacity-90 py-2 rounded-lg shadow">
            Education
          </h2>
          {education.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Responsive timeline fix */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-card {
            font-size: 13px !important;
            padding: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkExperience;
