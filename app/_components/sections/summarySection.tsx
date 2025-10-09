import SlideUpElement from "@components/containers/default/slideUpElement";
//import BaseSection from "@components/sections/baseSection";


export default function SummarySection(
  { children, title = "Who am I?", className = "", childClass = "" }: Readonly<{ children: React.ReactNode; title?: string; className?: string; childClass?: string; }>
){
  
  return(
    <div className={`summary-section ${className}`}>
      <SlideUpElement opacityM={{ scroll:[0, 0.75, 1],value:[1, 1, 0] }} transformYM={{ scroll:[0, 0.75, 1],value:[0, 0, 100] }} className="">
        <div className="section-title-text">{title}</div>
      </SlideUpElement>
      <div className={childClass}>
        {children}
      </div>
    </div>
  )
}