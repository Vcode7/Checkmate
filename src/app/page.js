"use client";
<<<<<<< HEAD
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
=======

import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ChessLoader from "@/components/loader";// Import the ChessLoader component
>>>>>>> 25ee8bd (0000)
import Main from "@/components/main/main";
import AboutSection from "@/components/main/about";
import BenefitsSection from "@/components/main/benifits";
import RegistrationSteps from "@/components/main/registrationstep";
import LearnChessSection from "@/components/main/learnchess";
import ContactUs from "@/components/main/contact";
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ChessLoader from '@/components/loader';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
=======

const darkTheme = createTheme({
  palette: {
    mode: "dark",
>>>>>>> 25ee8bd (0000)
  },
});

export default function Home() {
<<<<<<< HEAD
  
  return (
    <div >
   
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
      <AboutSection />
      <BenefitsSection />
      <RegistrationSteps />
      <LearnChessSection />
      <ContactUs />
      </ThemeProvider>
     
    
=======
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., fetching data or initial page render)
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust duration as needed
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div>
      {loading ? (
        // Show loader while loading is true
        <ChessLoader />
      ) : (
        <>          
          <Main />
          <AboutSection />
          <BenefitsSection />
          <RegistrationSteps />
          <LearnChessSection />
          <ContactUs /></>

      )}
>>>>>>> 25ee8bd (0000)
    </div>
  );
}
