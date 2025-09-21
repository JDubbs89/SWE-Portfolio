import { Metadata } from "next";
import ContentContainer from '../../_components/containers/default/contentContainer';
import BaseSection from "@components/sections/baseSection";
import BioSection from "@components/sections/bioSection";
import SkillSection from "@components/sections/skillSection";

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div>
      <BioSection/>
      <SkillSection/>
      <BaseSection className="flex flex-row">

        <ContentContainer title="Home" header="Background" content="Hello, my name is Jonathan! I am a computer science student at Trine University in Angola Indiana.
          I am an aspiring software developer, experienced in Python, JavaScript, SQL, and more."
          />

      </BaseSection>
      <BaseSection className="flex flex-row">

        <ContentContainer title="" header="Skills" content="Languages: Python, JavaScript, SQL, HTML, CSS Frameworks/Libraries: Next.js, FastAPI, Tailwind CSS 
        Databases: PostgreSQL, MariaDB Developer Tools/Platforms: Git, Gitlab, Docker, Linux/Unix, Oracle Cloud, RESTful APIs, Agile Methodologies "
        />

      </BaseSection>
      <BaseSection className="flex flex-row">

        <ContentContainer title="" header="Project Experience" content="Oracle Cloud VM: Community Minecraft Server • Architected and deployed a Minecraft server on 
          Oracle Cloud VM running Linux OS, supporting up to 20 friends and community members while managing server performance and resource optimization. 
          • Developed containerized server deployment using Docker and Pterodactyl Panel, reducing setup and maintenance time by 60% and enabling streamlined management 
          of multiple server instances. • Implemented Cloudflare DNS and CDN services for custom domain management and DDoS protection, improving connection stability 
          and reducing latency by 30% for players with low internet speeds. REST API Microservice: Game Session Server . Designed a lightweight Python microservice with 
          FastAPI for managing user friendships and game sessions, allowing for optimized real-time data interactions between game clients without a continuous connection. 
          • Built scalable backend infrastructure by containerizing the FastAPI service with Docker as well as a PostgreSQL database, allowing for dynamic data storage and 
          swift deployment. • Implemented JWT-based authentication and authorization in conjunction with OAuth2 for simple and secure user login functionality, preventing 
          unauthorized access to sensitive information. "
        />

      </BaseSection>
    </div>
  )
}
