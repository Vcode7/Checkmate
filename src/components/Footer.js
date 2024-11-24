"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Link, IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Animate from './animate'; // Ensure to import the Animate component
import TextStyle from './style/Textstyle';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 3000);
  }, []);
  return (
    <Animate animationType="fadeIn">
      <Box
        component="footer"
        sx={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 60%,rgba(0, 0, 0, 1) 100%)', // Gradient from transparent to black
          color: 'white',
          padding: '2rem 2rem',
          opacity:isVisible ? 1:0 ,
           // Increased margin-top for more space
        }}
      >
        <Grid container spacing={4} className='mt-20' justifyContent="center">
          
          {/* About Checkmate Chess Club */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Checkmate
            </Typography>
            <Typography variant="body2">
              Checkmate Chess Club is dedicated to bringing together chess
              enthusiasts of all levels. Whether you&apos;re a beginner or a grandmaster,
              join us to improve your skills and participate in exciting tournaments!
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" className='hover:text-orange-700' underline='none'>
                Home
              </Link>
            </Box>
            <Box>
              <Link href="/tournament" color="inherit" className='hover:text-orange-700' underline='none'>
                Upcoming Tournaments
              </Link>
            </Box>
            <Box>
              <Link href="/register" color="inherit" className='hover:text-orange-700' underline='none'>
                register
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" className='hover:text-orange-700' underline='none'>
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
          <Typography variant="body2" color='orange'>
            &copy; {new Date().getFullYear()} Checkmate Chess Club. All rights reserved.
          </Typography>
          <TextStyle text="&quot;Where Every Move Counts!&quot;"/>
        </Box>
      </Box>
    </Animate>
  );
};

export default Footer;
