"use client";
import React, { useState, useEffect } from "react";
import { TextField,Grid,Button, Typography, Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import AddTournamentModal from "@/components/admin/AddTournament";

// Styles for the modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const [totalRegistrations, setTotalRegistrations] = useState(0);
    const [registrations, setRegistrations] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [addtournamentmodelopen, setAddtournamentmodelopen] = useState(false)

    const handleopenadd = ()=>{setAddtournamentmodelopen(true)}
    const handlecloseadd = ()=>{setAddtournamentmodelopen(false)}
    //login
    const handleLogin = async () => {
        // Compare entered credentials with environment variables
        if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
          setIsAuthenticated(true);
          setError(""); // Clear any previous error
        } else {
          setError("invalid username or password");
        }
    };


    // Fetch data from the /totalregister endpoint
    useEffect(() => {
      const fetchRegistrations = async () => {
        setLoading(true);
        try {
          const response = await fetch("/api/totalregister");
          const data = await response.json();
          if (data.success) {
            setTotalRegistrations(data.totalCount);
            setRegistrations(data.registrations);
          }
        } catch (error) {
          console.error("Error fetching registration data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRegistrations();
    }, []);
  
    // Modal toggle handlers
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    if (!isAuthenticated) {
        // Render login form if not authenticated
        return (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bgcolor="#121212"
            color="#fff"
          >
            <Typography variant="h4" gutterBottom>
              Admin Login
            </Typography>
            <Box width="300px" textAlign="center">
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                color="white"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                    style: { color: 'white' },  // Set input value color
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },  // Set label color
                  }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                
                color="white"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    style: { color: 'white' },  // Set input value color
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },  // Set label color
                  }}
              />
              {error && (
                <Typography variant="body2" color="error" style={{ marginTop: "10px" }}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </Box>
          </Box>
        );
      }
  return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center",
          p: 4,
        }}
      >
        <Typography variant="h3" color="white" gutterBottom>
          Admin Dashboard
        </Typography>

        <Grid container spacing={4} sx={{ width: "100%", maxWidth: 800 }}>
          {/* Total Registrations */}
          <Grid item xs={12}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h5"  color="black">Total Registrations</Typography>
              <Typography variant="h3" color="red">
              {loading ? "Loading..." : totalRegistrations}
              </Typography>
            </Box>
          </Grid>

          {/* Show All Registrations */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleOpenModal}
            >
              Show All Registrations
            </Button>
          </Grid>

          {/* Add Tournament */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              onClick={handleopenadd}
            >
              Add Tournament
            </Button>
          </Grid>

          {/* Edit Tournament */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="warning"
              size="large"
              fullWidth
              onClick={() => console.log("Edit tournament clicked")}
            >
              Edit Tournament
            </Button>
          </Grid>

          {/* Announce Result */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              onClick={() => console.log("Announce result clicked")}
            >
              Announce Result
            </Button>
          </Grid>
        </Grid>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h5" color="black" gutterBottom>
            All Registrations
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ border: '2px solid black' }}>
            <TableHead>
            <TableRow
              sx={{
                backgroundColor: 'black', // Black background for the header
              }}
            >
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Phone</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>College</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Course</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Semester</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold',  }}>Chess ID</TableCell>
            </TableRow>
          </TableHead>
              <TableBody>
                {registrations.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.college}</TableCell>
                    <TableCell>{user.course}</TableCell>
                    <TableCell>{user.semester}</TableCell>
                    <TableCell>{user.chessId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseModal}
            style={{ marginTop: "20px" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <AddTournamentModal open={addtournamentmodelopen} handleClose={handlecloseadd}/>
      </Box>
  );
};

export default AdminPage;
