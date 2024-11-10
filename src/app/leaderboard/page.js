"use client";
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography } from '@mui/material';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch leaderboard data from the API
    const fetchLeaderboardData = async () => {
      try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();

        if (res.ok) {
          setLeaderboard(data); // Set the leaderboard data
        } else {
          setError(data.error || 'Failed to fetch leaderboard');
        }
      } catch (err) {
        setError('Error fetching leaderboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  // Display loading state
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: '20px', color: 'white' }}>
          Loading leaderboard...
        </Typography>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6" color="error" style={{ color: 'white' }}>
          Error: {error}
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Dark background
        padding: '5rem 1rem', // Top margin of 5rem
      }}
    >
      <Typography variant="h4" align="center" gutterBottom style={{ color: 'white' }}>
        Leaderboard
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'transparent', // Transparent background
          border: '2px solid orange', // Orange border
          borderRadius: '8px', // Rounded corners for the table
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="leaderboard table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderBottom: '2px solid orange', color: 'white' }}>Name</TableCell>
              <TableCell sx={{ borderBottom: '2px solid orange', color: 'white' }}>Chess ID</TableCell>
              <TableCell sx={{ borderBottom: '2px solid orange', color: 'white' }}>Blitz Rating</TableCell>
              <TableCell sx={{ borderBottom: '2px solid orange', color: 'white' }}>Rapid Rating</TableCell>
              <TableCell sx={{ borderBottom: '2px solid orange', color: 'white' }}>Bullet Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ borderBottom: '2px solid orange', color: 'white' }}>
                  No leaderboard data available
                </TableCell>
              </TableRow>
            ) : (
              leaderboard.map((user, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: '1px solid orange', color: 'white' }}>{user.name}</TableCell>
                  <TableCell sx={{ borderBottom: '1px solid orange', color: 'white' }}>{user.chessId}</TableCell>
                  <TableCell sx={{ borderBottom: '1px solid orange', color: 'white' }}>{user.blitzRating}</TableCell>
                  <TableCell sx={{ borderBottom: '1px solid orange', color: 'white' }}>{user.rapidRating}</TableCell>
                  <TableCell sx={{ borderBottom: '1px solid orange', color: 'white' }}>{user.bulletRating}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Leaderboard;
