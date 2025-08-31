import Link from "next/link";

interface NavButtonProps{
    name: string;
    href: string;
}

export default function NavButton(
    { props }: { props: NavButtonProps },
){

    return (
        <Link href={props.href} className="default-nav-button">
            {props.name}
        </Link>
    )
}

