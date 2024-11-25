"use client";
import React, { useState } from 'react';
import {
  Typography,Box, TextField, Button
  } from '@mui/material';
import { useUser } from '../Userdataprovider';

const Section3Form = ({formValues,handleInputChange,setReserr, onBack,setLoading, onSubmit }) => {

  const [error, setError] = useState('');
  const {login} = useUser()
  const handleSubmit = async () => {
    setLoading(true)
    if (!formValues.chessId) {
      setError('Chess.com ID is required');
      return;
    }
   const formdata = {
    ...formValues,
    college : formValues.college === 'Other' ? formValues.otherCollege : formValues.college
   }
   const response = await fetch('/api/register_3', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formdata),
});
const res = await response.json();
if (res.success) {
  setReserr("")
  setLoading(false)
  login(res.token);
  onSubmit();
}
else{
  setReserr(res.error)
  setLoading(false)
}
  };

  return (
    <Box component="form" noValidate sx={{ mt: 2 }}>
    
              <TextField
                label="Chess.com ID"
                name="chessId"
                value={formValues.chessId}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!formValues.chessId}
                helperText={error}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                variant="outlined"
                sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
              />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <Button onClick={onBack} variant="contained" sx={{ backgroundColor: 'gray' }}>
                    Back
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        '&:hover': { backgroundColor: 'darkorange' }
                    }}
                >
                    Submit
                </Button>
            </Box>
            <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'white', my: 2 }}>
                Enter valid chess.com id and verify its Yours
            </Typography>

    </Box>
  );
};

export default Section3Form;
