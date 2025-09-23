
type ContainerProps = {
    startDate?: string;
    endDate?: string;
    positionTitle?: string;
    companyName?: string;
    location?: string;
    bullets?: string[];
    last?: boolean;
}

export default function PositionContainer(
    { startDate = "May 2025", endDate = "Present", positionTitle = "Senior Thing Doer", companyName = "Company Inc", location = "Jackson, MI", 
        bullets = ["Spearheaded complicated project involving keywords, buzzwords, and skills for a 76% increase in productivity, usefulness, and things getting done, by increasing the number of things done per hour to over 6."], 
        last = false
    }: ContainerProps
){
    return (
        <div className="position-timeline-container">
            <div className="flex flex-col gap-0 w-5"> {/* Timeline Spans/Dates */}
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{endDate}</div>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-400"></span>
                <span className="rounded-full h-5 w-2 ml-3.25 bg-white"></span>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-400"></span>
                {(last ? <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{startDate}</div> : null)}
            </div>
            
            <div className={`position-card ${last ? "mb-10" : ""}`}>
                <div className="position-card-title">{positionTitle}</div>
                <div className="position-card-org-title">{companyName} • {location}</div>
                    <div className="position-card-bullet-list">
                        {bullets.map((bullet, index) => (
                            <div key={index} className="position-card-bullet">
                                • {bullet}
                            </div>
                        ))}
                    </div>
            </div>
        </div> 
    )
}