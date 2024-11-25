"use client"; // Ensure this component runs on the client-side

import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Card, 
  CardContent, 
  Divider, 
  Alert 
} from '@mui/material';
import { useRouter } from 'next/navigation'; // Import Next.js router// Import setToken function
import Loader from '@/components/SimpleLoader';
import { useUser } from '@/components/Userdataprovider';
import Link from 'next/link';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    emailOrPhone: '',
    password: '',
  });
  const {login} = useUser()
  const [forgotPassword, setForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [genotp, setGenotp] = useState(0)
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Initialize the router to handle redirects
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (response.ok && data.otp) {
        setOtpSent(true);
        setLoading(false);
        setGenotp(data.otp)
        setSuccessMessage('OTP sent to your email!');
      } else {
        setLoading(false);
        setError(data.error || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred while sending OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    setSuccessMessage('');
    if(otp !== genotp){
      setError(data.error || 'Invalid OTP. Please try again.');
      setLoading(false);
    }
    else{
    try {
      const response = await fetch('/api/getdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        login(data.token);
        setLoading(false);
        setSuccessMessage('OTP verified! Redirecting...');
        setTimeout(() => {
          router.replace('/');
        }, 1000);
      } else {
        setLoading(false);
        setError(data.error || 'An error occurred while verifying OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred while verifying OTP. Please try again.');
    }}
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        login(data.token);
        setLoading(false);
        setSuccessMessage('Login successful!');
        setTimeout(() => {
          router.replace('/');
        }, 500);
      } else {
        setLoading(false);
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <>
      {loading && <Loader />}
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
              {forgotPassword ? 'Login with OTP' : 'Login to Your Account'}
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

            {!forgotPassword && !otpSent ? (
              <form onSubmit={handleLoginSubmit}>
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
            ) : otpSent ? (
              <>
                <TextField
                  label="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor: '#333', borderRadius: 1 }}
                />
                <Button
                  onClick={handleVerifyOtp}
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
                  Verify OTP
                </Button>
              </>
            ) : (
              <>
                <TextField
                  label="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor: '#333', borderRadius: 1 }}
                />
                <Button
                  onClick={handleForgotPassword}
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
                  Send OTP
                </Button>
              </>
            )}
            {!otpSent && (
              <Button
                onClick={() => setForgotPassword(!forgotPassword)}
                fullWidth
                variant="text"
                sx={{ marginTop: 2, color: 'orange' }}
              >
                {forgotPassword ? 'Back to Login' : 'Forgot Password?'}
              </Button>
            )}
            <p className='text-white '>If you Dont have account ?</p> <Link href="/register" className='text-orange-600'>click here</Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoginForm;
