import SlideUpElement from "@components/containers/default/slideUpElement";

type ContainerProps = {
    startDate?: string;
    endDate?: string;
    degree?: string;
    schoolName?: string;
    location?: string;
    bullets?: string[];
    last?: boolean;
}

export default function EduContainer(
    { startDate = "Aug 2024", endDate = "May 2028", degree = "Bachelor of Science in Computer Science", schoolName = "Trine University", location = "Indiana, USA", 
        bullets = ["Minor: Cybersecurity","GPA: 4.0/4.0 - 2x Trine President's List Awardee","Activities: Computer Science Society (CSS), Christian Campus House (CCH)"],
        last = false
    }: ContainerProps
){
    return (
        <SlideUpElement transformYM={{scroll:[1],value:[0]}} scaleM={{scroll:[1],value:[1]}} className="">
        <div className="flex flex-row my-0 py-0 h-full w-full">
            <SlideUpElement transformYM={{scroll:[1],value:[0]}} scaleM={{scroll:[1],value:[1]}} className="flex flex-col gap-0 w-5">
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{endDate}</div>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-400"></span>
                <span className="rounded-full h-5 w-2 ml-3.25 bg-white"></span>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-400"></span>
                {(last ? <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{startDate}</div> : null)}
            </SlideUpElement>
            
            <SlideUpElement transformYM={{scroll:[0.9,1],value:[0,100]}} scaleM={{scroll:[.9,1],value:[1,0.7]}} className={`position-card ${last ? "mb-10" : ""}`}>
                <div className="flex flex-wrap w-full space-between">
                    <div className="position-card-title">{degree}</div>
                    <div className="position-date-font">{startDate} - {endDate}</div>
                </div>
                {/* <div className="position-card-title">{degree}</div> */}
                <div className="position-card-org-title">{schoolName} • {location}</div>
                    <div className="position-card-bullet-list">
                        {bullets.map((bullet, index) => (
                            <div key={index} className="position-card-bullet">
                              {bullet}
                            </div>
                        ))}
                    </div>
            </SlideUpElement>
        </div> 
        </SlideUpElement>
    )
}