import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Animate from '../animate'; // Assuming this is the path to your Animate component
import TextStyle from '../style/Textstyle';

const LearnChessSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        margin: '2rem auto',
        padding: '2rem',
        position: 'relative',
        borderRadius: '8px',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}


      {/* Optional Semi-transparent Overlay */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark overlay for better text visibility
          zIndex: 1, // Positioning above the image
        }}
      ></Box>

      {/* Content Section */}
      <Animate animationType="fadeInUp"> {/* Wrap content in Animate component */}
        <Box sx={{ position: 'relative', zIndex: 2 }}> {/* Ensure content is above both the image and overlay */}
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'skyblue' }}>
            <TextStyle text="Do You Know Chess?"/>
            
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ marginBottom: '1rem' }}>
            Chess is a strategic game loved by millions around the world. Whether you&apos;re a beginner or a seasoned player,
            there&apos;s always more to learn and master.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: '2rem', color: 'lightgray' }}>
            If you&apos;re new to chess, don&apos;t worry! We have resources to get you started on your journey to becoming a skilled player.
          </Typography>
          <Link
            href="/learnchess"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'orange',
              fontWeight: 'bold',
              fontSize: '1rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '4px',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'darkorange',
              },
            }}
          >
            Learn Chess
            <ArrowForwardIcon sx={{ marginLeft: '0.5rem' }} />
          </Link>
        </Box>
      </Animate>
    </Box>
  );
};

export default LearnChessSection;
