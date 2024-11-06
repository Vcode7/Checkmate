"use client";
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Tabs, Tab } from '@mui/material';

const TournamentPage = () => {
  const [tournamentType, setTournamentType] = useState('upcoming');

  // Example tournament data
  const tournaments = {
    upcoming: [
      {
        name: 'Autumn Classic',
        date: '2024-11-15',
        maxMembers: 100,
        registeredMembers: 75,
        timing: '10:00 AM - 6:00 PM',
        joinLink: 'https://www.chess.com/join/autumn-classic',
      },
    ],
    completed: [
      {
        name: 'Spring Invitational',
        date: '2024-04-10',
        maxMembers: 80,
        registeredMembers: 80,
        timing: '9:00 AM - 5:00 PM',
        resultLink: 'https://www.chess.com/results/spring-invitational',
      },
    ],
    live: [
      {
        name: 'Winter Blitz',
        date: 'Ongoing',
        maxMembers: 120,
        registeredMembers: 100,
        timing: '2:00 PM - 8:00 PM',
        joinLink: 'https://www.chess.com/join/winter-blitz',
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTournamentType(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: 'auto',
        padding: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '8px',
        color: 'white',
        marginTop: '5rem',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'lightblue', mb: 4 }}>
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
            '&.Mui-selected': { color: 'lightblue' },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'lightblue',
          },
        }}
          variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Upcoming Tournaments" value="upcoming" />
        <Tab label="Completed Tournaments" value="completed" />
        <Tab label="Live Tournaments" value="live" />
      </Tabs>

      <Grid container spacing={3}>
        {tournaments[tournamentType].map((tournament, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '2px solid',
                borderColor: 'purple',
                borderRadius: 2,
                color: 'white',
                transition: '0.3s',
                '&:hover': { borderColor: 'darkorange' },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'lightblue' }}>
                  {tournament.name}
                </Typography>
                <Typography>Date: {tournament.date}</Typography>
                <Typography>Max Members: {tournament.maxMembers}</Typography>
                <Typography>Registered Members: {tournament.registeredMembers}</Typography>
                <Typography>Timing: {tournament.timing}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  {tournamentType === 'completed' ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={tournament.resultLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'darkgreen',
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
                      href={tournament.joinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'purple',
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
