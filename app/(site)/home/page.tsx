import { Metadata } from "next";
import ContentContainer from '../../_components/containers/default/contentContainer';
import BaseSection from "@components/sections/baseSection";
import BioSection from "@components/sections/bioSection";
import SkillSection from "@components/sections/skillSection";
import WrkExpSection from "@components/sections/workExpSection";

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div>
      <BioSection/>
      <SkillSection/>
      <WrkExpSection/>
      
    </div>
  )
}
