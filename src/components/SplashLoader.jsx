import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './SplashLoader.css';

const SplashLoader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash for 7 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for the fade out animation to finish before calling onFinish
      setTimeout(() => {
        onFinish();
      }, 1000); // match CSS transition time
    }, 3000); // 3 seconds splash

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      {/* Fullscreen animation background */}
      <div className="lottie-fullscreen">
        <DotLottieReact
          src="/cybersecurity-animation.json"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default SplashLoader;
