import Image from "next/image";

type ContainerProps = {
    creationDate?: string;
    projectTitle?: string;
    projectType?: string;
    techStack?: string;
    bullets?: string[];
    imageUrl?: string;
    last?: boolean;
    reverse?: boolean;
}

export default function ProjectContainer(
    { creationDate = "May 2025", projectTitle = "Senior Thing Doer", projectType = "Company Inc", techStack = "Jackson, MI", 
        bullets = ["Spearheaded complicated project involving keywords, buzzwords, and skills for a 76% increase in productivity, usefulness, and things getting done, by increasing the number of things done per hour to over 6."], 
        imageUrl = "/assets/images/homepage.png", last = false, reverse = false
    }: ContainerProps
){
    return (
        <div className={`project-timeline-container`}>
            <div className="project-card">
            <Image src={imageUrl} alt={`${projectTitle} thumbnail`} width={1600} height={900} className={`project-card-image ${last ? "mb-10" : ""}`}/>
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
    )
}