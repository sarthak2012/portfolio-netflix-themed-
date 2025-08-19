import React, { useEffect, useState } from "react";
import netflixSound from "../assets/netflix-intro.mp3";

import "./Loader.css"; 
const Loader = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const audio = new Audio(netflixSound);
    audio.play().catch(console.error);

    setAnimate(true); // start animation immediately

    const timer = setTimeout(() => {
      onFinish(); // Notify parent loading is done
    }, 4000); // same as animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <h1 className={`loader-text ${animate ? "zoomOut" : ""}`}>
        Sarthak Srivastava
      </h1>
    </div>
  );
};

export default Loader;
