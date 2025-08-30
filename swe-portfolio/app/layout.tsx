import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jonathan Warner - Software Engineering Portfolio",
    template: "%s | Jonathan Warner, Software Engineering Portfolio",
    absolute: "",
  },
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body  className="page-container">
        
        <header className="nav-bar">
          <div className="nav-container">
          <button className="home-nav-button">
            Jonathan Warner
          </button>
          <nav className="flex content-between ml-auto">
            <button className="default-nav-button">
              Home
            </button>
            <button className="default-nav-button">
              About
            </button>
            <button className="default-nav-button">
              Projects
            </button>
            <button className="default-nav-button">
              Blog
            </button>
            <button className="default-nav-button">
              Contact
            </button>
          </nav>
          </div>
        </header>

          {children}
        
        <footer className="footer-container">
          <div className="footer-content">
          <p className="default-footer-text">
            @2025 Jonathan Warner, Software Engineer. All rights reserved.
          </p>
          </div>
        </footer>
      
      </body>
    </html>
  );
}
