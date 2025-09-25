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
                    <ProjectContainer 
                        projectTitle="Community Minecraft Server"
                        projectType="Oracle Cloud Server Instance"
                        techStack="Oracle, Docker, Pterodactyl Panel, Nginx, MariaDB"
                        imageUrl="/assets/images/oracle-server.png"
                        projectId="Community Minecraft Server"
                        bullets={["Architected and deployed a Minecraft server on Oracle Cloud VM running Linux OS, supporting up to 20 friends and community members while managing server performance and resource optimization.",
                            "Developed containerized server deployment using Docker and Pterodactyl Panel, reducing setup and maintenance time by 60% and enabling streamlined management of multiple server instances.", 
                            "Implemented Cloudflare DNS and CDN services for custom domain management and DDoS protection, improving connection stability and reducing latency by 30% for players with low internet speeds."]}
                    />
                    <ProjectContainer 
                        projectTitle="Game Session Manager"
                        projectType="Microservice"
                        techStack="Python, FastAPI, PostgreSQL, Docker"
                        imageUrl="/assets/images/session-manager.png"
                        interactUrl="https://github.com/JDubbs89/session-management-microservice"
                        projectId="Game Session Manager"
                        bullets={["Designed a lightweight Python microservice with FastAPI for managing user friendships and game sessions, allowing for optimized real-time data interactions between game clients without a continuous connection.",
                            "Built scalable backend infrastructure by containerizing the FastAPI service with Docker as well as a PostgreSQL database, allowing for dynamic data storage and swift deployment.", 
                            "Implemented JWT-based authentication and authorization in conjunction with OAuth2 for simple and secure user login functionality, preventing unauthorized access to sensitive information."]}
                    />
                    <ProjectContainer 
                        projectTitle="Grace Church Website Revamp (Under Construction)"
                        projectType="Website"
                        techStack="Next.js, Typescript, TailwindCSS"
                        imageUrl="/assets/images/grace-website-revamp.png"
                        interactUrl="https://github.com/JDubbs89/Grace-Church-Website-Revamp"
                        projectId="Grace Church Website Revamp"
                        bullets={["Designing and building a modern responsive webpage as a redesign of the current Grace Church official website, improving readability and user experience, as well as better organizing church information.",
                            "Using Next.js, Typescript, and TailwindCSS to develop a robust and performant site framework utilizing best practices to ensure a strong and maintainable project structure.", 
                            "Working with members of Grace Church to ensure that the website aligns with user needs, collaborating with current website management team to ensure smooth project integration as well as compliance with church standards."]}
                    />
                </div>
            </div>
        </BaseSection>
  )
}
