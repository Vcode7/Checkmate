"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, IconButton, Divider, TextField, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import { useUser } from "@/components/Userdataprovider";
import ChessLoader from '@/components/loader';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [visible, setVisible] = useState(false)
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const {userData,login} = useUser();
  
  console.log(userData)
  const [editableData, setEditableData] = useState({});
  useEffect(() => {
    if(userData){
      setEditableData(userData)
      setVisible(true)
    }
  }, [userData])
  
  const avatars = Array.from({ length: 20 }, (_, i) => `/profile/${i + 1}.png`); // List of avatar paths

  const handleEditToggle = () => setEditMode(!editMode);

  const handleInputChange = (field, value) => {
    setEditableData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAvatarClick = () => setAvatarModalOpen(true);

  const handleAvatarSelect = (avatarPath) => {
    setEditableData((prevData) => ({ ...prevData, avatar: avatarPath }));
    setAvatarModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/editdata', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
        body: JSON.stringify({ userData: editableData }),
      });

      const result = await response.json();

      if (response.ok) {
        login(result.token)
        setEditMode(false);
      } else {
        console.error(result.error || 'Failed to update profile');
      }
    } catch (err) {
      console.error('Error occurred while updating profile');
    }
  };

  if (!visible) {
    return <ChessLoader />;
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          padding: '.5rem',
          boxShadow: 3,
          marginTop: "5rem",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar
              sx={{ width: 80, height: 80, cursor: editMode ? 'pointer' : 'default' }}
              src={editableData.avatar}
              onClick={editMode ? handleAvatarClick : undefined}
            >
              {userData.email[0].toUpperCase()}
            </Avatar>
          </Box>
          <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: '800', mb: 3 }}>
            Profile Information
          </Typography>

          <Grid container spacing={2}>
            {['name', 'email', 'phone', 'college', 'course', 'semester', 'chessId'].map((field) => (
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
                    textAlign: "center"
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'grey.400', fontWeight: 'bold' }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Typography>
                    {editMode ? (
                      <TextField
                        value={editableData[field] || ''}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        variant="standard"
                        size="small"
                        color="white"
                        sx={{ color: 'white',background:"white",padding:"5px" }}
                      />
                    ) : (
                      <Typography variant="body1">
                      {userData[field]}
                  </Typography>
                    )}
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

      {/* Avatar Selection Modal */}
      <Dialog open={avatarModalOpen} onClose={() => setAvatarModalOpen(false)}>
        <DialogTitle>Select Avatar</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {avatars.map((avatar, index) => (
              <Grid item xs={3} key={index}>
                <Avatar
                  src={avatar}
                  sx={{
                    width: 80,
                    height: 80,
                    cursor: 'pointer',
                    border: editableData.avatar === avatar ? '2px solid blue' : 'none',
                  }}
                  onClick={() => handleAvatarSelect(avatar)}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProfilePage;
