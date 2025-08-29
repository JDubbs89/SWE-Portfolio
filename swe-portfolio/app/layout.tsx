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
  title: "Jonathan Warner- Software Engineering Portfolio",
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-6xl antialiased font-sans bg-[#0a0a0a] text-[#f9f5ff]`}>
        
        <header className="py-2 px-4 my-4 flex content-end rounded-3xl bg-[#0a0a0a]">
          <button className="home-nav-button">
            Jonathan Warner
          </button>
          <nav className="flex content-between ml-auto">
            <button className="default-nav-button">
              About
            </button>
            <button className="default-nav-button">
              Projects
            </button>
            <button className="default-nav-button">
              Contact
            </button>
          </nav>
        </header>

          {children}
        
        <footer className="py-4 mt-8 border-t border-[#05299e75] text-sm text-[#f9f5ff]">
          <p className="default-footer-text">
            Footer
          </p>
          
        </footer>
      
      </body>
    </html>
  );
}
