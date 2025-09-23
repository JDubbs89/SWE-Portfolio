export default function Overlay(
  { children, className }: Readonly<{ children: React.ReactNode; className: string; }>
){
  return(
    <div className={`grid grid-cols-1 ${className}`}>
      {children}
    </div>
  )
}