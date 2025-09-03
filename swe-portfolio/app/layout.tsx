import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/containers/headerFooter/siteHeader";
import SiteFooter from "./_components/containers/headerFooter/siteFooter";
import FadeContainer from "./_components/containers/default/fadeContainer";
import ScrollBar from "./_components/interact/scrollbar";

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
      
      <body  className="page-container overflow-x-hidden">
        <ScrollBar/>
        <SiteHeader/>
        <span className="h-36"></span>
        <div className="flex-1">
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(120,145,255,0.1),transparent_70%)]"></div>
          <FadeContainer children={children}/>
        </div>
        <SiteFooter/>
      
      </body>
    </html>
  );
}
