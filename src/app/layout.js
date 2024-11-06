import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

// Metadata for the club (this can be defined directly as server-only)
export const metadata = {
  title: "Checkmate Chess Club",
  description: "Join the Checkmate Chess Club to improve your chess skills and meet other enthusiasts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
      <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
