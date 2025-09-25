import { get_project, has_any_flags } from "@/app/_lib/functions/projects";
import BackButton from "@components/buttons/backButton";
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
    <div className="mt-10 flex flex-col gap-5">
      <BackButton className="ghost-button ml-[20%] mr-auto w-fit text-[2vh]"/>
      <Image src={project.imageUrl} alt={`${project.id} Image`} height={900} width={1600} className="mx-auto h-[50vh] w-[50vw] rounded-2xl"/>
      <SummarySection className='timeline-container content-wrapper-px w-full mb-10' title={project.id}>
        
        <div className="summary-section-para my-4">
          {project.desc}
        </div>
      </SummarySection>
    </div>
  )
}