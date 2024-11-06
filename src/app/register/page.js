"use client";
import React, { useState } from 'react';
import {
  Box, TextField, Button, Typography, Stepper, Step, StepLabel,
  Card, CardContent, Alert, InputLabel, Select, MenuItem, FormControl
} from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon, Apple as AppleIcon } from '@mui/icons-material';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
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
  const [activeStep, setActiveStep] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = ['Account Info', 'College Details', 'Chess.com ID'];
  const handleSocialLogin = (provider) => {
    // Implement your actual authentication logic for each provider.
    console.log(`Login with ${provider} clicked`);
    // Simulate login success and move to the next section.
    handleNextSection();
  };
  
  const handleNextSection = () => {
    // Code to go to the next step in the registration process.
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateStep = () => {
    const errors = {};
    if (activeStep === 0) {
      if (!formValues.email) errors.email = 'Email is required';
      if (!formValues.phone) errors.phone = 'Phone number is required';
      if (!formValues.password) errors.password = 'Password is required';
      if (formValues.password !== formValues.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    } else if (activeStep === 1) {
      if (!formValues.college) errors.college = 'College is required';
      if (!formValues.course) errors.course = 'Course is required';
      if (!formValues.semester) errors.semester = 'Semester is required';
    } else if (activeStep === 2) {
      if (!formValues.chessId) errors.chessId = 'Chess.com ID is required';
    }
    return errors;
  };

  const handleNext = () => {
    const errors = validateStep();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      if (activeStep === steps.length - 1) {
        setIsSubmitted(true);
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ display: 'flex',marginTop:"5rem", justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url(/img/c1.jpg)', // Replace with the path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', padding: '2rem' }}>
      <Card sx={{ maxWidth: 600, padding: '.5rem', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Register for Checkmate Club
          </Typography>

          {isSubmitted && <Alert severity="success" sx={{ marginBottom: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>Registration Successful!</Alert>}

          <Stepper activeStep={activeStep} sx={{ marginBottom: '2rem' }}>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel
        StepIconProps={{
          sx: {
            color: activeStep >= steps.indexOf(label) ? 'darkorange' : 'white',
          },
        }}
        sx={{
          '& .MuiStepLabel-label': {
            color: activeStep >= steps.indexOf(label) ? 'white' : 'gray', // Adjust color based on step
          },
        }}
      >
        {label}
      </StepLabel>
    </Step>
  ))}
</Stepper>


          <form>
          {activeStep === 0 && (
  <>
    {/* Email and Password Fields */}
    <TextField
      label="Email"
      name="email"
      value={formValues.email}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
      error={!!formErrors.email}
      helperText={formErrors.email}
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
      variant="outlined"
      sx={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 1 }}
    />
    <TextField
      label="Phone Number"
      name="phone"
      value={formValues.phone}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
      error={!!formErrors.phone}
      helperText={formErrors.phone}
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
      variant="outlined"
      sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
    />
    <TextField
      label="Password"
      name="password"
      type="password"
      value={formValues.password}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
      error={!!formErrors.password}
      helperText={formErrors.password}
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
      variant="outlined"
      sx={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 1 }}
    />
    <TextField
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={formValues.confirmPassword}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
      error={!!formErrors.confirmPassword}
      helperText={formErrors.confirmPassword}
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
      variant="outlined"
      sx={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 1 }}
    />

    {/* Divider Text */}
    <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'white', my: 2 }}>
      or sign up with
    </Typography>

    {/* Social Login Buttons */}
   
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 2 }}>
  <Button
    variant="outlined"
    sx={{
      color: 'white',
      borderColor: 'gray',
      '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
      width: '100%',
      maxWidth: '300px',
    }}
    startIcon={<GoogleIcon />}
    onClick={() => handleSocialLogin('google')}
  >
    Login with Google
  </Button>
  
  <Button
    variant="outlined"
    sx={{
      color: 'white',
      borderColor: 'gray',
      '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
      width: '100%',
      maxWidth: '300px',
    }}
    startIcon={<GitHubIcon />}
    onClick={() => handleSocialLogin('github')}
  >
    Login with GitHub
  </Button>
  
  <Button
    variant="outlined"
    sx={{
      color: 'white',
      borderColor: 'gray',
      '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
      width: '100%',
      maxWidth: '300px',
    }}
    startIcon={<AppleIcon />}
    onClick={() => handleSocialLogin('apple')}
  >
    Login with Apple
  </Button>
</Box>

  </>
)}



            {activeStep === 1 && (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel sx={{ color: 'white' }}>College</InputLabel>
                  <Select
                    name="college"
                    value={formValues.college}
                    onChange={handleInputChange}
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      "& .MuiSelect-icon": { color: 'white' }
                    }}
                  >
                    <MenuItem value="Sri Venkateshwara College of Engineering">Sri Venkateshwara College of Engineering</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                {formValues.college === "Other" && (
                  <TextField
                    label="Enter College Name"
                    name="otherCollege"
                    value={formValues.otherCollege}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    variant="outlined"
                    sx={{ backgroundColor: '#333', borderRadius: 1 }}
                  />
                )}
                <TextField
                  label="Course"
                  name="course"
                  value={formValues.course}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.course}
                  helperText={formErrors.course}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
                />
                <TextField
                  label="Semester"
                  name="semester"
                  value={formValues.semester}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.semester}
                  helperText={formErrors.semester}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
                />
              </>
            )}

            {activeStep === 2 && (
              <TextField
                label="Chess.com ID"
                name="chessId"
                value={formValues.chessId}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!formErrors.chessId}
                helperText={formErrors.chessId}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
              />
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ backgroundColor: 'gray' }}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  '&:hover': { backgroundColor: 'darkorange' }
                }}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegistrationForm;
