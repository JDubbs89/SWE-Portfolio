import Link from "next/link";

interface NavButtonProps{
    name: string;
    href: string;
}

export default function HomeNavButton(
    { props }: { props: NavButtonProps },
){

    return (
        <Link href={props.href} className="home-nav-button">
            {props.name}
        </Link>
    )
}