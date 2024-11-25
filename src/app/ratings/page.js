"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent, Grid } from '@mui/material';
import { useUser } from '@/components/Userdataprovider';
import Loader from '@/components/SimpleLoader';

const RatingPage = ({ chessId }) => {
  const [ratings, setRatings] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData }= useUser();

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch(`https://api.chess.com/pub/player/${userData.chessId}/stats`);
        if (response.ok) {
          const data = await response.json();
          setRatings(data);
        } else {
          console.error('Failed to fetch ratings');
        }
      } catch (error) {
        console.error('Error fetching ratings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [userData]);

  if (loading) {
    return <Loader />
  }

  if (!ratings) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '2rem' }}>
        Ratings not available.
      </Typography>
    );
  }

  const { chess_blitz, chess_bullet, chess_rapid } = ratings;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
      <Card sx={{ maxWidth: 500, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '2rem' }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
            {userData.name}&apos;s Chess Ratings
          </Typography>
          <Grid container spacing={2}>
            {chess_blitz && (
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem' }}>
                  <Typography variant="h6">Blitz</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {chess_blitz.last.rating}
                  </Typography>
                </Card>
              </Grid>
            )}
            {chess_bullet && (
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem' }}>
                  <Typography variant="h6">Bullet</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {chess_bullet.last.rating}
                  </Typography>
                </Card>
              </Grid>
            )}
            {chess_rapid && (
              <Grid item xs={12} sm={4}>
                <Card sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem' }}>
                  <Typography variant="h6">Rapid</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {chess_rapid.last.rating}
                  </Typography>
                </Card>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RatingPage;
