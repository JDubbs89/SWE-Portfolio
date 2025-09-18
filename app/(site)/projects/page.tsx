import BaseSection from "@/app/_components/sections/baseSection";
import ContentContainer from "@/app/_components/containers/default/contentContainer";

export const metadata = {
  title: "Projects",
}

export default function Projects() {
  return (
    <BaseSection className='py-24'>
          <ContentContainer title="Projects" header="" content={`My projects`}/>
    </BaseSection>
  )
}
