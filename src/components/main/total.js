"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, CircularProgress } from '@mui/material';
import HeadStyle from '../style/Textstyle2';
import TextStyle from '../style/Textstyle';

const AdminPageSection = () => {
  const [totalRegistered, setTotalRegistered] = useState(null); // Holds the total registrations
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTotalRegistered = async () => {
      try {
        const response = await fetch('/api/totalregister'); // Fetch data from API
        if (!response.ok) {
          throw new Error('Failed to fetch total registrations');
        }
        const data = await response.json();
        setTotalRegistered(data.totalCount); // Assuming response has a `total` field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalRegistered();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: '2vh auto',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 3,
        borderRadius: 2,
      }}
    >
      {/* Total Registered Section */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 ,background:"transparent"}}>
        <Typography variant="h3" align="center" sx={{color:"white"}} gutterBottom>
          <HeadStyle  text="Total Registered Users" />
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="body1" align="center" color="error">
            {error}
          </Typography>
        ) : (
          <Typography
            variant="h2"
            align="center"
            sx={{ color: 'orange', fontWeight: 'bold' }}
          >
            {totalRegistered}
          </Typography>
        )}
      </Paper>

      {/* Chess.com Ratings and Tournaments Section */}
      <Paper elevation={3} sx={{ padding: 3 ,background:"transparent" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src="/img/chess-com.png" // Add your chess.com logo path here
              alt="Chess.com Logo"
              sx={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={8} sx={{color:"white"}}>
            <Typography variant="h5" sx={{fontWeight:"bold"}} gutterBottom>
              Chess.com Ratings and <TextStyle text="Tournaments" />
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
              We use the official Chess.com ratings to rank players accurately
              in our club. Players can sync their Chess.com profiles to display
              updated ratings and participate in online tournaments. The
              platform ensures fair competition and seamless tournament
              management for all participants.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AdminPageSection;
