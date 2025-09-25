"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  interactUrl: string;
  interactText: string;
  className?: string;
  embedBackData?: boolean;
}

export default function ProjectButton(
  { interactUrl, interactText, className = "primary-button cursor-pointer whitespace-nowrap project-link", embedBackData = false }: props
){
  const pathName = usePathname();
  const url:string = (interactUrl + (embedBackData ? `?from=${encodeURIComponent(pathName)}`: ""))
  return(
    <Link href={url} className={className}>{interactText}</Link>
  )
}