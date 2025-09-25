import { get_projects } from "@/app/_lib/functions/projects";
import BaseSection from "@/app/_components/sections/baseSection";
import ProjectContainer from "@components/containers/default/projectContainer";
import SlideUpElement from "@components/containers/default/slideUpElement";

export const metadata = {
  title: "Projects",
}

export default function Projects() {
  return (
    <BaseSection className="project-section base-section">
            <div className="content-wrapper mb-10 h-full">
                <SlideUpElement>
                <div className="flex justify-between w-full flex-wrap">
                    <div className="section-title-text">My Projects</div>
                </div>
                </SlideUpElement>
                <div className="timeline-container content-wrapper-px"> {/* col container for containers */}
                    {get_projects().map((project) => ( // Maps projects to project containers
                        <ProjectContainer
                            key={project.id}
                            projectTitle={project.id}
                            projectType={project.projectType}
                            techStack={project.techStack}
                            imageUrl={project.imageUrl}
                            interactUrl={project.interactUrl}
                            interactText={project.interactText}
                            projectId={project.id}
                            bullets={project.bullets}
                        />
                    ))}
                </div>
            </div>
        </BaseSection>
  )
}