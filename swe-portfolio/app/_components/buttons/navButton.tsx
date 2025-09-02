import Link from "next/link";

interface NavButtonProps{
    name: string;
    href: string;
    extra_styles: string;
}

export default function NavButton(
    { props }: { props: NavButtonProps },
){

    return (
        <Link href={props.href} className={`default-nav-button ${props.extra_styles}`}>
            {props.name}
        </Link>
    )
}

