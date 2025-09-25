"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

interface NavButtonProps{
    name: string;
    href: string;
    extra_styles: string;
}

export default function NavButton(
    { props }: { props: NavButtonProps },
){
    const pathname = usePathname();
    const isActive = (pathname === props.href);
    return (
        <Link href={props.href} className={`default-nav-button td ${isActive ? "default-nav-button-active" : ""} ${props.extra_styles}`}>
            {props.name}
        </Link>
    )
}

