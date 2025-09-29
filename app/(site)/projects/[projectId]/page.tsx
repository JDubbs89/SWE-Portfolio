import { get_project, has_any_flags } from "@/app/_lib/functions/projects";
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
      <Image src={project.imageUrl} alt={`${project.id} Image`} height={900} width={1600} className="project-image"/>
      <SummarySection className='timeline-container content-wrapper-px w-full mb-10' title={project.id}>
        <div className="summary-section-para my-4">
          {project.desc}
        </div>
      </SummarySection>
    </div>
  )
}