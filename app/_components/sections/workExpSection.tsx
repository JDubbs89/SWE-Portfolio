import BaseSection from "./baseSection";
import PositionContainer from "@components/containers/default/positionContainer";
import SlideUpElement from "@components/containers/default/slideUpElement";
import Link from "next/link";
import Image from "next/image";

export default function WrkExpSection(){
    return(
        <BaseSection className="work-section base-section">
            
            <div className="content-wrapper h-fit">
                <SlideUpElement>
                <div className="flex justify-between w-full flex-wrap">
                    <div className="section-title-text">My Journey</div>
                    <Link href={"about"} className="ghost-button my-auto text-[clamp(0.6rem,1rem,1rem)] whitespace-nowrap font-normal">
                        Learn More
                    </Link>
                </div>
                </SlideUpElement>
                <div className="timeline-container"> {/* col container for containers */}
                    <PositionContainer 
                        positionTitle="Information Technology Intern"
                    startDate="May 2025"
                    endDate="Aug 2025"
                    companyName="Martinrea Industries"
                    location="Michigan, USA"
                    bullets={["Spearheaded domain migration of 120+ machine operator kiosks while developing and maintaining detailed documentation, massively reducing network overhead by uniting systems under one corporate policy.",
                        "Created a robust and easy-to-use PA system for meetings, increasing audibility for listeners farthest from the speaker by more than 30% and resulting in improved team cohesion and communication.", 
                            "Monitored and resolved various operator issues and system malfunctions, reducing machine downtime and increasing productivity through quick response times and troubleshooting endeavors."]}
                    />
                    <PositionContainer 
                        positionTitle="Crew Leader"
                    startDate="Aug 2024"
                    endDate="May 2025"
                    companyName="Johnny's Markets"
                    location="Indiana, USA"
                    bullets={["Interviewed and trained five employees while collaborating with a team of 14, increasing morale and reducing work related stress on team members by more than 25% by improving workload distribution.",
                        "Managed routine store operations in place of management, allowing for an increase in productivity and a 15% reduction in labor costs due to reduced managerial work hours.", 
                            "Collaborated with team members to perform quarterly deep cleaning runs of the worksite, resulting in multiple 98%+ scores on white-glove inspections."]}
                    />
                    <PositionContainer 
                        positionTitle="CIT Student"
                    startDate="Aug 2022"
                    endDate="May 2024"
                    companyName="JACC"
                    location="Michigan, USA"
                    bullets={["Crafted unique and entertaining projects in a small team of peers, using Python to structure game logic, graphics, and sound to create fully functional games including a 2D-platformer, snake game, and more.",
                        "Architected personal web projects using HTML, CSS, and JavaScript to create interactive and visually appealing sites, including a timer webapp, treasure hunt game, madlibs generator, and more.", 
                        "Developed a singleplayer, third-person game using Unreal Engine 4/5, implementing complex enemy AI, player movement and ability systems, and static level design to create a fun and satisfying horde-style melee fighting gameplay experience."]}
                        last={false}
                    />
                </div>
            </div>
        </BaseSection>
    )
}