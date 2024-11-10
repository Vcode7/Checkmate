import React from 'react';
import { Box } from '@mui/material';

const TextStyle = ({ text, imageUrl = "/o1.jpg", style = {} }) => {
  const textStyle = {
    position: 'relative',
    display: 'inline-block', // Customize the size based on your needs
    fontWeight: 'bold',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: '100%', // Adjust the background size, you can also use 'cover'
    backgroundPosition: 'bottom left', // Position the background at the bottom left
    backgroundClip: 'text',
    color: "transparent", // Apply any additional filter (e.g., blur, etc.)
    mixBlendMode: 'screen', // Use the 'screen' blend mode to brighten the image
    WebkitBackgroundClip: 'text', // For Safari support
    ...style, // Allow custom styling to be passed from the parent
  };

  return (
    <Box sx={{ ...textStyle }}>
      {text}
    </Box>
  );
};

export default TextStyle;
