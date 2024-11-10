"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, IconButton, Divider, useMediaQuery, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import {useUser} from "@/components/Userdataprovider"

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const userData = useUser();
  const [editableData, setEditableData] = useState(userData);// Use theme.breakpoints here

  const handleEditToggle = () => setEditMode(!editMode);

  const handleInputChange = (field, value) => {
    setEditableData((prevData) => ({ ...prevData, [field]: value }));
  };

   
  const handleSave = async () => {
    try {
      // Send static token (from env) for authorization
      const response = await fetch('/api/editdata', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,  // Static token from env
        },
        body: JSON.stringify({ userData: editableData }),
      });

      const result = await response.json();

      if (response.ok) {
        setEditMode(false);
        // Optionally, update the state or context with the updated data
      } else {
        setError(result.error || 'Failed to update profile');
      }
    } catch (err) {
      setError('Error occurred while updating profile');
    }
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
       
        padding:'2rem'
      }}
    >
      <Card sx={{
        maxWidth:800,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        padding: '.5rem',
        boxShadow: 3,
        marginTop:"5rem",
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
            {['name','email', 'phone', 'college', 'course', 'semester', 'chessId'].map((field) => (
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
                    position: 'relative',
                    textAlign:"center"
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
