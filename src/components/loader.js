import React from "react";
import { Box } from "@mui/material";

const icons = [
  "/icons/king.png",
  "/icons/queen.png",
  "/icons/bishop.png",
  "/icons/horse.png",
  "/icons/rook.png",
  "/icons/pawn.png",
];

const ChessLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        gap: ".1rem",
      }}
    >
      {/* Icon Animation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          gap: ".2rem",
        }}
      >
        {icons.slice(0,3).map((icon, index) => (
          <Box
            key={index}
            component="img"
            src={icon}
            alt={`Chess icon ${index + 1}`}
            sx={{
              width: "24px",
              height: "24px",
              animation: `fade-bounce 1.5s infinite ease-in-out`,
              animationDelay: `${index * 0.25}s`,
            
            }}
          />
        ))}

      </Box>
        <Box sx={{color:"white",fontSize:"2rem",margin:"0 2rem",
          animation:"fade 1.5s infinite ease-in-out"}}>Loading</Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          gap: ".2rem",
        }}
      >
        {icons.slice(3,6).map((icon, index) => (
          <Box
            key={index}
            component="img"
            src={icon}
            alt={`Chess icon ${index + 1}`}
            sx={{
              width: "24px",
              height: "24px",
              animation: `fade-bounce 1.5s infinite ease-in-out`,
              animationDelay: `${index * 0.25}s`,
            
            }}
          />
        ))}

      </Box>
      {/* Loading Bar */}
      
    </Box>
  );
};

export default ChessLoader;
