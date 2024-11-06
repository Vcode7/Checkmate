"use client";
import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Typography, Paper, Link, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GooglePlayIcon from '@mui/icons-material/Android'; // Play Store icon
import AppleIcon from '@mui/icons-material/Apple'; // App Store icon
import Animate from '../animate'; // Make sure to import your Animate component

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
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '1rem auto',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
      }}
    >
      
      <Animate animationType="fadeInUp">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
        Registration Steps
      </Typography>
      </Animate>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} sx={{ '& .MuiStepIcon-root': { color: 'red' } }}> {/* Set step circle color to red */}
            <Animate animationType="fadeInUp">
            <StepLabel>
              <Typography variant="h6" sx={{ color: 'white' }}>{step.label}</Typography> {/* Keep title white */}
            </StepLabel>
            </Animate>

            <StepContent>
              <Animate animationType="fadeInUp">
                <Typography sx={{ color: 'white' }}>{step.description}</Typography>

                {index === 0 && (
                  <Box sx={{ marginTop: 2 }}>
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
                            backgroundColor: 'darkgrey',
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
                            '&:hover': { color: 'purple' },
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
                      color: 'skyblue',
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
        <Paper square elevation={0} sx={{ padding: 3, marginTop: 2 }}>
          <Typography variant="h6" align="center" sx={{ color: 'lightgreen' }}>
            Registration Complete! You’re now part of the Checkmate Club.
          </Typography>
          <Link onClick={handleReset} sx={{ marginTop: 2, color: 'lightblue', textDecoration: 'none' }}>
            Reset Steps
          </Link>
        </Paper>
      )}
    </Box>
  );
};

export default RegistrationSteps;
