"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, IconButton, Divider, useMediaQuery, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import {jwtDecode} from "jwt-decode";
const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState({});// Use theme.breakpoints here
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserData(decoded);
        setEditableData(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const handleEditToggle = () => setEditMode(!editMode);

  const handleInputChange = (field, value) => {
    setEditableData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSave = () => {
    setUserData(editableData);
    setEditMode(false);
    // Save changes here
  };

  if (!userData) {
    return <Typography variant="h6" align="center" sx={{ mt: 4 }}>No user information available. Please log in.</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop:"5rem",
        backgroundColor: 'black',
        padding:'2rem'
      }}
    >
      <Card sx={{
        maxWidth:800,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: 2,
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ width: 80, height: 80, backgroundColor: '#3f51b5' }}>
              {userData.email[0].toUpperCase()}
            </Avatar>
          </Box>
          <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
            Profile Information
          </Typography>

          <Grid container spacing={2}>
            {['email', 'phone', 'college', 'course', 'semester', 'chessId'].map((field) => (
              <Grid item xs={12} sm={6} key={field}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 'bold' }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Typography>
                  <Typography variant="body1">
                    {editMode ? (
                      <TextField
                        value={editableData[field] || ''}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        variant="standard"
                        size="small"
                        sx={{ color: 'white' }}
                      />
                    ) : (
                      userData[field]
                    )}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3, backgroundColor: 'grey.700' }} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {editMode ? (
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                color="primary"
                onClick={handleSave}
                sx={{ mr: 1 }}
              >
                Save
              </Button>
            ) : (
              <IconButton onClick={handleEditToggle} color="primary">
                <EditIcon />
              </IconButton>
            )}
            {editMode && (
              <IconButton onClick={handleEditToggle} color="secondary">
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
