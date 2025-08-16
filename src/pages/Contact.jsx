import React from "react";
const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-2xl mt-24">
      {/* Now Streaming Badge */}
      <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
        
        <div>
          <h3 className="text-2xl font-bold text-red-600">Now Streaming: Sarthak</h3>
          <p className="text-sm text-gray-400 mt-1">B.Tech Computer Science Student | Full-Stack Developer</p>
          <p className="mt-2 text-gray-300 text-sm">
            Hands-on experience with C++, SQL, React.js, Node.js, MERN stack, and AWS. Skilled in building scalable web apps, integrating APIs, and creating responsive interfaces.
          </p>
          <a
            href="https://www.linkedin.com/in/sarthaksrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-red-600 hover:text-red-400 hover:underline transition-colors duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
            View LinkedIn
          </a>
        </div>
      </div>

      {/* Next Episode: Connect */}
      <div className="mt-8 text-center text-gray-300">
        <h4 className="text-lg font-semibold text-red-600 mb-2">Next Episode: Connect</h4>
        <p className="text-gray-400">Always up for a chat, project discussion, or collaboration!</p>
      </div>

      {/* Contact Cards */}
      <div className="mt-6 space-y-4">
        {/* Email Card */}
        <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg shadow hover:bg-red-900 transition-colors duration-300 cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-5 h-5 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
          <a href="mailto:sarthakkr470@gmail.com" className="text-gray-200 hover:underline">
            sarthakkr470@gmail.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg shadow hover:bg-red-900 transition-colors duration-300 cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-5 h-5 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <a href="tel:+919310557893" className="text-gray-200 hover:underline">
            +91 93105 57893
          </a>
        </div>

        {/* Coffee Card */}
        <div className="flex items-center justify-center space-x-2 mt-4 bg-gray-800 p-3 rounded-lg shadow hover:bg-red-900 transition-colors duration-300 cursor-pointer">
          <p>Or catch up over a coffee ☕</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
