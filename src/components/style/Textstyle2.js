"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const HeadStyle = ({ text, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const targetElement = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after the first intersection
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement); // Use the captured targetElement
      }
      observer.disconnect(); // Ensure the observer is fully cleaned up
    };
  }, []);

  return (
    <Box ref={ref} sx={{ ...style, display: 'inline-block' }}>
      <Box sx={{ fontSize: '2rem', fontWeight: 'bold' }}>{text}</Box>
      <Box
        sx={{
          position: "relative",
          height: "2px",
          backgroundColor: "transparent",
          borderRadius: "4px",
          overflow: "hidden",
          marginTop: "8px", // Slight gap between text and underline
        }}
      >
        <Box
          sx={{
            width: isVisible ? "100%" : "0%",
            height: "100%",
            background: "linear-gradient(to right, orange, orange)",
            transform: "translateX(-100%)",
            transition: "width 0.8s ease-out",
            animation: isVisible ? `loading-bar 2s forwards ease-in-out` : "none",
            "@keyframes loading-bar": {
              "0%": { transform: "translateX(-100%)" },
              "50%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(100%)" },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeadStyle;
