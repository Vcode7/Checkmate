"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from "@/components/main/main";
import AboutSection from "@/components/main/about";
import BenefitsSection from "@/components/main/benifits";
import RegistrationSteps from "@/components/main/registrationstep";
import LearnChessSection from "@/components/main/learnchess";
import ContactUs from "@/components/main/contact";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
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
    </div>
  );
}
