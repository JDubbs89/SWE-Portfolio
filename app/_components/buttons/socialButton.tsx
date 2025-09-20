import Link from "next/link";
import Image from "next/image";

export default function SocialButton(
    {props}: {props: {name: string, href: string, extra_styles: string}}
){
    return (
        <Link href={props.href} className = {`default-nav-button flex ${props.extra_styles}`}>
            <Image src={`/assets/icons/${props.name.toLowerCase()}.svg`} alt={`${props.name} icon`} width={20} height={20} className={`${props.name.toLowerCase()}`}/>
            <p className="my-auto social-button-text">{props.name}</p>
        </Link>
    )
}