
export default function PositionContainer(){
    return (
        <div className="flex flex-row my-0 py-0 h-full w-fit"> {/* container col */}
            <div className="flex flex-col gap-0">
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 mx-auto whitespace-nowrap">May 2024</div>
                <span className="relative h-20 w-0.25 mx-4 my-0 py-0 bg-blue-400"></span> {/* timeline span */}
                <span className="rounded-full h-2 w-2 ml-3.25 bg-white"></span>
                <span className="relative h-20 w-0.25 mx-4 my-0 py-0 bg-blue-400"></span> {/* timeline span */}
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 mx-auto whitespace-nowrap">May 2025</div>
            </div>
            
            <div className="w-full my-auto p-4 bg-gradient-to-br from-[rgba(15,15,20,0.4)] via-[rgba(10,10,10,0.8)] to-[rgba(5,41,158,0.05)] border border-[rgba(83,134,228,0.2)] rounded-[clamp(0.75rem,2vw,1rem)]">
                <div className="text-[clamp(1.25rem,1.5rem,1.5rem)] font-semibold">Senior Thing Doer</div>
                <div className="text-[clamp(0.70rem,0.9rem,0.9rem)] font-medium text-blue-400 ml-2">Company Inc, Jackson, MI</div>
                <div className="text-[clamp(0.70rem,0.8rem,0.8rem)] font-medium text-gray-400 ml-2">May 20xx - Apr 20xx</div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <span className="rounded-full h-1 w-1 mb-auto mt-2.5 ml-3.25 bg-white"></span>
                        <p>
                            Spearheaded complicated project involving keywords, buzzwords, and skills for a 76% increase in productivity, usefulness, and things getting done,
                            by increasing the number of things done per hour to over 6.
                        </p>
                    </div>
                </div>
            </div> {/* position div */}
        </div> 
    )
}