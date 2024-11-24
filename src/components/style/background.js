"use client";
import { useState, useEffect, useRef } from "react";

const Background = ({ children }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // Handle video end
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="background-container flex justify-center align-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        playsInline
        className="background-video "
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`content-wrapper ${videoEnded ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Background;
