"use client";
// Main.js

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ThreeModel from '../Three/Threemodel';
import TextStyle from '../style/Textstyle';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
=======
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
>>>>>>> 25ee8bd (0000)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
<<<<<<< HEAD
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        transition: 'opacity 1s ease-out',
      }}
    >
      {/* 3D Model Section */}
      <ThreeModel
        modelPath="/chess_piece_queen.glb" // Path to the 3D model file in the public folder
        width="100%"                      // Full width of the viewport or container
        height="100vh"                    // Full height of the viewport
        margin="0 auto"                   // Center the model horizontally
        padding="0"                       // No padding around the model
        cameraPosition={[4, 5, 5]}        // Adjust camera position if needed
        rotationSpeed={0.02}              // Control rotation speed of the model
        backgroundColor="rgba(0, 0, 0, 0)"// Transparent background
      />

  

      <Typography
      className="mogra-font"
      variant='h4'
        sx={{
          position: 'absolute',
          zIndex: 2,
          maxWidth:"20rem",
          fontSize:"2.3rem",
          textAlign: 'left',
          fontWeight: 'bold',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 3s ease-in-out',
          
        }}
      >
        <TextStyle 
        text="Welcome to Checkmate Chess Club"
        />
        
=======
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
>>>>>>> 25ee8bd (0000)
      </Typography>
    </Box>
  );
};

export default Main;
<<<<<<< HEAD
=======

>>>>>>> 25ee8bd (0000)
