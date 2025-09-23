import BaseSection from "./baseSection";
import ProjectContainer from "@components/containers/default/projectContainer";
import Link from "next/link";
import Image from "next/image";

export default function ProjectExpSection(){
    return(
        <BaseSection className="project-section base-section">
            <div className="content-wrapper mb-10 h-full">
                <div className="flex justify-between w-full flex-wrap">
                    <div className="section-title-text">Featured Projects</div>
                    <Link href={"projects"} className="ghost-button my-auto text-[clamp(0.6rem,1rem,1rem)] whitespace-nowrap font-normal">
                        View More
                    </Link>
                </div>
                <div className="timeline-container content-wrapper-px"> {/* col container for containers */}
                    <ProjectContainer 
                        projectTitle="Community Minecraft Server"
                        projectType="Oracle Cloud Server Instance"
                        techStack="Jackson, MI"
                        bullets={["Crafted unique and entertaining projects in a small team of peers, using Python to structure game logic, graphics, and sound to create fully functional games including a 2D-platformer, snake game, and more.",
                            "Architected personal web projects using HTML, CSS, and JavaScript to create interactive and visually appealing sites, including a timer webapp, treasure hunt game, madlibs generator, and more.", 
                            "Developed a singleplayer, third-person game using Unreal Engine 4/5, implementing complex enemy AI, player movement and ability systems, and static level design to create a fun and satisfying horde-style melee fighting gameplay experience."]}
                    />
                    <ProjectContainer 
                        projectTitle="Game Session Manager"
                        projectType="Microservice"
                        techStack="Python, FastAPI, PostgreSQL, Docker"
                        bullets={["Crafted unique and entertaining projects in a small team of peers, using Python to structure game logic, graphics, and sound to create fully functional games including a 2D-platformer, snake game, and more.",
                            "Architected personal web projects using HTML, CSS, and JavaScript to create interactive and visually appealing sites, including a timer webapp, treasure hunt game, madlibs generator, and more.", 
                            "Developed a singleplayer, third-person game using Unreal Engine 4/5, implementing complex enemy AI, player movement and ability systems, and static level design to create a fun and satisfying horde-style melee fighting gameplay experience."]}
                    />
                    <ProjectContainer 
                        projectTitle="Grace Church Website Revamp"
                        projectType="Jackson Area Career Center"
                        techStack="Jackson, MI"
                        bullets={["Crafted unique and entertaining projects in a small team of peers, using Python to structure game logic, graphics, and sound to create fully functional games including a 2D-platformer, snake game, and more.",
                            "Architected personal web projects using HTML, CSS, and JavaScript to create interactive and visually appealing sites, including a timer webapp, treasure hunt game, madlibs generator, and more.", 
                            "Developed a singleplayer, third-person game using Unreal Engine 4/5, implementing complex enemy AI, player movement and ability systems, and static level design to create a fun and satisfying horde-style melee fighting gameplay experience."]}
                    />
                </div>
            </div>
        </BaseSection>
    )
}