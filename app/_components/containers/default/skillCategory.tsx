import SkillBox from "./skillBox";

type Skill = {
    name: string;
    icon: string;
    category: string;
}

type Category = {
    name: string;
    skills: Skill[];
    className: string;
    direction: "left" | "right";
}

export default function SkillCategory(
    { name, skills, className, direction }: Category
) {
    return (
        <div key={name} className={`${className} carousel-scroll-wrapper`}> {/*category wrapper*/}
            {/* <h3 className="carousel-category-name">{name}</h3> category heading */}
            <div className={`carousel-${direction}-scrolling-wrapper`}> {/*Skill wrapper*/}
                {skills.map((skill) => ( // Map through skills in each category
                <SkillBox key={skill.name} name={skill.name} icon={skill.icon} category={skill.category} className="inline-block mt-2 mx-5 mb-0 p-0"/>
                ))}
                {skills.map((skill) => ( // Map through skills in each category
                <SkillBox key={skill.name} name={skill.name} icon={skill.icon} category={skill.category} className="inline-block mt-2 mx-5 mb-0 p-0"/>
                ))}
                {skills.map((skill) => ( // Map through skills in each category
                <SkillBox key={skill.name} name={skill.name} icon={skill.icon} category={skill.category} className="inline-block mt-2 mx-5 mb-0 p-0"/>
                ))}
                {skills.map((skill) => ( // Map through skills in each category
                <SkillBox key={skill.name} name={skill.name} icon={skill.icon} category={skill.category} className="inline-block mt-2 mx-5 mb-0 p-0"/>
                ))}
            </div>
        </div>
    )
}