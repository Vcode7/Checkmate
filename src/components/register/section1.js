import React, { useState } from 'react';
import {
      Box, TextField, Button, Typography,Alert
    } from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon, Apple as AppleIcon } from '@mui/icons-material';
    
const Section1Form = ({formValues,handleInputChange,formErrors,setFormErrors,setReserr, onNext}) => {
    
   
    const validateStep = () => {
        const errors = {};
        if (!formValues.name) errors.name = 'name is required';
        if (!formValues.email) errors.email = 'Email is required';
        if (!formValues.phone) errors.phone = 'Phone number is required';
        if (!formValues.password) errors.password = 'Password is required';
        if (formValues.password !== formValues.confirmPassword) errors.confirmPassword = 'Passwords do not match';
        if(formValues.password.length < 6) errors.password = 'Password lenght should be minimum 6'
        return errors;
    };

    const handleSubmit = async () => {
        const errors = validateStep();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const response = await fetch('/api/register_1', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });
            const res = await response.json()
            if (res.success) {
                setReserr("")
                onNext();
            }
            else{
                setReserr(res.error)
            }
        }
    };
    const handleSocialLogin = (provider) => {
        // Implement your actual authentication logic for each provider.
        console.log(`Login with ${provider} clicked`);
        // Simulate login success and move to the next section.
        onNext();
      };
    return (
        <Box component="form" noValidate sx={{ mt: 2 }}>
           
            {/* Email and Password Fields */}
            <TextField
                label="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!formErrors.name}
                helperText={formErrors.name}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                sx={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 1 }}
            />
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
                sx={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 1 }}
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
 <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <Button disabled="True" variant="contained" sx={{ backgroundColor: 'gray' }}>
                    Back
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        '&:hover': { backgroundColor: 'darkorange' }
                    }}
                >
                    Next
                </Button>
            </Box>
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

           
        </Box>
    );
};

export default Section1Form;
