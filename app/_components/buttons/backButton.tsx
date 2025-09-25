"use client"
import Link from "next/link";
import { useSearchParams } from 'next/navigation'

type BackButtonProps = {
  text?: string;
  className?: string;
}

export default function BackButton(
  { text = "Back", className = "ghost-button" }: BackButtonProps
){
  const searchParams = useSearchParams()
  const fromUrl = searchParams.get('from') || '/'
  return(
    <Link href={fromUrl} className={className}>
      {text}
    </Link>
  )
}