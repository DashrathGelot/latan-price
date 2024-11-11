"use client"
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { Suspense, useState } from "react";
import { Satisfy, Source_Serif_4, Tangerine } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const tangerine = Tangerine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tangerine',
  weight: ['400','700']
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sans = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-serif-4',
  weight: ['200','300', '400', '500', '600']
});

const satisfy = Satisfy({
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-satisfy',
  weight: ['400']
})

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body 
        className={
          `${geistSans.variable} 
          ${geistMono.variable} 
          ${tangerine.variable} 
          ${sans.variable} 
          ${satisfy.variable} 
          antialiased background background-filter`
        }>
        <main className="main">
          <header>
            <Navbar isSidebarOpen={menuOpen} toggleMenu={toggleMenu}/>
          </header>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
