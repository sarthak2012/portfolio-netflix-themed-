import React from "react";
const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-900">
      {/* Badge */}
      <div className="flex items-center space-x-4">
        <img
          src="/static/media/sumanth.7debeeeb8c7c58cb52de.jpeg"
          alt="Sumanth Samala"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">Sumanth Samala</h3>
          <p className="text-sm text-gray-600">Senior Software Engineer</p>
          <p className="mt-2 text-gray-700 text-sm">
            With 5+ years in full-stack development, skilled in Ruby on Rails, Java Spring Boot, React, Node, AWS, Kubernetes, and Docker.
          </p>
          <p className="mt-1 text-gray-500 text-sm italic">
            Kajima Community | Swansea University
          </p>
          <a
            href="https://uk.linkedin.com/in/sumanth-samala-82431161"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-blue-600 hover:underline"
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
            View Profile
          </a>
        </div>
      </div>

      {/* Contact message */}
      <div className="mt-8 text-center text-gray-700">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      {/* Contact details */}
      <div className="mt-6 space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-5 h-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
          <a href="mailto:chintusamala96@gmail.com" className="text-blue-600 hover:underline">
            chintusamala96@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-5 h-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <a href="tel:+447442796769" className="text-blue-600 hover:underline">
            +44 7442 796769
          </a>
        </div>

        {/* Coffee catch-up */}
        <div className="flex items-center space-x-2 mt-6 text-gray-700">
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
