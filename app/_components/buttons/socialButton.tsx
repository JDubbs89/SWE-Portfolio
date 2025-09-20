import Link from "next/link";
import Image from "next/image";

export default function SocialButton(
    {props}: {props: {name: string, href: string, extra_styles: string}}
){
    return (
        <Link href={props.href} className = {`default-nav-button flex ${props.extra_styles}`}>
            
            <img src={`/assets/icons/${props.name.toLowerCase()}.svg`} width={20} height={20} className={`${props.name.toLowerCase()}`}/>
            {/* <Image src={`/assets/icons/${props.name.toLowerCase()}.svg`} alt={`${props.name} icon`} width={24} height={24} className="inline mr-1 object-contain filter"/> */}
            <p className="my-auto social-button-text">{props.name}</p>
        </Link>
    )
}