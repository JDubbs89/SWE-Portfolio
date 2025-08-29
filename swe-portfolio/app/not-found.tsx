"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return <div className="container py-24">
        <h1 className="text-3xl font-bold">404 - This is not the page you're looking for</h1>
        <p>jonathanwarner.cs{pathname} was not found.</p>
    </div>
}