import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";

const WorkExperience = () => {
  const [timeLineData, setTimeLineData] = useState(null);

  useEffect(() => {
    const staticData = [
      {
        timelineType: "work",
        title: "Senior Java Developer",
        name: "TechCorp Solutions",
        dateRange: "2021 - Present",
        techStack: "Java, Spring Boot, AWS",
        summaryPoints:
          "Led a team to build scalable enterprise applications and optimize system performance.",
      },
      {
        timelineType: "work",
        title: "Full Stack Developer",
        name: "CodeWave Technologies",
        dateRange: "2018 - 2021",
        techStack: "React, Node.js, Docker",
        summaryPoints:
          "Developed client-facing applications and microservices for high-traffic platforms.",
      },
      {
        timelineType: "education",
        title: "Bachelor of Computer Science",
        name: "XYZ University",
        dateRange: "2014 - 2018",
        summaryPoints:
          "Graduated with honors, specialized in software development and algorithms.",
      },
    ];
    setTimeout(() => setTimeLineData(staticData), 500);
  }, []);

  if (!timeLineData)
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <span className="text-base text-gray-500 animate-pulse">
          Loading...
        </span>
      </div>
    );

  return (
    <div className="w-full px-1 md:px-4 py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      {/* Heading */}
      <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-white drop-shadow-lg">
        📅 Work Experience & Education Timeline
      </h2>

      <VerticalTimeline layout="1-column" className="max-w-xl mx-auto">
        {timeLineData.map((item, index) => {
          const isWork = item.timelineType === "work";
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: isWork ? "rgb(33, 150, 243)" : "rgb(255, 224, 230)",
                color: isWork ? "#fff" : "#222",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "0.5rem",
                border: isWork ? "1px solid #2563eb" : "1px solid #fbb6ce",
                padding: "12px 16px",
              }}
              contentArrowStyle={{
                borderRight: isWork
                  ? "5px solid rgb(33, 150, 243)"
                  : "5px solid rgb(255, 224, 230)",
              }}
              date={item.dateRange}
              dateClassName="font-semibold text-xs md:text-sm"
              iconStyle={{
                background: isWork ? "rgb(33, 150, 243)" : "rgb(255, 160, 200)",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              }}
              icon={isWork ? <WorkIcon size={20} /> : <SchoolIcon size={20} />}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-base md:text-lg font-bold">
                  {isWork ? item.title : item.name}
                </h3>
                <h4 className="text-xs md:text-base font-semibold">
                  {isWork ? item.name : item.title}
                </h4>
                {item.techStack && (
                  <p className="text-[10px] md:text-xs text-blue-100">
                    🔧 {item.techStack}
                  </p>
                )}
                <p className="text-xs md:text-sm leading-relaxed mt-1">
                  {item.summaryPoints}
                </p>
              </div>
            </VerticalTimelineElement>
          );
        })}
        {/* End Star */}
        <VerticalTimelineElement
          iconStyle={{
            background: "rgb(16, 204, 82)",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
          icon={<StarIcon size={20} />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
