import ContentContainer from "@/app/_components/containers/default/contentContainer";
import BaseSection from "@/app/_components/sections/baseSection";
export const runtime = 'edge';

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  return (
    <BaseSection className='py-24'>
      <ContentContainer title={`${projectId}`} header="Description" content={`My ${projectId} project.`}/>
    </BaseSection>
  )
}