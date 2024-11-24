"use client";
import React from "react";
import { Box, Typography, Card, CardContent, Grid, Link, List, ListItem, ListItemText } from "@mui/material";

const resources = [
  {
    step: "Learn the Basics of Chess",
    description: "Understand the rules of the game, how the pieces move, and the objective of chess.",
    links: [
      { label: "Chess Basics - Chess.com", url: "https://www.chess.com/learn-how-to-play-chess" },
      { label: "Beginner Guide - The Chess World", url: "https://thechessworld.com/learn-chess/" },
    ],
  },
  {
    step: "Master Opening Strategies",
    description: "Learn the most common opening strategies to start your games strong.",
    links: [
      { label: "Chess Openings Explained - Chessable", url: "https://www.chessable.com/courses/chess-openings/" },
      { label: "Guide to Openings - Chess.com", url: "https://www.chess.com/openings" },
    ],
  },
  {
    step: "Develop Your Tactics",
    description: "Practice tactics like forks, pins, and discovered attacks to gain an advantage.",
    links: [
      { label: "Tactics Trainer - Lichess", url: "https://lichess.org/training" },
      { label: "Tactics Explained - iChess", url: "https://www.ichess.net/shop/chess-tactics-for-beginners/" },
    ],
  },
  {
    step: "Understand the Endgame",
    description: "Learn how to convert advantages into victories with solid endgame play.",
    links: [
      { label: "Endgame Fundamentals - Chess.com", url: "https://www.chess.com/lessons/endgames" },
      { label: "Endgame Techniques - Lichess", url: "https://lichess.org/practice/endgames" },
    ],
  },
  {
    step: "Participate in Tournaments",
    description: "Test your skills by participating in online or local tournaments.",
    links: [
      { label: "Find Tournaments - Chess.com", url: "https://www.chess.com/tournaments" },
      { label: "Play Tournaments - Lichess", url: "https://lichess.org/tournament" },
    ],
  },
];

const LearnPage = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}>
        Learn Chess
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "#555", maxWidth: "800px", margin: "0 auto 3rem auto" }}
      >
        Master the art of chess with these resources and step-by-step guides. Whether you are a beginner or an advanced
        player, there something here for everyone.
      </Typography>
      <Grid container spacing={3}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", backgroundColor: "#ffffff", borderRadius: "8px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {resource.step}
                </Typography>
                <Typography variant="body2" sx={{ color: "#777", marginBottom: "1rem" }}>
                  {resource.description}
                </Typography>
                <List>
                  {resource.links.map((link, idx) => (
                    <ListItem key={idx} disablePadding>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none" }}>
                        <ListItemText primary={link.label} sx={{ color: "#1976d2", "&:hover": { textDecoration: "underline" } }} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LearnPage;
