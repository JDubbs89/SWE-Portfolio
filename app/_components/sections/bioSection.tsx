import BaseSection from "./baseSection";
import Image from "next/image";

export default function BioSection (){
  return (
    <BaseSection className="flex justify-center my-5">
      <div className="content-wrapper-px bio-wrapper">
        <div className="content-wrapper-px flex flex-col gap-2">
          <div className="bio-header">
            Hello World!
          </div>
          <div className="bio-caption">
            I'm Jonathan, a computer science student and aspiring software developer.
          </div>
          <span className="hero-spacer"></span>
        </div>
        <Image src="/assets/Headshot.jpg" alt="Headshot" width={300} height={300} className="hero-image"/>
      </div>
    </BaseSection>
  )
}