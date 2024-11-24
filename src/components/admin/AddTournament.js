"use client";
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
} from '@mui/material';

const AddTournamentModal = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [maxMembers, setMaxMembers] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [time, setTime] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tournamentData = {
      name,
      maxMembers,
      start,
      end,
      time,
      link,
      date,
    };

    try {
      const response = await fetch('/api/add_tournament', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournamentData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSnackbarMessage('Tournament added successfully!');
        setOpenSnackbar(true);
        handleClose();
      } else {
        setSnackbarMessage(data.error || 'Error adding tournament. Please try again.');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage('Error adding tournament. Please try again.');
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: 3,
            width: '400px',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color='black' gutterBottom>
            Add Tournament
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Tournament Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Max Members"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={maxMembers}
                  onChange={(e) => setMaxMembers(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Start Date"
                  type="time"
                  variant="outlined"
                  fullWidth
                  required
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End Date"
                  type="time"
                  variant="outlined"
                  fullWidth
                  required
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tournament Time"
                  variant="outlined"
                  fullWidth
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tournament Link"
                  type="url"
                  variant="outlined"
                  fullWidth
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tournament Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Add Tournament
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default AddTournamentModal;
