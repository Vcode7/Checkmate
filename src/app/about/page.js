"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
} from "@mui/material";

// Sample data for club members
const clubMembers = [
  {
    name: "Anjali Kumari",
    image: "/profile/20.png",
    course: "CSE_CY",
  },
  {
    name: "Payal Kumari",
    image: "/profile/4.png",
    course: "CSE_CY",
  },
  {
    name: "Pranati R",
    image: "/profile/3.png",
    course: "CSE_CY",
  },
  {
    name: "Nehal yadav",
    image: "/profile/13.png",
    course: "CSE_AI",
  },
  {
    name: "Vikas N",
    image: "/profile/12.png",
    course: "CSE_AI",
  },
];

// College details
const collegeDetails = {
  name: "Sri Venkateshwar College of Engineering",
  logo: "/svce.jpeg",
  address:
    "Kempegowda International Airport Bengaluru, Road, Kempegowda Int'l Airport Rd, Vidya Nagar, Central Telecom Society, Bengaluru, Karnataka 562157",
};

const AboutPage = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        color: "white",
        minHeight: "100vh"
      }}
    >
      {/* Club Description Section */}
      <Box sx={{ margin: "4rem 0", textAlign: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "lightblue", fontWeight: "bold" }}
        >
          About Checkmate Chess Club
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "lightgray", maxWidth: "800px", margin: "auto" }}
        >
          The Checkmate Chess Club is dedicated to fostering a community for
          chess enthusiasts at all levels. Whether you are just starting out or
          an experienced player, our club offers a platform to enhance your
          skills, participate in competitive events, and make lifelong
          connections. Join us as we strategize, compete, and enjoy the world
          of chess.
        </Typography>
      </Box>

      {/* College Details Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1rem",
            borderRadius: "10px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            component="img"
            src={collegeDetails.logo}
            alt="College Logo"
            sx={{
              height: { xs: 100, sm: 200 },
              marginRight: { sm: "1rem", xs: 0 },
              marginBottom: { xs: "1rem", sm: 0 },
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "lightblue", fontWeight: "bold", textAlign: "center" }}
            >
              {collegeDetails.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "lightgray", textAlign: "center" }}
            >
              {collegeDetails.address}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Club Members Section */}
      <Box sx={{ marginBottom: "4rem" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "lightblue", fontWeight: "bold" }}
        >
          Our Members
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {clubMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    height: 250,
                    filter: "brightness(0.7)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "lightgray", textAlign: "center" }}
                  >
                    {member.course}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Upcoming Events Section */}
      <Box sx={{ marginBottom: "4rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "lightblue", fontWeight: "bold" }}
        >
          Upcoming Events
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "lightgray", maxWidth: "800px", margin: "auto" }}
        >
          Stay tuned for our exciting lineup of tournaments, workshops, and
          social gatherings! Our events provide opportunities for all members
          to showcase their skills, learn from experts, and form connections
          with fellow chess enthusiasts.
        </Typography>
      </Box>

      {/* Closing Section */}
      <Divider sx={{ backgroundColor: "lightblue", marginY: "2rem" }} />
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography variant="body2" sx={{ color: "lightgray" }}>
          Join us and make your move with the Checkmate Chess Club!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
