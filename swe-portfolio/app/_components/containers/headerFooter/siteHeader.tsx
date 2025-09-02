"use client"
import NavButton from "../../buttons/navButton";
import ProfileContainer from "../../containers/default/profileContainer";
import SideNavContainer from "../default/sideNavContainer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function SiteHeader(){
    const navLinks = [
        {name: "Home", href: "/home"},
        {name: "About", href: "/about"},
        {name: "Projects", href: "/projects"},
        {name: "Blog", href: "/blog"},
        {name: "Contact", href: "/contact"}
    ]
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);
    useEffect(() => setMounted(true), []);
    // Detect mobile width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Collapse on scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 45 && collapsed) {
                setCollapsed(false); // only expand when truly at the top
            } else if (!collapsed && window.scrollY > 120) {
                setCollapsed(true); // collapse once scrolling starts
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [collapsed]);

    const name = "Jonathan Warner";
    const jobTitle = "Software Engineer";
    const description = "Passionate about building multiplayer games and scalable apps";

    return (
            <header className="nav-bar">
                <div className="nav-container dt">
                    <ProfileContainer collapsed={collapsed} isMobile={isMobile} name={name} jobTitle={jobTitle} description={description}/>
                    
                    {/*Fade out on mobile/thin display width */}
                    <nav className={`nav-button-container absolute md:relative top-0 right-0 flex dt gap-1
                        ${isMobile ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                        {navLinks.map((link) => (
                            <NavButton key={link.name} props={{ name: link.name, href: link.href, extra_styles: "" }} />
                        ))}
                    </nav>
                    
                    <div onMouseOver={() => setMobileMenuOpen(!mobileMenuOpen)} 
                    className={`absolute h-screen w-screen top-0 left-0 transition-all duration-300 bg-black 
                        ${mounted && mobileMenuOpen ? "opacity-30" : "opacity-0 pointer-events-none"}`}>
                    </div>
                    <SideNavContainer collapsed={!mobileMenuOpen} onMouseLeave={() => setMobileMenuOpen(!mobileMenuOpen)}/>

                    {/*Fade in on mobile/thin display width */}
                    <button 
                    className={`hamburger-button ${isMobile ? "flex opacity-100" : "absolute opacity-0 w-0"}`} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </button>
                
                </div>
            </header>
    )
}