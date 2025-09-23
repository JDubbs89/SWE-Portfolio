
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
        <div className="flex flex-row my-0 py-0 h-full w-fit">
            <div className="flex flex-col gap-0">
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{endDate}</div>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-400"></span>
                <span className="rounded-full h-5 w-2 ml-3.25 bg-white"></span>
                <span className="relative h-full w-0.5 mx-4 my-0 py-0 bg-blue-300"></span>
                {(last ? <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2 my-2 whitespace-nowrap">{startDate}</div> : null)}
            </div>
            
            <div className="w-full ml-2 mt-6 mb-4 p-4 bg-gradient-to-br from-[rgba(15,15,20,0.4)] via-[rgba(10,10,10,0.8)] to-[rgba(5,41,158,0.05)] border border-[rgba(83,134,228,0.2)] rounded-[clamp(0.75rem,2vw,1rem)]">
                <div className="text-[clamp(1.25rem,1.5rem,1.5rem)] font-semibold mb-2">{positionTitle}</div>
                <div className=" ml-2 mt-2 mb-1 text-[clamp(0.70rem,0.9rem,0.9rem)] font-medium text-blue-400">{companyName} - {location}</div>
                    <div className="flex flex-col ml-4 mt-3 gap-1 text-[clamp(0.70rem,0.9rem,0.9rem)]/5 font-light text-gray-400">
                        {bullets.map((bullet, index) => (
                            <div key={index} className="mb-1">
                                • {bullet}
                            </div>
                        ))}
                    </div>
            </div>
        </div> 
    )
}