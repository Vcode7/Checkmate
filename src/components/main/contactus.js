"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton, Snackbar, Alert } from "@mui/material";
import { LinkedIn, Instagram, Email } from "@mui/icons-material";
import Animate from "../animate"; // Ensure to import the Animate component
import TextStyle from "../style/Textstyle";
import Loader from "../SimpleLoader";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const [loading, setLoading] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setLoading(false)
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setSnackbar({
          open: true,
          message: "Failed to send the message. Please try again.",
          severity: "error",
        });
        setLoading(false)

      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbar({
        open: true,
        message: "An error occurred while sending the message.",
        severity: "error",
      });
      setLoading(false)

    }
  };
  if (loading) {
    return<Loader/>
  }
  return (
    <Animate animationType="fadeInUp">
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "lightblue" }}>
          <TextStyle text="Contact Us" />
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "1rem", color: "lightgray" }}>
          Reach out to us on social media or send us a direct message below.
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 3 }}>
          <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: "orange" }}>
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="https://www.instagram.com/checkmates_club?igsh=MTV2NGxnN25yYjdnOQ==" target="_blank" rel="noopener noreferrer" sx={{ color: "orange" }}>
            <Instagram fontSize="large" />
          </IconButton>
        </Box>

        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            required
            name="name"
            label="Your Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={{
              input: { color: "white" },
              label: { color: "lightgray" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "lightgray" },
                "&:hover fieldset": { borderColor: "orange" },
              },
            }}
          />
          <TextField
            required
            name="email"
            label="Your Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              input: { color: "white" },
              label: { color: "lightgray" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "lightgray" },
                "&:hover fieldset": { borderColor: "orange" },
              },
            }}
          />
          <TextField
            required
            name="message"
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            sx={{
              textarea: { color: "white" },
              label: { color: "lightgray" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "lightgray" },
                "&:hover fieldset": { borderColor: "orange" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="dark"
            sx={{
              padding: "0.6rem 1.5rem",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "darkorange" },
              fontWeight: "bold",
              fontSize: "1rem",
              marginTop: 2,
              borderRadius: "50px",
            }}
            startIcon={<Email />}
          >
            Send Message
          </Button>
        </Box>

        {/* Snackbar for displaying success or error messages */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Animate>
  );
};

export default ContactUs;
