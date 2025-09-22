

export default function ParagraphContainer(
    { paras, className }: Readonly<{ paras:string[]; className: string; }>
){
    return (
        <div className={className}>
            {paras.map((para, index) =>(
                <p key={index} className="mb-4 last:mb-0 font-normal text-2xl">{para}</p>
            ))}
        </div>
    )
}