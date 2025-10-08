
type SkillProps = {
    name: string;
    icon: string;
    category: string;
    className: string;
}

export default function SkillBox(
    { name, icon, category, className }: SkillProps
){
    return (
        <div key={name + category} className={`carousel-skill ${className}`}>
            <img src={icon} alt={`${name} icon`} height={32} width={32} className="carousel-skill-icon" />
            <p className="carousel-skill-name">{name}</p>
        </div>
    )
}