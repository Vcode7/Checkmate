// layout.js
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { UserDataProvider } from "@/components/Userdataprovider";

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
        </UserDataProvider>
      </body>
    </html>
  );
}
