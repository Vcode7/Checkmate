"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Tabs, Tab } from '@mui/material';
import dayjs from 'dayjs'; // Import dayjs for date formatting
import TextStyle from '@/components/style/Textstyle';
import Loader from '@/components/SimpleLoader';

const TournamentPage = () => {
  const [tournamentType, setTournamentType] = useState('upcoming');
  const [loading, setLoading] = useState(true)
  const [tournaments, setTournaments] = useState({
    upcoming: [],
    completed: []
  });

  useEffect(() => {
    const fetchTournaments = async () => {
      try {

        const response = await fetch('/api/get_tournament');
        const data = await response.json();

        if (data.success) {
          const now = dayjs();
          const categorizedTournaments = { upcoming: [], completed: [], live: [] };

          // Categorizing tournaments based on the current date
          data.tournaments.forEach(tournament => {
            const date = dayjs(tournament.date);

            if (now.isAfter(date)) {
              categorizedTournaments.completed.push(tournament);
            }
            else {
              categorizedTournaments.upcoming.push(tournament);
            }
          });

          // Update state with the categorized tournaments
          setTournaments(categorizedTournaments);
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching tournaments:', error);
        setLoading(false)

      }
    };

    fetchTournaments();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTournamentType(newValue);
  };
  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: 'auto',
        padding: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        color: 'white',
        marginTop: '5rem',
        textAlign: 'center',

      }}
    >
      {loading &&<Loader />}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 4, textShadow: "0 0 5px black" }}>
        Tournaments
      </Typography>

      {/* Tabs for selecting tournament type */}
      <Tabs
        value={tournamentType}
        onChange={handleTabChange}
        sx={{
          marginBottom: 3,
          '& .MuiTab-root': {
            color: 'white',
            '&.Mui-selected': { color: 'darkorange' },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'orange',
          },
        }}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Upcoming Tournaments" value="upcoming" />
        <Tab label="Completed Tournaments" value="completed" />
      </Tabs>

      <Grid container spacing={3}>
        {tournaments[tournamentType].map((tournament, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '2px solid',
                borderColor: 'gray',
                borderRadius: 2,
                color: 'white',
                transition: '0.3s',
                '&:hover': { borderColor: 'white' },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'lightblue' }}>
                  <TextStyle text={tournament.name} />
                </Typography>
                <Typography>Date: {dayjs(tournament.date).format('YYYY-MM-DD')}</Typography>
                <Typography>MAX : {tournament.maxMembers}</Typography>
                <Typography>Timing: {tournament.start} to {tournament.end}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  {tournamentType === 'completed' ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={tournament.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        '&:hover': { backgroundColor: 'green' },
                      }}
                    >
                      View Results
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      href={tournament.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'orange',
                        color: 'white',
                        '&:hover': { backgroundColor: 'darkorange' },
                      }}
                    >
                      Join Tournament
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TournamentPage;
