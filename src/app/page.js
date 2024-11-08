"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from "@/components/main/main";
import AboutSection from "@/components/main/about";
import BenefitsSection from "@/components/main/benifits";
import RegistrationSteps from "@/components/main/registrationstep";
import LearnChessSection from "@/components/main/learnchess";
import ContactUs from "@/components/main/contact";
import React, { useState, useEffect } from 'react';
import ChessLoader from '@/components/loader';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false));
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className="bg-black">
   
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
      <AboutSection />
      <BenefitsSection />
      <RegistrationSteps />
      <LearnChessSection />
      <ContactUs />
      </ThemeProvider>
      <ChessLoader />
     
    
    </div>
  );
}
