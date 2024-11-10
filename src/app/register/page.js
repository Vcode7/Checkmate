

"use client";
import React, { useState } from 'react';
import {
  Box, Card, CardContent, Typography, Stepper, Step, StepLabel, Alert,
} from '@mui/material';
import Section1Form from '@/components/register/section1';
import Section2Form from '@/components/register/section2';
import Section3Form from '@/components/register/section3';

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const steps = [' ', ' ', ' '];

  const [reserr, setReserr] = useState("")
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    college: '',
    otherCollege: '',
    course: '',
    semester: '',
    chessId: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleFinalSubmit = () => setIsSubmitted(true);
  const handlereserr = (e)=> setReserr(e);
  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: '100vh', backgroundImage: 'url(/img/c1.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem'
      }}
    >
      <Card sx={{ maxWidth: 600, padding: '.5rem',marginTop:"5rem", backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Register for Checkmate Club
          </Typography>
          {isSubmitted && (
            <Alert severity="success" sx={{ marginBottom: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
              Registration Successful!
            </Alert>
          )}
            {reserr && (
            <Alert severity="error" sx={{ marginBottom: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
              {reserr}
            </Alert>
          )}
          <Stepper activeStep={activeStep} sx={{ marginBottom: '2rem' }}>
            {steps.map((label,i) => (
              <Step key={label+i}>
                <StepLabel
                  StepIconProps={{ sx: { color: activeStep >= steps.indexOf(label) ? 'darkorange' : 'white' } }}
                  sx={{ '& .MuiStepLabel-label': { color: activeStep >= steps.indexOf(label) ? 'white' : 'gray' } }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && <Section1Form 
          formValues={formValues}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          setReserr={handlereserr} 
          onNext={handleNext}
           />}
          {activeStep === 1 && <Section2Form
          formValues={formValues}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
           setReserr={handlereserr} 
           onNext={handleNext}
            onBack={handleBack} />}
          {activeStep === 2 && <Section3Form
          formValues={formValues}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          setReserr={handlereserr} 
          onBack={handleBack}
          onSubmit={handleFinalSubmit} />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegistrationForm;


