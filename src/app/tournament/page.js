"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Tabs, Tab } from '@mui/material';
import dayjs from 'dayjs'; // Import dayjs for date formatting
import TextStyle from '@/components/style/Textstyle';

const TournamentPage = () => {
  const [tournamentType, setTournamentType] = useState('upcoming');
  const [tournaments, setTournaments] = useState({
    upcoming: [],
    completed: [],
    live: [],
  });

  useEffect(() => {
    const fetchTournaments = async () => {
      try {

        // const response = await fetch('/api/getTournaments');
        // const data = await response.json();
        const data = {
          success: true,
          tournaments: [
            // Upcoming Tournaments
            {
              name: "Summer Chess Open 2024",
              startDate: "2024-06-15T10:00:00Z",
              endDate: "2024-06-20T18:00:00Z",
              maxMembers: 50,
              registeredMembers: 35,
              timing: "10:00 AM - 5:00 PM",
              resultLink: "https://example.com/results/summer-open",
              joinLink: "https://example.com/join/summer-open",
            },
            {
              name: "Fall Chess Tournament 2024",
              startDate: "2024-09-10T08:00:00Z",
              endDate: "2024-09-15T18:00:00Z",
              maxMembers: 40,
              registeredMembers: 20,
              timing: "8:00 AM - 6:00 PM",
              resultLink: "https://example.com/results/fall-tournament",
              joinLink: "https://example.com/join/fall-tournament",
            },
            {
              name: "Winter Chess Invitational 2024",
              startDate: "2024-12-01T12:00:00Z",
              endDate: "2024-12-10T18:00:00Z",
              maxMembers: 60,
              registeredMembers: 40,
              timing: "12:00 PM - 6:00 PM",
              resultLink: "https://example.com/results/winter-invitational",
              joinLink: "https://example.com/join/winter-invitational",
            },
        
            // Live Tournaments
            {
              name: "Live Chess Championship 2024",
              startDate: "2024-05-10T08:00:00Z",
              endDate: "2024-05-10T17:00:00Z",
              maxMembers: 100,
              registeredMembers: 80,
              timing: "08:00 AM - 5:00 PM",
              resultLink: "https://example.com/results/live-championship",
              joinLink: "https://example.com/join/live-championship",
            },
            {
              name: "Spring Online Chess Battle 2024",
              startDate: "2024-04-15T10:00:00Z",
              endDate: "2024-04-15T18:00:00Z",
              maxMembers: 60,
              registeredMembers: 50,
              timing: "10:00 AM - 6:00 PM",
              resultLink: "https://example.com/results/spring-battle",
              joinLink: "https://example.com/join/spring-battle",
            },
            {
              name: "Rapid Fire Chess 2024",
              startDate: "2024-05-01T09:00:00Z",
              endDate: "2024-05-01T16:00:00Z",
              maxMembers: 40,
              registeredMembers: 30,
              timing: "9:00 AM - 4:00 PM",
              resultLink: "https://example.com/results/rapid-fire",
              joinLink: "https://example.com/join/rapid-fire",
            },
        
            // Completed Tournaments
            {
              name: "Grand Masters Invitational 2023",
              startDate: "2023-11-01T10:00:00Z",
              endDate: "2023-11-05T18:00:00Z",
              maxMembers: 32,
              registeredMembers: 30,
              timing: "10:00 AM - 6:00 PM",
              resultLink: "https://example.com/results/grand-masters-2023",
              joinLink: "https://example.com/join/grand-masters-2023",
            },
            {
              name: "Autumn Chess Open 2023",
              startDate: "2023-10-01T09:00:00Z",
              endDate: "2023-10-05T18:00:00Z",
              maxMembers: 50,
              registeredMembers: 48,
              timing: "9:00 AM - 6:00 PM",
              resultLink: "https://example.com/results/autumn-open-2023",
              joinLink: "https://example.com/join/autumn-open-2023",
            },
            {
              name: "Classic Chess Championship 2023",
              startDate: "2023-08-20T10:00:00Z",
              endDate: "2023-08-25T18:00:00Z",
              maxMembers: 40,
              registeredMembers: 35,
              timing: "10:00 AM - 6:00 PM",
              resultLink: "https://example.com/results/classic-championship-2023",
              joinLink: "https://example.com/join/classic-championship-2023",
            },
          ],
        };
        
        if (data.success) {
          const now = dayjs();
          const categorizedTournaments = { upcoming: [], completed: [], live: [] };

          // Categorizing tournaments based on the current date
          data.tournaments.forEach(tournament => {
            const startDate = dayjs(tournament.startDate);
            const endDate = dayjs(tournament.endDate);

            if (now.isBefore(startDate)) {
              categorizedTournaments.upcoming.push(tournament);
            } else if (now.isAfter(endDate)) {
              categorizedTournaments.completed.push(tournament);
            } else {
              categorizedTournaments.live.push(tournament);
            }
          });

          // Update state with the categorized tournaments
          setTournaments(categorizedTournaments);
        }
      } catch (error) {
        console.error('Error fetching tournaments:', error);
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
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 4 ,textShadow:"0 0 5px orange"}}>
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
        <Tab label="Live Tournaments" value="live" />
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
                '&:hover': { borderColor: 'darkorange' },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'lightblue' }}>
                  <TextStyle text={tournament.name}/>
                </Typography>
                <Typography>Date: {dayjs(tournament.startDate).format('YYYY-MM-DD')}</Typography>
                <Typography>{tournament.registeredMembers}/{tournament.maxMembers}</Typography>
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
                      href={tournament.joinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'transparent',
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
