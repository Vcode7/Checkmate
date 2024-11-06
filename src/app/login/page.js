"use client";
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        marginTop:"5rem",
        backgroundImage: 'url(/img/c1.jpg)', // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Card sx={{ maxWidth: 400, padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Login to Your Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email or Phone"
              name="emailOrPhone"
              value={formValues.emailOrPhone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              variant="outlined"
              sx={{ backgroundColor: '#333', borderRadius: 1 }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              variant="outlined"
              sx={{ backgroundColor: '#333', borderRadius: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                marginTop: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'purple',
                '&:hover': {
                  backgroundColor: 'darkorange',
                },
              }}
            >
              Login
            </Button>
          </form>

          <Divider sx={{ my: 3, backgroundColor: 'gray' }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                color: 'white',
                borderColor: 'gray',
                '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
              }}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GitHubIcon />}
              sx={{
                color: 'white',
                borderColor: 'gray',
                '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
              }}
            >
              Continue with GitHub
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AppleIcon />}
              sx={{
                color: 'white',
                borderColor: 'gray',
                '&:hover': { borderColor: 'darkorange', color: 'darkorange' },
              }}
            >
              Continue with Apple
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
