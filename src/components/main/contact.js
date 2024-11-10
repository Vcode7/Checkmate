"use client";
import React from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material';
import Animate from '../animate'; // Ensure to import the Animate component

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, such as sending an email via an API
  };

  return (
    <Animate animationType="fadeInUp">
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          margin: '2rem auto',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'lightblue' }}>
          Contact Us
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '1rem', color: 'lightgray' }}>
          Reach out to us on social media or send us a direct message below.
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3 }}>
          <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" color="primary">
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="primary">
            <Instagram fontSize="large" />
          </IconButton>
        </Box>

        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            required
            label="Your Name"
            variant="outlined"
            sx={{
              input: { color: 'white' },
              label: { color: 'lightgray' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'lightgray',
                },
                '&:hover fieldset': {
                  borderColor: 'lightblue',
                },
              },
            }}
          />
          <TextField
            required
            label="Your Email"
            variant="outlined"
            type="email"
            sx={{
              input: { color: 'white' },
              label: { color: 'lightgray' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'lightgray',
                },
                '&:hover fieldset': {
                  borderColor: 'lightblue',
                },
              },
            }}
          />
          <TextField
            required
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            sx={{
              textarea: { color: 'white' },
              label: { color: 'lightgray' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'lightgray',
                },
                '&:hover fieldset': {
                  borderColor: 'lightblue',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="dark"
            sx={{
              padding: '0.6rem 1.5rem',
              backgroundColor: 'red',
              '&:hover': { backgroundColor: 'darkorange' },
              fontWeight: 'bold',
              fontSize: '1rem',
              marginTop: 2,
              borderRadius:"50px",
            }}
            startIcon={<Email />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Animate>
  );
};

export default ContactUs;
