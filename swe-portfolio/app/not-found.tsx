"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return <div className="base-section content-wrapper">
        <h1 className="section-title">This is not the page you're looking 4(04)</h1>
        <p className="body-text">jonathanwarner.cs{pathname} was not found.</p>
        <button className="default-nav-button">
            Return to Home
        </button>
    </div>
}