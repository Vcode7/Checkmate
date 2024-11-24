"use client";
import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Typography, Paper, Link, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GooglePlayIcon from '@mui/icons-material/Android'; // Play Store icon
import AppleIcon from '@mui/icons-material/Apple'; // App Store icon
import Animate from '../animate'; // Make sure to import your Animate component
import TextStyle from '../style/Textstyle';

const RegistrationSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'Create a Chess.com Account',
      description: 'Sign up at Chess.com if you don’t already have an account.',
      links: [
        { label: 'Visit Chess.com', url: 'https://www.chess.com/', isButton: false },
        { label: 'Get on Play Store', url: 'https://play.google.com/store/apps/details?id=com.chess', isButton: true, icon: <GooglePlayIcon /> },
        { label: 'Get on App Store', url: 'https://apps.apple.com/app/chess-play-learn/id329218549', isButton: true, icon: <AppleIcon /> },
      ],
    },
    {
      label: 'Register with Checkmate Club',
      description: 'Fill out the registration form with your Chess.com username and personal details.',
      links:[
        { label: 'register ', url: '/register', isButton: false },
        
      ]
    },
    {
      label: 'Pay Club Registration Amount',
      description: 'Submit the club registration fee to activate your membership.',
    },
    {
      label: 'Registration Complete',
      description: 'Welcome to Checkmate Club! Start competing and enjoy the benefits.',
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{
      width: '100%',
      backgroundImage:"url('/img/f1.jpg')",
      backgroundSize:"cover",
      
    }}>
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '1rem auto',
        padding: '2rem',
        borderRadius: '8px',
        background:"rgba(0,0,0,0.7)"
      }}
    >
      
      <Animate animationType="fadeInUp">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' ,textShadow:"0 0 5px orange"}}>
        Registration Steps
       
      </Typography>
      </Animate>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} sx={{ marginTop: 3 , '& .MuiStepIcon-root': { color: 'orange' } ,'&Mui-completed':{color:"white"}}}> {/* Set step circle color to red */}
            <Animate animationType="fadeInUp">
            <StepLabel>
              <Typography variant="h6" sx={{ color: 'white' }}>
              {step.label}
                </Typography> {/* Keep title white */}
            </StepLabel>
            </Animate>

            <StepContent>
              <Animate animationType="fadeInUp">
                <Typography sx={{ color: 'white' }}>{step.description}</Typography>

                {(index === 0 || index===1) && (
                  <Box sx={{ marginTop: 3 }}>
                    {step.links.map((link, i) => (
                      link.isButton ? (
                        <Button
                          key={i}
                          component={Link}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={link.icon}
                          variant="contained"
                          sx={{
                            marginRight: 1,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            color:"orange",
                            marginTop: 1,
                          }}
                        >
                          {link.label}
                        </Button>
                      ) : (
                        <Link
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'lightgray',
                            marginTop: 1,
                            textDecoration: 'none',
                            '&:hover': { color: 'orange' },
                          }}
                        >
                          <span>{link.label}</span>
                          <ArrowForwardIcon sx={{ marginLeft: 1 }} />
                        </Link>
                      )
                    ))}
                  </Box>
                )}

                <Box sx={{ marginTop: 2 }}>
                  <Link
                    onClick={handleNext}
                    sx={{
                      display: 'inline-block',
                      color: 'orange',
                      textDecoration: 'none',
                      marginRight: 1,
                    }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Link>
                  {index > 0 && (
                    <Link onClick={handleBack} sx={{ color: 'lightgray', textDecoration: 'none' }}>
                      Back
                    </Link>
                  )}
                </Box>
              </Animate>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ padding: 3, marginTop: 2, background:"var(--background)" }}>
          <Typography variant="h6" align="center" sx={{ color: 'lightgreen', background:"var(--background)" }}>
            Registration Complete! You’re now part of the Checkmate Club.
          </Typography>
          <Link onClick={handleReset} sx={{ marginTop: 2, color: 'lightblue', textDecoration: 'none' }}>
            Reset Steps
          </Link>
        </Paper>
      )}
    </Box></Box>
  );
};

export default RegistrationSteps;
