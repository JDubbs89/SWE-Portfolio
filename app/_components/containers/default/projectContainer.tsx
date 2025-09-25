import Image from "next/image";
import Overlay from "@components/containers/default/overlayContainer";
import SlideUpElement from "@components/containers/default/slideUpElement";
import Link from "next/link";

type ContainerProps = {
    creationDate?: string;
    projectTitle?: string;
    projectType?: string;
    techStack?: string;
    bullets?: string[];
    imageUrl?: string;
    interactUrl?: string;
    interactText?: string;
    projectId?: string;
    last?: boolean;
    reverse?: boolean;
}

export default function ProjectContainer(
    { creationDate = "May 2025", projectTitle = "Senior Thing Doer", projectType = "Company Inc", techStack = "Jackson, MI", 
        bullets = ["Spearheaded complicated project involving keywords, buzzwords, and skills for a 76% increase in productivity, usefulness, and things getting done, by increasing the number of things done per hour to over 6."], 
        imageUrl = "/assets/images/homepage.png", interactUrl = "", interactText= "View on Github", projectId = "", last = false, reverse = false
    }: ContainerProps
){
    return (
        <SlideUpElement>
        <div className={`project-timeline-container animate-slideup`}>
            <div className="project-card">
              <Overlay className="overlay">
                <Image src={imageUrl} alt={`${projectTitle} thumbnail`} width={1600} height={900} className={`project-card-image ${last ? "mb-10" : ""}`}/>
                <div className="project-link-container">
                  {interactUrl != "" ? <Link href={interactUrl} className="primary-button cursor-pointer whitespace-nowrap project-link">{interactText}</Link> : null}
                  {projectId != "" ? <Link href={`projects/${projectId}`} className="primary-button cursor-pointer whitespace-nowrap project-link">Learn More</Link> : null}
                </div>
              </Overlay>
            <div className="m-4">
                <div className="project-card-title">{projectTitle}</div>
                <div className="project-card-org-title">{projectType} - {techStack}</div>
                    <div className="project-card-bullet-list">
                        {bullets.map((bullet, index) => (
                            <div key={index} className="project-card-bullet">
                                • {bullet}
                            </div>
                        ))}
                    </div>
            </div>
            </div>
        </div> 
        </SlideUpElement>
    )
}