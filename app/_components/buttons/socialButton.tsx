import Link from "next/link";
import Image from "next/image";

export default function SocialButton(
    {props}: {props: {name: string, href: string, extra_styles: string}}
){
    const url = `/assets/icons/${props.name.toLowerCase()}.svg`;
    console.log(url);
    return (
        <Link href={props.href} className = {`default-nav-button flex ${props.extra_styles}`}>
            <img className={`${props.name.toLowerCase()}`} style={{
                    backgroundColor: 'currentColor',                  // color of the icon
                    maskImage: `url(${url})`,
                    WebkitMaskImage: `url(${url})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    display: 'inline-block',
                    width: 20,
                    height: 20
                } as React.CSSProperties} />
            <p className="my-auto social-button-text">{props.name}</p>
        </Link>
    )
}