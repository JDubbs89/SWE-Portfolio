

export default function BaseSection(
    { children, className }: Readonly<{ children: React.ReactNode; className: string; }>
){
    return (
        <section className={className}>
            {children}
        </section>
    )
}