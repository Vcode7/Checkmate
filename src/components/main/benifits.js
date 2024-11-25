import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Divider, LinearProgress } from '@mui/material';
import { useSwipeable } from 'react-swipeable';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Animate from '../animate';
import TextStyle from '../style/Textstyle';
import HeadStyle from '../style/Textstyle2';

const BenefitsSection = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const benefits = [
    {
      title: "Compititive Tournaments",
      description: "Engage in thrilling tournaments with players of all levels. Compete, learn, and rank up as you showcase your skills in fair and competitive matches, designed to help you grow and challenge yourself."
    },
    {
      title: "Improvement & Training",
      description: "Access training resources, tutorials, and analysis tools to boost your chess abilities. From openings to endgames, our sessions are crafted to enhance your strategies and guide your journey toward chess mastery."
    },
    {
      title: "Global Chess Rankings",
      description: "Monitor your progress with our global ranking system. Compete with players worldwide, track your advancement, and see how you measure up. Rise in rank as you develop your skills and experience."
    },
    {
      title: "Community Connections",
      description: "Join a vibrant community of chess enthusiasts. Share insights, discuss strategies, and bond with like-minded players. Forge lasting friendships and stay inspired through shared passion and camaraderie."
    }
  ];

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setSelectedCard((prev) => (prev + 1) % benefits.length);
    } else if (direction === 'right') {
      setSelectedCard((prev) => (prev - 1 + benefits.length) % benefits.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
      {...swipeHandlers}
      className="relative p-4 text-center m-auto bg-cover bg-center flex flex-col justify-center items-center"
      sx={{width: "100%",
        maxWidth: 800,
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        textAlign: "center",
        color: "white",}}
    >
      {/* Title with animation */}
      <Animate animationType="fadeInUp">
        <Typography variant="h4" component="h2" gutterBottom className="font-bold text-white opacity-90">
          <HeadStyle text="Benefits of Joining Checkmate Club"/>
        </Typography>
      </Animate>

      {/* Scroll Indicator */}
      <LinearProgress
        variant="determinate"
        value={(selectedCard + 1) * (100 / benefits.length)}
        sx={{
          width: { xs: '80%', md: '50%' },
          margin: '1rem auto',
          height: '4px',
          borderRadius: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#fed7aa',
          },
          opacity: 0.8,
        }}
      />

      {/* Navigation Buttons */}
      <Box sx={{zIndex:2}} className="absolute top-1/2 left-4 transform -translate-y-1/2 flex gap-4 md:block opacity-80">
        <Animate animationType="fadeIn">
          <button
            onClick={() => handleSwipe('right')}
            className="hidden md:flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 rounded-full text-white hover:bg-gray-700 transition-all duration-200"
          >
            <ArrowBackIos />
          </button>
        </Animate>
      </Box>

      <Box sx={{zIndex:2}} className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-4 md:block opacity-80">
        <Animate animationType="fadeIn">
          <button
            onClick={() => handleSwipe('left')}
            className="hidden md:flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 rounded-full text-white hover:bg-gray-700 transition-all duration-200"
          >
            <ArrowForwardIos />
          </button>
        </Animate>
      </Box>

      {/* Cards with swipeable overflow */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          width: '100%',
          padding: { xs: '0', sm: '0 1rem' },
          transition: "all 1s ease-in-out",
        }}
      >
        {benefits.map((benefit, index) => (
            <Card
              key={index}
              className=" text-white rounded-lg shadow-lg flex-shrink-0 w-full"
              sx={{
                position: 'relative',
                transition: "all .5s linear",
                left: `${1 - (selectedCard * 90)}vw`,
                minWidth: '300px',
                maxWidth: '90vw',
                opacity: selectedCard === index ? 1 : 0.5,
                background:"rgba(0,0,0,0.5)"
              }}
            >

      <Animate animationType="fadeInUp">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom className="font-bold">
                  
                  <TextStyle text={benefit.title}/>
                </Typography>
                <Divider sx={{ bgcolor: 'orange', marginY: '1rem',fontWeight:"bold" }} />
                <Typography variant="body1" sx={{padding:"1rem 2rem" , color:"white"}}>{benefit.description}</Typography>
              </CardContent>
              </Animate>
            </Card>
            
        ))}
      </Box>
    </Box>
  );
};

export default BenefitsSection;
