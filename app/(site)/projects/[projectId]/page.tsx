import { get_project, get_tagname } from "@/app/_lib/functions/projects";
import BackButton from "@components/buttons/backButton";
import Link from "next/link";
import SummarySection from "@components/sections/summarySection";
import Image from "next/image";
export const runtime = 'edge';

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const project = get_project((await params).projectId.replaceAll("%20", " "));
  return (
    <div className="project-section">
      <div className="project-buttons-container">
        <BackButton className={`ghost-button project-back-button`}/>
        {project.interactUrl != "" ? <Link href={project.interactUrl} className="ghost-button project-view-button">{project.interactText}</Link> : null}
      </div>
      <SummarySection className='content-wrapper-px w-full mb-10' title={project.id}>
        <Image src={project.imageUrl} alt={`${project.id} Image`} height={900} width={1600} className="project-image my-5"/>
        <div className="mb-2 flex">{
            project.flags.map((flag,index) => (
            (get_tagname(flag) != "" ? <div key={index} className={`entry-text rounded-full text-white bg-yellow-300/20 border-0 px-2 max-w-fit`}>
              {get_tagname(flag)}
            </div> : null)))
          }</div>
        <div className="entry-container">
          <div className="text-[2rem] font-semibold">Overview</div>
          <div className="entry-text">{project.desc}</div>
        </div>
        <div className="entry-container mt-5">
          <div className="text-[2rem] font-semibold">Features</div>
          {
            project.features.map((feature,index) => (
            <div key={index} className={`entry-text ${index%2 == 0 ? "" : ""}`}>
              • {feature}
            </div>))
          }
        </div>
        <div className="entry-container mt-5">
          <div className="text-[2rem] font-semibold">Tech Stack</div>
          {
            project.techStack.split(", ").map((tech,index) => (
            <div key={index} className={`entry-text ${index%2 == 0 ? "" : ""}`}>
              • {tech}
            </div>))
          }
        </div>
      </SummarySection>
    </div>
  )
}