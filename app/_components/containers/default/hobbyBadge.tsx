import Image from "next/image";
import SlideUpElement from "./slideUpElement";
//import { img } from "framer-motion/client";

type BadgeProps = {
  name: string;
  src: string;
  alt?: string;
  imgSize?: number;
}

export default function HobbyBadge(
  { name, src, alt = name, imgSize = 20}:BadgeProps
){
  return (
    <SlideUpElement transformYM={{scroll:[0,1], value:[0,0]}} scaleM={{scroll:[0.9,1], value:[1,0.5]}} opacityM={{scroll:[0.9,1], value:[1,0.5]}} className="hobby-card">
      <Image src={`/assets/icons/${src}`} alt={alt} width={imgSize} height={imgSize} className="my-auto mr-1 ml-auto w-[2.5rem] h-[2.5rem]"/>
      <div className="my-auto mr-auto ml-1">{name}</div>
    </SlideUpElement>
  )
}