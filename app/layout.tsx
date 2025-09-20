import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google'
import SiteHeader from "./_components/containers/headerFooter/siteHeader";
import SiteFooter from "./_components/containers/headerFooter/siteFooter";
import FadeContainer from "./_components/containers/default/fadeContainer";
import ScrollBar from "./_components/interact/scrollbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400','500','600','700'] });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', display: 'swap', weight: ['600','700'] });

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
    
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      
      <body  className="page-container overflow-x-hidden">
        <ScrollBar/>
        <SiteHeader/>
        <span className="h-36"></span>
        <div className="flex-1">
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(120,145,255,0.1),transparent_70%)]"></div>
          <FadeContainer>
            {children}
          </FadeContainer>
        </div>
        <SiteFooter/>
      
      </body>
    </html>
  );
}
