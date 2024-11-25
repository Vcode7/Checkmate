"use client";
import React from "react";
import { Box, Typography, Card, CardContent, Grid, Link, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const resources = [
  {
    step: "Learn the Basics of Chess",
    description: "Understand the rules of the game, how the pieces move, and the objective of chess.",
    links: [
      { label: "Chess Basics - Chess.com", url: "https://www.chess.com/learn-how-to-play-chess" },
      { label: "Beginner Guide - The Chess World", url: "https://thechessworld.com/learn-chess/" },
      { label: "Rules of Chess - FIDE", url: "https://www.fide.com/FIDE/handbook/LawsOfChess.pdf" },
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
    step: "Italian Opening (e4 e5 Nf3 Nc6 Bc4)",
    description: "A classic opening for beginners that focuses on controlling the center and preparing for rapid development.",
    links: [
      { label: "Italian Game Tutorial - Chess.com", url: "https://www.chess.com/openings/Italian-Game" },
      { label: "Italian Opening Explained - The Chess Website", url: "https://thechesswebsite.com/italian-game/" },
    ],
  },
  {
    step: "Sicilian Defense (e4 c5)",
    description: "A counter-attacking opening used by black, aiming to control the center from the flank.",
    links: [
      { label: "Sicilian Defense Guide - Chess.com", url: "https://www.chess.com/openings/Sicilian-Defense" },
      { label: "Mastering the Sicilian - Chessable", url: "https://www.chessable.com/sicilian-defense/course/42385/" },
    ],
  },
  {
    step: "Ruy Lopez (e4 e5 Nf3 Nc6 Bb5)",
    description: "A top-level opening known for its strategic depth, focusing on pressuring the black knight.",
    links: [
      { label: "Ruy Lopez Explained - Chess.com", url: "https://www.chess.com/openings/Ruy-Lopez" },
      { label: "Ruy Lopez Course - Chessable", url: "https://www.chessable.com/ruy-lopez/course/24457/" },
    ],
  },
  {
    step: "French Defense (e4 e6)",
    description: "A solid defensive opening for black, aiming to challenge white's central pawn structure.",
    links: [
      { label: "French Defense Basics - Chess.com", url: "https://www.chess.com/openings/French-Defense" },
      { label: "French Defense Guide - iChess", url: "https://www.ichess.net/blog/french-defense/" },
    ],
  },
  {
    step: "King’s Indian Defense (d4 Nf6 c4 g6)",
    description: "A hypermodern defense that allows black to counterattack later in the game.",
    links: [
      { label: "King’s Indian Defense Guide - Chess.com", url: "https://www.chess.com/openings/Kings-Indian-Defense" },
      { label: "King’s Indian Defense Explained - Chessable", url: "https://www.chessable.com/kings-indian-defense/course/37525/" },
    ],
  },
  {
    step: "Caro-Kann Defense (e4 c6)",
    description: "A solid, positional defense for black that minimizes risk and prepares for the endgame.",
    links: [
      { label: "Caro-Kann Defense Basics - Chess.com", url: "https://www.chess.com/openings/Caro-Kann-Defense" },
      { label: "Caro-Kann Explained - iChess", url: "https://www.ichess.net/blog/caro-kann-defense/" },
    ],
  },
  {
    step: "Grünfeld Defense (d4 Nf6 c4 g6 Nc3 d5)",
    description: "A dynamic opening for black that challenges white's control of the center.",
    links: [
      { label: "Grünfeld Defense Guide - Chess.com", url: "https://www.chess.com/openings/Grunfeld-Defense" },
      { label: "Learn Grünfeld Defense - Chessable", url: "https://www.chessable.com/grunfeld-defense/course/46923/" },
    ],
  },
  {
    step: "Develop Your Tactics",
    description: "Practice tactics like forks, pins, skewers, and discovered attacks to improve your game.",
    links: [
      { label: "Tactics Trainer - Lichess", url: "https://lichess.org/training" },
      { label: "Chess Tactics Explained - Chess.com", url: "https://www.chess.com/lessons/tactics" },
    ],
  },
  {
    step: "Endgame Basics",
    description: "Learn key endgame principles like king activity, pawn promotion, and opposition.",
    links: [
      { label: "Endgame Fundamentals - Chess.com", url: "https://www.chess.com/lessons/endgames" },
      { label: "Endgame Course - Chessable", url: "https://www.chessable.com/endgames/course/36825/" },
    ],
  },
  {
    step: "Participate in Tournaments",
    description: "Apply your skills in online or local tournaments and gain practical experience.",
    links: [
      { label: "Chess.com Tournaments", url: "https://www.chess.com/tournaments" },
      { label: "Lichess Tournaments", url: "https://lichess.org/tournament" },
    ],
  },
  {
    step: "Analyze Your Games",
    description: "Use tools to analyze your games and understand your strengths and weaknesses.",
    links: [
      { label: "Game Analysis - Chess.com", url: "https://www.chess.com/analysis" },
      { label: "Lichess Analysis Board", url: "https://lichess.org/analysis" },
    ],
  },
  {
    step: "Learn from Grandmasters",
    description: "Study games played by grandmasters to understand advanced strategies.",
    links: [
      { label: "Master Games Database - Chess.com", url: "https://www.chess.com/games" },
      { label: "Learn from GM Games - Lichess", url: "https://lichess.org/study" },
    ],
  },
];

const LearnPage = () => {
  return (
    <Box
    sx={{
      padding: "8rem 2rem",
      background: "linear-gradient(135deg, #1a1a1a 40%, #333333 100%)",
      minHeight: "100vh",
      color: "#f4f4f4",
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        textAlign: "center",
        marginBottom: "2rem",
        fontWeight: "bold",
        color: "#f97316",
      }}
    >
      Learn Chess
    </Typography>
    <Typography
      variant="body1"
      sx={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto 3rem auto",
        color: "#d4d4d4",
      }}
    >
      Master the art of chess with these resources and step-by-step guides. Whether youre a beginner or an advanced
      player, theres something here for everyone to elevate your game.
    </Typography>
    <Grid container spacing={4}>
      {resources.map((resource, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: "100%",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#f97316",
                }}
              >
                {resource.step}
              </Typography>
              <Typography variant="body2" sx={{ color: "#d4d4d4", marginBottom: "1rem" }}>
                {resource.description}
              </Typography>
              <List>
                {resource.links.map((link, idx) => (
                  <ListItem key={idx} disablePadding>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: "none",
                        "&:hover": {
                          color: "#ffba08",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        sx={{ color: "#ffba08" }}
                      />
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
