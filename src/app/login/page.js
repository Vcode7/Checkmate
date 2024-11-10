"use client"; // Ensure this component runs on the client-side

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Divider, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import { useRouter } from 'next/navigation'; // Import Next.js router
import { setTokenInLocalStorage } from '@/components/tokenstore'; // Import setToken function

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Initialize the router to handle redirects

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Save token to localStorage using the setToken function
        setTokenInLocalStorage(data.token);

        // Show success message
        setSuccessMessage('Login successful!');

        // Set a timeout of 2 seconds before redirecting
        setTimeout(() => {
          // Redirect to the homepage after 2 seconds
          router.push('/');
        }, 2000);
      } else {
        // Display error message
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundImage: 'url(/img/c1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Card sx={{ maxWidth: 400, padding: '2rem', marginTop: '5rem', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Login to Your Account
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

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
