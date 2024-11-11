"use client";
// Main.js

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
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
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
        
      </Typography>
    </Box>
  );
};

export default Main;
