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
                <div className="flex flex-col gap-1 w-full"> {/* carousel scrolling div */}
                    {categories.map((category,index) => ( // Map through categories
                        <SkillCategory key={category.name} name={category.name} skills={category.skills} className={`max-w-full p-0 m-0`} direction={index%2==0 ? "left" : "right"}/>
                    ))}
                </div>
        </div>
    )
}