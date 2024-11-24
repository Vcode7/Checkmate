"use client";

import React, { useState, useEffect } from "react";
import ChessLoader from "@/components/loader";// Import the ChessLoader component
import Main from "@/components/main/main";
import AboutSection from "@/components/main/about";
import BenefitsSection from "@/components/main/benifits";
import RegistrationSteps from "@/components/main/registrationstep";
import LearnChessSection from "@/components/main/learnchess";
import ContactUs from "@/components/main/contact";


export default function Home() {
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
    </div>
  );
}
