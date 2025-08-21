
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


   const [timeLineData] = useState([
    {
    timelineType: "work",
    title: "Web Developer",
    name: "Webel.io",
    techStack: "WordPress, JavaScript, CSS APIs",
    summaryPoints:
      "Designed and developed responsive websites for 3+ clients, aligning with brand identity and business goals. Integrated SEO best practices and third-party APIs in client websites, boosting traffic and user engagement by up to 25%.",
    dateRange: "May 2025 - Present",
  },
  {
    timelineType: "work",
    title: "Web Developer Intern",
    name: "MediaHolicss",
    techStack: "WordPress, React.js",
    summaryPoints:
      "Collaborated in Agile teams to deliver 5+ client-facing WordPress and React.js sites, ensuring responsive design. Led the complete redesign of the company’s website from scratch using React.js, enhancing user experience and reducing page load time.",
    dateRange: "Jan 2025 - Apr 2025",
  },
  {
    timelineType: "work",
    title: "Web Developer Intern",
    name: "The Sparks Foundation",
    techStack: "HTML, CSS, JavaScript",
    summaryPoints:
      "Developed a responsive donation website using HTML, CSS, and JavaScript, improving user engagement. Integrated secure payment gateway using third-party APIs, ensuring safe transactions.",
    dateRange: "Jun 2023 - Aug 2023",
  },
  {
    timelineType: "school",
    title: "Bachelors of Technology in Computer Science",
    name: "SRM IST Delhi NCR Campus",
    summaryPoints: "Final-year B.Tech Computer Science student graduating in 2025 with an 8.7 CGPA.",
    dateRange: "Graduating 2025",
  },
  ]);

  return (
    <section className="bg-black min-h-screen py-12 font-sans pt-[1000px] pb-10">
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
