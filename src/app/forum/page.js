"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Modal,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Menu,
  MenuItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// Sample questions data
const initialQuestions = [
  {
    id: 1,
    title: "How do I join a chess tournament?",
    description:
      "I want to participate in the chess tournaments organized by the club. What is the process to register and join?",
    tags: ["Chess", "Tournaments", "Registration"],
  },
  {
    id: 2,
    title: "How can I improve my chess skills?",
    description:
      "What resources or activities does the club offer to help members enhance their chess strategies and skills?",
    tags: ["Chess", "Skill Improvement", "Training"],
  },
  {
    id: 3,
    title: "How do I log in to the club's portal?",
    description:
      "I am a new member of the chess club. How can I log in to the club's portal to access events and updates?",
    tags: ["Chess Club", "Portal", "Login"],
  },
  {
    id: 4,
    title: "What are the rules for the upcoming tournaments?",
    description:
      "Where can I find the official rules and guidelines for participating in the upcoming chess tournaments?",
    tags: ["Chess", "Tournaments", "Rules"],
  },
  {
    id: 5,
    title: "How can I volunteer or mentor in the chess club?",
    description:
      "I would like to contribute to the club as a mentor or volunteer. What opportunities are available, and how do I apply?",
    tags: ["Chess Club", "Mentorship", "Volunteering"],
  },
];


const ForumPage = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState({ title: "", description: "", tags: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Open and close modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Open and close menu
  const handleOpenMenu = (event) => setMenuAnchor(event.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);

  // Handle changes in modal inputs
  const handleInputChange = (e) => setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });

  // Add question to the list
  const handleAddQuestion = () => {
    if (newQuestion.title && newQuestion.description) {
      const newQuestionData = {
        id: questions.length + 1,
        title: newQuestion.title,
        description: newQuestion.description,
        tags: newQuestion.tags.split(",").map((tag) => tag.trim()),
      };
      setQuestions([...questions, newQuestionData]);
      setNewQuestion({ title: "", description: "", tags: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        color: "white",
        marginTop:"5rem",
        minHeight: "100vh",
      }}
    >
      {/* Header with Menu Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="lightblue">
          Forum
        </Typography>
        <IconButton color="primary" onClick={handleOpenMenu}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleCloseMenu}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "black",
            },
          }}
        >
          <MenuItem onClick={() => { handleCloseMenu(); handleOpenModal(); }}>
            Add New Question
          </MenuItem>
        </Menu>
      </Box>

      {/* Display Questions */}
      <Grid container spacing={3}>
        {questions.map((question) => (
          <Grid item xs={12} md={6} key={question.id}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="lightblue" gutterBottom>
                  {question.title}
                </Typography>
                <Typography variant="body2" color="lightgray" marginBottom="0.5rem">
                  {question.description}
                </Typography>
                <Box display="flex" gap="0.5rem" flexWrap="wrap">
                  {question.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={`#${tag}`}
                      sx={{ color: "white", backgroundColor: "purple" }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Adding Question */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" mb={2} fontWeight="bold" color="lightblue">
            Ask a New Question
          </Typography>
          <TextField
            label="Title"
            name="title"
            fullWidth
            sx={{ marginBottom: "1rem", backgroundColor: "white", borderRadius: 1 }}
            value={newQuestion.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            fullWidth
            sx={{ marginBottom: "1rem", backgroundColor: "white", borderRadius: 1 }}
            value={newQuestion.description}
            onChange={handleInputChange}
          />
          <TextField
            label="Tags (comma-separated)"
            name="tags"
            fullWidth
            sx={{ marginBottom: "1rem", backgroundColor: "white", borderRadius: 1 }}
            value={newQuestion.tags}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddQuestion}
            fullWidth
            sx={{ fontWeight: "bold" }}
          >
            Submit Question
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ForumPage;
