import { Metadata } from "next";
// import ContentContainer from '../../_components/containers/default/contentContainer';
import BaseSection from "@components/sections/baseSection";
import BioSection from "@components/sections/bioSection";
import SkillSection from "@components/sections/skillSection";
import WrkExpSection from "@components/sections/workExpSection";
import ProjectExpSection from "@components/sections/projectExpSection";
// import ContactFormSection from "@components/sections/contactFormSection";

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <BioSection/>
      <WrkExpSection/>
      <SkillSection/>
      <ProjectExpSection/>
      {/* <ContactFormSection/> */}
      
    </div>
  )
}
