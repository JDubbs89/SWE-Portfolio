import BaseSection from "./baseSection";
import Image from "next/image";

export default function BioSection (){
  return (
    <BaseSection className="bio-section">
      <div className="content-wrapper-px bio-wrapper">
        <div className="content-wrapper-px flex flex-col gap-2">
          <div className="bio-header">
            Hello World!
          </div>
          <div className="bio-caption">
            I{"'"}m Jonathan, a computer science student and fullstack software developer.
          </div>
          <span className="hero-spacer"></span>
        </div>
        <Image src="/assets/srphoto2.jpg" alt="Headshot" width={1599} height={1142} className="hero-image"/>
      </div>
    </BaseSection>
  )
}