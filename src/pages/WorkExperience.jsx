
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
