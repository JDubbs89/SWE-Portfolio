import BaseSection from "./baseSection";
import PositionContainer from "@components/containers/default/positionContainer";
import SlideUpElement from "@components/containers/default/slideUpElement";
import Link from "next/link";
//import Image from "next/image";

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
                        positionTitle="Information Technology Intern, Ignition Developer Intern"
                        startDate="Jun 2026"
                        endDate="Aug 2026"
                        companyName="Dexter Axle"
                        location="On-Site, Albion, Indiana, USA"
                        bullets={["Architected a plant-wide asset map application in Ignition Designer to assist in the location, tracking, and organization of 300+ multi-department assets across 7 buildings on site.",
                            "Scaffolded a normalized database in Microsoft SQL Server, writing stored procedures and application interactions to streamline data interactions with the asset map application.",
                            "Worked with networking engineers and external contractors to handle the registration and deployment of 30+ new wireless access points (WAPs), boosting security and efficiency compliance by 40%.",
                            "Assisted office staff with technology-related issues, handling hundreds of tickets across all buildings and departments on campus."]}
                    />
                    <PositionContainer 
                        positionTitle="Web Developer"
                        startDate="Jan 2026"
                        endDate="Jun 2026"
                        companyName="Grace Church"
                        location="Hybrid, Michigan, USA"
                        bullets={["Designed, built, and shipped a responsive website built with WordPress, Advanced Custom Fields, Bricks Builder, and code components comprised of HTML, JavaScript, CSS, and PHP.",
                            "Managed 301 redirects and SEO optimization for clean transition from the previous website, programmatically migrated site content, and cleanly transitioned site domain from the old DNS provider to Cloudflare DNS.",
                            "Worked with external service providers including Subsplash to dynamically host, synchronize, and distribute content across web and mobile applications via API/embedded content.",
                            "Optimized site performance using CDN caching, image compression optimization, and JavaScript load minimization."]}
                    />
                    <PositionContainer 
                        positionTitle="Information Technology Intern"
                        startDate="May 2025"
                        endDate="Aug 2025"
                        companyName="Martinrea Industries"
                        location="On-Site, Michigan, USA"
                        bullets={["Collaborated with IT analysts on domain migration of 120+ machine operator kiosks while developing and maintaining detailed documentation, reducing network overhead by uniting systems under one corporate policy.",
                            "Created a robust and easy-to-use PA system for meetings, increasing audibility for listeners farthest from the speaker by more than 30% and resulting in improved team cohesion and communication.",
                            "Monitored and resolved various operator issues and system malfunctions, reducing machine downtime and increasing productivity through quick response times and troubleshooting endeavors."]}
                        last={true}
                    />
                </div>
            </div>
        </BaseSection>
    )
}