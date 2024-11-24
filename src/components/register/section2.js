import React, { useState } from 'react';
import {
    Box, TextField, Button,  InputLabel, Select, MenuItem, FormControl
  } from '@mui/material';
const Section2Form = ({formValues,handleInputChange,formErrors,setFormErrors,onNext,onBack}) => {
 
  const validateStep = () => {
    const errors = {};
    if (!formValues.college) errors.college = 'College is required';
    if (!formValues.course) errors.course = 'Course is required';
    if (!formValues.semester) errors.semester = 'Semester is required';
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateStep();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
        onNext();
    }
    }

  return (
    <Box component="form" noValidate sx={{ mt: 2 }}>
             
                <FormControl fullWidth margin="normal">
                  <InputLabel sx={{ color: 'white' }}>College</InputLabel>
                  <Select
                    name="college"
                    value={formValues.college}
                    onChange={handleInputChange}
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      "& .MuiSelect-icon": { color: 'white' }
                    }}
                  >
                    <MenuItem value="Sri Venkateshwara College of Engineering">Sri Venkateshwara College of Engineering</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                {formValues.college === "Other" && (
                  <TextField
                    label="Enter College Name"
                    name="otherCollege"
                    value={formValues.otherCollege}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                    variant="outlined"
                    sx={{ backgroundColor: '#333', borderRadius: 1 }}
                  />
                )}
                <TextField
                  label="Course"
                  name="course"
                  value={formValues.course}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.course}
                  helperText={formErrors.course}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
                />
                <TextField
                  label="Semester"
                  name="semester"
                  value={formValues.semester}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!formErrors.semester}
                  helperText={formErrors.semester}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  variant="outlined"
                  sx={{ backgroundColor:'rgba(0,0,0,0.7)', borderRadius: 1 }}
                />
              
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            <Button variant="contained" onClick={onBack} sx={{ backgroundColor: 'gray' }}>
                    Back
           </Button>
                <Button
                    onClick={onNext}
                    variant="contained"
                    sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        '&:hover': { backgroundColor: 'darkorange' }
                    }}
                >
                    Next
                </Button>
            </Box>
          
    </Box>
  );
};

export default Section2Form;
