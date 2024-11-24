"use client";
// Main.js

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ThreeModel from "../Three/Threemodel";
import TextStyle from "../style/Textstyle";
import localFont from "next/font/local";


const poppin = localFont({
  src: "../../app/fonts/Poppins-Bold.ttf",
  variable: "--font-poppin",
  weight: "100 200 300 400 500 600 700 800 900",
});

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start with muted

  const handleVideoPlay = (event) => {
    if (isMuted) {
      setIsMuted(false);
      event.target.play(); 
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        playsInline
        muted
        onEnded={() => console.log("Video has ended")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          margin:"auto",
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Model Section */}
      <Typography
        className={`mogra-font ${poppin.className}`}
        variant="h3"
        sx={{
          position: "absolute",
          zIndex: 2,
          display:"flex",
          textAlign:"center",
          alignItems:"center",
          fontWeight: "bold",
          height:"100vh",
          justifyContent:"center",
          width:"100vw",
          opacity: isVisible ? 1 : 0,
          background:"linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0))",
          transition: "opacity 3s ease-in-out",
          
        }}
      >
        <TextStyle text="Welcome to Checkmate Chess Club" style={{maxWidth:"25rem"}}/>
      </Typography>
    </Box>
  );
};

export default Main;

