"use client"
import { usePathname } from "next/navigation";

export default function FadeContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const pathname = usePathname();
  return(
    <div key={pathname} className="animate-fadeIn">
      {children}
    </div>
  )
}