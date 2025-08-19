import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";

const iconData = {
  udemy: <SiUdemy className="icon-udemy" />,
  coursera: <SiCoursera className="icon-coursera" />,
  ieee: <SiIeee className="icon-ieee" />,
  university: <FaUniversity className="icon-university" />,
};

const certificationsByCategory = {
  "Backend & Database": [
    {
      title: "Data Base Management System",
      issuer: "NPTEL",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1abZ6Ud5zHPhAP4-g90b21lI8e4n7m2DO/view",
      iconName: "university",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1RQy4z2EV68X7MbXUpAyfIzvS_xX79jso/view",
      iconName: "university",
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1jbzCX4GfL70hd0ale2QAGOfGusepGEB2/view",
      iconName: "university",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1VjPb_AgmjTmWEqX-Hdu0ZdC-bQ2sVWpL/view",
      iconName: "university",
    },
  ],

  "Cloud, Networking & DevOps": [
    {
      title: "Data Engineering Virtual Internship",
      issuer: "AICTE / AWS Academy",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1puA8EsT9aLo5rieVtJw5qlr6KqOkXJbU/view",
      iconName: "udemy",
    },
    {
      title: "Cloud Virtual Internship",
      issuer: "AICTE / AWS Academy",
      issuedDate: "2023",
      link: "http://drive.google.com/file/d/1LC3Ti4FqtXRmLWidJ_XQhDgZbEe-kOlv/view",
      iconName: "udemy",
    },
    {
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1Tg3XXH8uZQc3VyjeV1l9obw9d1tmqqOZ/view",
      iconName: "university",
    },
    {
      title: "Introduction to Packet Tracer",
      issuer: "Cisco Networking Academy",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/16jeQO0TLCTm-oaVYn0A5WWoufYvgGJ1y/view",
      iconName: "university",
    },
  ],

  Frontend: [
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      issuedDate: "2023",
      link: "https://drive.google.com/file/d/1w3EcRvWOpLLf3Tky9imoB_t8J2u8Z7Zo/view",
      iconName: "university",
    },
  ],

  "Professional Development": [
    {
      title: "TCS ION Career Edge: Young Professional",
      issuer: "TCS ION",
      issuedDate: "2022",
      link: "https://drive.google.com/file/d/1c6UCkhxmYk4P_PeWSx1kmbGTBXAA_xiN/view",

      iconName: "university",
    },
    {
      title: "TCS ION Career Edge: IT for Non-IT",
      issuer: "TCS ION",
      issuedDate: "2022",
      link: "https://drive.google.com/file/d/1f-wVJf2bdwaKcVTQXdO86N7PfY1usS-P/view",

      iconName: "university",
    },
  ],
};
export default function Certifications() {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title text-center">Certifications</h2>

      {Object.keys(certificationsByCategory).map((category, catIndex) => (
        <div key={catIndex} className="certification-category">
          <h3 className="category-title">{category}</h3>

          <div className="certifications-grid">
            {certificationsByCategory[category].map((cert, index) => (
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
      ))}
    </div>
  );
}
