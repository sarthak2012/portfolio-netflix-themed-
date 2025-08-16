
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";

const iconData = {
  udemy: <SiUdemy className="icon-udemy" />,
  coursera: <SiCoursera className="icon-coursera" />,
  ieee: <SiIeee className="icon-ieee" />,
  university: <FaUniversity className="icon-university" />
};

const certifications = [
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    issuedDate: "Jan 2024",
    link: "https://www.udemy.com",
    iconName: "udemy"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issuedDate: "Oct 2023",
    link: "https://www.coursera.org",
    iconName: "coursera"
  },
  {
    title: "AI and Data Science Conference",
    issuer: "IEEE",
    issuedDate: "Aug 2023",
    link: "https://www.ieee.org",
    iconName: "ieee"
  },
  {
    title: "B.Sc Computer Science",
    issuer: "XYZ University",
    issuedDate: "May 2022",
    link: "https://www.example.com",
    iconName: "university"
  }
];

export default function Certifications() {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${index * 0.15}s` }}
            className="certification-card"
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">
                  Issued {cert.issuedDate}
                </span>
              )}
            </div>

            <div className="certification-link">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
