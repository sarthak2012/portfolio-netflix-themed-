import React, { useEffect } from 'react';
import netflixSound from '../assets/netflix-intro.mp3'; 

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const audio = new Audio(netflixSound);
    audio.play();

    const timer = setTimeout(() => {
      onFinish(); // Notify when loading is done
    }, 4000); // Adjust this to match your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
        <h1 className="text-6xl animate-popIn glow-text">Sarthak Srivastava</h1>
    </div>
  );
};

export default Loader;

