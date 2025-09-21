
type Skill = {
    name: string;
    icon: string;
    category: string;
}

type Category = {
    name: string;
    skills: Skill[];
    className: string;
}

export default function SkillCategory(
    { name, skills, className }: Category
) {
    return (
        <div key={name} 
                        className={className}>
                        <h3 className="carousel-category-name">{name}</h3>
                        <div className="carousel-skill-container">
                            {skills.map((skill) => ( // Map through skills in each category
                                <div key={skill.name} className="carousel-skill">
                                    <img src={skill.icon} alt={`${skill.name} icon`} height={80} width={80} className="carousel-skill-icon" />
                                    <p className="carousel-skill-name">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
    )
}