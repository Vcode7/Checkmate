// SimpleLoader.js
import React from 'react';
import { Box } from '@mui/material';

const ChessLoader = () => {
  return (
    <Box
      sx={{
        position:"absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black', // Light background color for the loading screen
      }}
    >
      <Box
        sx={{
          position:"absolute",
          width: '50px',
          height: '50px',
          left:"45%",
          border: '6px solid #ccc', // Light gray border
          borderTop: '6px solid #3f51b5', // Color for the rotating part
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      />
    </Box>
  );
};


export default ChessLoader;
