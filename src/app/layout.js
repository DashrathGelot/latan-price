"use client"
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { Suspense, useState } from "react";
import Footer from "./components/Footer";

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


export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased main`}>
        <header>
          <Navbar isSidebarOpen={menuOpen} toggleMenu={toggleMenu}/>
        </header>
        <main className="top-24 relative">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
