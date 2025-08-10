import videoBg from "../assets/background.mp4";
import sarthak from "../assets/sarthak.png";
import { Link } from "react-router-dom";
const topPicks = [
  {
    label: "Work Permit",
    img: "https://picsum.photos/seed/workpermit/250/200",
    link: "/work-experience",
  },
  {
    label: "Skills",
    img: "https://picsum.photos/seed/skills/250/200",
    link: "/skills",
  },
  {
    label: "Experience",
    img: "https://picsum.photos/seed/workexperience/250/200",
    link: "/experience",
  },
  {
    label: "Certifications",
    img: "https://picsum.photos/seed/certifications/250/200",
    link: "/certifications",
  },
  {
    label: "Recommendations",
    img: "https://picsum.photos/seed/recommendations/250/200",
    link: "/recommendations",
  },
  {
    label: "Projects",
    img: "https://picsum.photos/seed/projects/250/200",
    link: "/projects",
  },
];

const continueWatching = [
  {
    label: "Music",
    img: "https://picsum.photos/id/1025/300/200",
    link: "/music",
  },
  {
    label: "Reading",
    img: "https://picsum.photos/id/1026/300/200",
    link: "/reading",
  },
  {
    label: "Blogs",
    img: "https://picsum.photos/id/1027/300/200",
    link: "/blogs",
  },
  {
    label: "Contact Me",
    img: "https://picsum.photos/id/1029/300/200",
    link: "/contact",
  },
];

const Recruiter = () => {
  return (
    <div className="w-full bg-gray-900 min-h-screen">
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-opacity-80 backdrop-blur-md z-50">
        <img src={sarthak} alt="Sarthak" className="h-10" />
        <nav className="flex gap-6 text-lg">
          <a href="#home" className="hover:text-red-500 transition text-white">
            Home
          </a>
          <Link
            to="/work-experience"
            className="hover:text-red-500 transition text-white"
          >
            Professional
          </Link>
          <Link
            to="/skills"
            className="hover:text-red-500 transition text-white"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-red-500 transition text-white"
          >
            Projects
          </Link>
          <Link to="/hire" className="hover:text-red-500 transition text-white">
            Hire Me
          </Link>
        </nav>
      </header>

      <div
        className="profile-page"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              Sumanth Samala - Senior JAVA Developer
            </h1>
            <p className="banner-description">
              Dynamic and results-driven Senior Software Engineer with 5+ years
              in full-stack development across high-impact, large-scale
              applications. I bring expertise in Ruby on Rails, React, Node,
              AWS, Kubernetes, and Docker, with a passion for optimizing systems
              to scale. I’ve led initiatives serving 10,000+ users and managing
              50 million+ bookings, driving feature-rich integrations like chat,
              video consultations, and API linkups.
              <br />A recent achievement was implementing robust security
              measures across four NHSPS products, including XSS script
              validation in both frontend and backend, advanced password
              policies with the Devise gem, and stringent password resets every
              six months. Additionally, I transformed a legacy reporting engine
              into a high-speed microservices architecture, reducing report
              generation from 5 minutes to 5 seconds and delivering real-time
              insights for users.
            </p>

            <div className="banner-buttons">
              <button className="play-button">
                <span className="label">Resume</span>
              </button>
              <button className="more-info-button">
                <span className="label">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="profile-page"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              Sumanth Samala - Senior JAVA Developer
            </h1>
            <p className="banner-description">
              Dynamic and results-driven Senior Software Engineer with 5+ years
              in full-stack development across high-impact, large-scale
              applications. I bring expertise in Ruby on Rails, React, Node,
              AWS, Kubernetes, and Docker, with a passion for optimizing systems
              to scale. I’ve led initiatives serving 10,000+ users and managing
              50 million+ bookings, driving feature-rich integrations like chat,
              video consultations, and API linkups.
              <br />A recent achievement was implementing robust security
              measures across four NHSPS products, including XSS script
              validation in both frontend and backend, advanced password
              policies with the Devise gem, and stringent password resets every
              six months. Additionally, I transformed a legacy reporting engine
              into a high-speed microservices architecture, reducing report
              generation from 5 minutes to 5 seconds and delivering real-time
              insights for users.
            </p>

            <div className="banner-buttons">
              <button className="play-button">
                <span className="label">Resume</span>
              </button>
              <button className="more-info-button">
                <span className="label">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="profile-page"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              Sumanth Samala - Senior JAVA Developer
            </h1>
            <p className="banner-description">
              Dynamic and results-driven Senior Software Engineer with 5+ years
              in full-stack development across high-impact, large-scale
              applications. I bring expertise in Ruby on Rails, React, Node,
              AWS, Kubernetes, and Docker, with a passion for optimizing systems
              to scale. I’ve led initiatives serving 10,000+ users and managing
              50 million+ bookings, driving feature-rich integrations like chat,
              video consultations, and API linkups.
              <br />A recent achievement was implementing robust security
              measures across four NHSPS products, including XSS script
              validation in both frontend and backend, advanced password
              policies with the Devise gem, and stringent password resets every
              six months. Additionally, I transformed a legacy reporting engine
              into a high-speed microservices architecture, reducing report
              generation from 5 minutes to 5 seconds and delivering real-time
              insights for users.
            </p>

            <div className="banner-buttons">
              <button className="play-button">
                <span className="label">Resume</span>
              </button>
              <button className="more-info-button">
                <span className="label">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative w-full h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center text-center text-white"
      >
        {/* Background Video */}
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative  max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sumanth Samala - Senior JAVA Developer
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Dynamic and results-driven Senior Software Engineer with 5+ years in
            full-stack development across high-impact, large-scale applications.
            Expertise in Ruby on Rails, React, Node, AWS, Kubernetes, and
            Docker. Proven track record in scaling systems, securing
            applications, and optimizing performance.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/resume"
              className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-red-600  transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* TOP PICKS SECTION */}

      {/* TOP PICKS SECTION */}
      <section className="bg-[#141414] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Today's Top Picks for Recruiter
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {topPicks.map((pick, index) => (
              <Link
                key={index}
                to={
                  pick.label === "Work Permit" ? "/work-experience" : pick.link
                }
                className="relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group"
              >
                {/* Image with zoom on hover */}
                <img
                  src={pick.img}
                  alt={pick.label}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Centered label */}
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white transition-colors group-hover:text-red-500">
                  {pick.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUE WATCHING SECTION */}
      <section className="bg-[#141414] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Continue Watching for Recruiter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {continueWatching.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative rounded-lg overflow-hidden transform transition duration-300 group hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
              >
                {/* Image with zoom on hover */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Centered label */}
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white transition-colors group-hover:text-red-500">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruiter;
