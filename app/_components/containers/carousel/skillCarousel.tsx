import SkillCategory from "@components/containers/default/skillCategory";

type Skill = {
    name: string;
    icon: string;
    category: string;
}

type Category = {
    name: string;
    skills: Skill[];
}

type SkillCarouselProps = {
    categories: Category[];
    autoScroll: boolean;
    scrollSpeed: number; // how often the tabs change
};

export default function SkillCarousel(
    { categories, autoScroll, scrollSpeed }: SkillCarouselProps
) {
    return (
        <div className="skill-carousel content-wrapper">
            <h2 className="section-title">Skills</h2>
                <div className="flex flex-wrap flex-start w-full h-full">
                    {categories.map((category) => ( // Map through categories
                        <SkillCategory key={category.name} name={category.name} skills={category.skills} className={`carousel-item`}/>
                    ))}
                </div> {/* carousel */}
        </div>
    )
}