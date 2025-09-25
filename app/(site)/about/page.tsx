import SlideUpElement from "@components/containers/default/slideUpElement";
import ContactFormSection from "@components/sections/contactFormSection";
import BaseSection from "@components/sections/baseSection";
import SummarySection from "@components/sections/summarySection";
import MediaCarousel from "@components/containers/carousel/mediaCarousel/mediaCarousel";
import EduContainer from "@components/containers/default/eduContainer";
import PositionContainer from "@/app/_components/containers/default/positionContainer";
import HobbyBadge from "@components/containers/default/hobbyBadge";
import Image from "next/image";

export const metadata = {
  title: "About",
}

export default function About() {
  return (
    <BaseSection className="work-section gap-5 backdrop-blur">
    <SlideUpElement className="content-wrapper about-container" opacityM={{ scroll:[1],value:[1] }} transformYM={{ scroll:[1],value:[0] }}>
      <SummarySection className="timeline-container content-wrapper-px w-full mb-10">
        <div className="summary-section-para my-4">
          I'm a CS student specializing in software development with hands-on experience building production-level microservices and cloud server deployments.
          Pursuing a minor in Cybersecurity, I pay close attention to application security and am an advocate of thorough testing practices.
        </div>
        <div className="summary-section-para my-4">
          Currently, I am working on building out my portfolio with projects like my Grace Church Website Revamp,
           where I am working with staff and technical administrators to create a fresh new website for my local church. Additionally, I'm expanding my programming 
           knowledge base by studying C++ and Go, as well as programming patterns and design architecture to enhance my software development process.
        </div>
        <div className="summary-section-para my-4">
          I am excited to apply my security-first approach to software development and systems architecture so that I can make meaningful contributions to a development team while continuing to grow
          as a software developer.
        </div>  
      </SummarySection>
        
      <SummarySection title="Education" className="timeline-container content-wrapper-px w-full mb-10">
        <EduContainer/>
        <EduContainer
          degree="CIT Student"
          schoolName="Jackson Area Career Center"
          location="Jackson, MI"
          endDate="May 2024"
          bullets={["GPA: 4.0/4.0","Activities: US Airforce Cyber-Patriots Competition, job shadowing","Skills Learned: Various programming languages, game/project development, teamwork & collaboration, programming design logic"]}
        />
      </SummarySection>
      
      <SummarySection title="Hobbies" className="content-wrapper-px w-full mb-10">
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <HobbyBadge name="Live Audio" src="mixing.svg"/>
          <HobbyBadge name="Video Games" src="gaming.svg"/>
          <HobbyBadge name="Exercise" src="running.svg"/>
          <HobbyBadge name="Woodworking" src="woodworking.svg"/>
          <HobbyBadge name="Music" src="music.svg"/>
          <HobbyBadge name="Reading" src="reading.svg"/>
          <HobbyBadge name="Homelabbing" src="homelabbing.svg"/>
          <HobbyBadge name="Programming" src="coding.svg"/>
          <HobbyBadge name="Cinema" src="cinema.svg"/>
        </div>
      </SummarySection>
      
      <SummarySection className="timeline-container content-wrapper-px w-full mb-10" title="Volunteering">
          <PositionContainer 
            positionTitle="Lead Audio Engineer"
            startDate="Sept 2018"
            endDate="Present"
            companyName="Grace Church"
            location="Jackson, MI"
            last={true}
            bullets={["Engineered audio routing solutions involving teams of more than twenty members to put on safe, wellbalanced, and great sounding worship performances for 250-500+ attendees.",
              "Designed and created a small yet effective audio setup for youth and young adult gatherings, more than doubling audience participation during worship events."]}
            />
        </SummarySection>


      

      <SummarySection title="My Certifications" className="timeline-container content-wrapper-px flex justify-center mb-10">
        <MediaCarousel mediaItems={[{src:"/assets/images/HTMLCSSCert.png"},{src:"/assets/images/JSCert.png"},{src:"/assets/images/PyCert.png"}]} ></MediaCarousel>
      </SummarySection>

      <ContactFormSection/>

    </SlideUpElement>
    </BaseSection>
    
  )
}
