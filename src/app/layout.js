// layout.js
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 25ee8bd (0000)
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import { UserDataProvider } from "@/components/Userdataprovider"; // Import UserDataProvider
=======
import { UserDataProvider } from "@/components/Userdataprovider";
>>>>>>> 25ee8bd (0000)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
<<<<<<< HEAD

export const metadata = {
  title: "Checkmate Chess Club",
  description: "Join the Checkmate Chess Club to improve your chess skills and meet other enthusiasts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <UserDataProvider>
          <Nav />
          {children}
          <Footer />
=======
const poppin = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppin",
  weight: "100 900",
});
export const metadata = {
  title: "Checkmate Chess Club",
  description:
    "Join the Checkmate Chess Club to improve your chess skills and meet other enthusiasts!",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`antialiased ${poppin.className}`} >
        <UserDataProvider>
            <Nav />
            {children}
            <Footer />
>>>>>>> 25ee8bd (0000)
        </UserDataProvider>
      </body>
    </html>
  );
}
