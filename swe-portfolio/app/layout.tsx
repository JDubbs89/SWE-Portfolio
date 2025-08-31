import Link from "next/link";
import NavButton from "./_components/buttons/navButton";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeNavButton from "./_components/buttons/homeNavButton";

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
  const navLinks = [
    {name: "Home", href: "/home"},
    {name: "About", href: "/about"},
    {name: "Projects", href: "/projects"},
    {name: "Blog", href: "/blog"},
    {name: "Contact", href: "/contact"}
  ]
  return (
    
    <html lang="en">
      
      <body  className="page-container">
        
        <header className="nav-bar">
          <div className="nav-container">
          <HomeNavButton props={{name: "Jonathan Warner", href: "/home"}}/>
          <nav className="flex content-between ml-auto">
            {navLinks.map((link) => {
              return (
                <NavButton key={link.name} props={{name: link.name, href: link.href}}/>
                /*<Link href={link.href} key={link.name} className="default-nav-button">
                  {link.name}
                </Link>*/
              );
            })}
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
