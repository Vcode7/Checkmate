"use client";
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Divider } from '@mui/material';

// Sample data for club members
const clubMembers = [
  {
    name: 'Alice Johnson',
    image: '/images/alice.jpg',
    course: 'Computer Science',
  },
  {
    name: 'Bob Smith',
    image: '/images/bob.jpg',
    course: 'Electrical Engineering',
  },
  {
    name: 'Cathy Lee',
    image: '/images/cathy.jpg',
    course: 'Mechanical Engineering',
  },
  {
    name: 'David Brown',
    image: '/images/david.jpg',
    course: 'Business Administration',
  },
];

// Sample data for mentors
const mentors = [
  {
    name: 'Dr. Emily Rose',
    image: '/images/emily.jpg',
    title: 'Senior Lecturer, Computer Science',
  },
  {
    name: 'Mr. John Doe',
    image: '/images/john.jpg',
    title: 'Chess Grandmaster and Coach',
  },
];

// College details
const collegeDetails = {
  name: 'Checkmate College',
  logo: '/images/college-logo.jpg',
  address: '123 Chess St, Knowledge City',
};

const AboutPage = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'black', marginTop:"2rem" , color: 'white', minHeight: '100vh' }}>
      
      {/* Club Description Section */}
      <Box sx={{ marginBottom: '4rem', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'lightblue', fontWeight: 'bold' }}>
          About Checkmate Chess Club
        </Typography>
        <Typography variant="body1" sx={{ color: 'lightgray', maxWidth: '800px', margin: 'auto' }}>
          The Checkmate Chess Club is dedicated to fostering a community for chess enthusiasts at all levels. Whether you are just starting out or an experienced player, our club offers a platform to enhance your skills, participate in competitive events, and make lifelong connections. Join us as we strategize, compete, and enjoy the world of chess.
        </Typography>
      </Box>

      {/* College Details Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem' }}>
        <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
          <CardMedia
            component="img"
            image={collegeDetails.logo}
            alt="College Logo"
            sx={{ width: 80, height: 80, borderRadius: '50%', marginRight: '1rem' }}
          />
          <CardContent>
            <Typography variant="h5" sx={{ color: 'lightblue', fontWeight: 'bold' }}>
              {collegeDetails.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'lightgray' }}>
              {collegeDetails.address}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Club Members Section */}
      <Box sx={{ marginBottom: '4rem' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'lightblue', fontWeight: 'bold' }}>
          Our Members
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {clubMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                <CardMedia component="img" height="200" image={member.image} alt={member.name} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'lightgray' }}>
                    {member.course}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mentors Section */}
      <Box sx={{ marginBottom: '4rem' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'lightblue', fontWeight: 'bold' }}>
          Our Mentors
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {mentors.map((mentor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                <CardMedia component="img" height="200" image={mentor.image} alt={mentor.name} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {mentor.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'lightgray' }}>
                    {mentor.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Extra Section: Upcoming Events */}
      <Box sx={{ marginBottom: '4rem', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'lightblue', fontWeight: 'bold' }}>
          Upcoming Events
        </Typography>
        <Typography variant="body1" sx={{ color: 'lightgray', maxWidth: '800px', margin: 'auto' }}>
          Stay tuned for our exciting lineup of tournaments, workshops, and social gatherings! Our events provide opportunities for all members to showcase their skills, learn from experts, and form connections with fellow chess enthusiasts.
        </Typography>
      </Box>

      {/* Closing Section */}
      <Divider sx={{ backgroundColor: 'lightblue', marginY: '2rem' }} />
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="body2" sx={{ color: 'lightgray' }}>
          Join us and make your move with the Checkmate Chess Club!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
