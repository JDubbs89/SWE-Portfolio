"use client";
import NavButton from "./_components/buttons/navButton";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
    <div>
        <div className="base-section content-wrapper mt-12">
            <h1 className="section-title">This is not the page you're looking 4(04)</h1>
            <p className="body-text">jonathanwarner.cs{pathname} was not found.</p>
            <NavButton props={{name: "Return Home", href: "/home", extra_styles: ""}}/>
        </div>
    </div>)
}