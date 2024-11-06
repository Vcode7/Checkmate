"use client";
import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Animate from './animate'; // Ensure to import the Animate component

const Footer = () => {
  return (
    <Animate animationType="fadeIn">
      <Box
        component="footer"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '2rem 2rem',
          mt: 'auto',
        }}
      >

        <Grid container spacing={4} justifyContent="center">
          
          {/* About Checkmate Chess Club */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Checkmate
            </Typography>
            <Typography variant="body2">
              Checkmate Chess Club is dedicated to bringing together chess
              enthusiasts of all levels. Whether you’re a beginner or a grandmaster,
              join us to improve your skills and participate in exciting tournaments!
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" className='hover:text-red-700' underline='none'>
                Home
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" className='hover:text-red-700' underline='none'>
                Upcoming Events
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" className='hover:text-red-700' underline='none'>
                Membership
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" className='hover:text-red-700' underline='none'>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box >
              <IconButton color="inherit" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="body2" color='primary'>
            &copy; {new Date().getFullYear()} Checkmate Chess Club. All rights reserved.
          </Typography>
          <Typography variant="body2">
            "Where Every Move Counts!"
          </Typography>
        </Box>
      </Box>
    </Animate>
  );
};

export default Footer;
