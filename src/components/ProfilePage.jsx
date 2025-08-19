import { Link } from "react-router-dom";
import { FaFileAlt, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
const ProfilePage = ({
  title,
  description,
  videoBg,
  topPicks,
  continueWatching,
  role,
}) => {
  return (
    <div className="w-full bg-gray-900 min-h-screen text-white">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center text-center mt-[720px]"
      >
        {/* Background Video */}
        {videoBg && (
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/90"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-90">{description}</p>

          <div className="flex justify-center gap-6">
            <a
              href={Resume}
              className="flex items-center gap-2 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition"
            >
              <FaFileAlt /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-srivastava-61166a213/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(0,120,255,0.8)] transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>
      {/* TOP PICKS SECTION */}
      <section className="bg-black py-12 w-full">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4 px-6">
          Today's Top Picks for {role}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full px-6">
          {topPicks.map((pick, index) => (
            <Link
              key={index}
              to={pick.link}
              className="relative w-full h-56 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group"
            >
              <img
                src={pick.img}
                alt={pick.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-2">
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-red-500">
                  {pick.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTINUE WATCHING SECTION */}
      <section className="bg-black py-12 w-full">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4 px-6">
          Continue Watching for {role}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-6 ">
          {continueWatching.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="relative w-full h-56 rounded-lg overflow-hidden transform transition duration-300 group hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
            >
              <img
                src={item.img}
                alt={item.label}
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center p-2">
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-red-500">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
