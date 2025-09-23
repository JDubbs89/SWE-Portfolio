import SkillCarousel from "@components/containers/carousel/skillCarousel";
import ParagraphContainer from "@components/text/paragraphContainer";

export default function SkillSection() {
    const skillCategories = [
        {
            name: "Skills 0",
            skills: [
                { name: "JavaScript", icon: "/assets/skills/javascript.svg", category: "Programming Languages" },
                { name: "Python", icon: "/assets/skills/python.svg", category: "Programming Languages" },
                { name: "C++", icon: "/assets/skills/cpp.svg", category: "Programming Languages" },
                { name: "HTML5", icon: "/assets/skills/html5.svg", category: "Programming Languages" },
                { name: "CSS3", icon: "/assets/skills/css3.svg", category: "Programming Languages" },
                { name: "SQL", icon: "/assets/skills/sql.svg", category: "Programming Languages" },
                { name: "MySQL", icon: "/assets/skills/mysql.svg", category: "Databases" },
                { name: "SQLite", icon: "/assets/skills/sqlite.svg", category: "Databases" },
                { name: "PostgreSQL", icon: "/assets/skills/postgresql.svg", category: "Databases" },
                { name: "MariaDB", icon: "/assets/skills/mariadb.svg", category: "Databases" },
                { name: "Microsoft SQL Server", icon: "/assets/skills/microsoftsql.svg", category: "Databases" },
            ],
        },
        {
            name: "Skills 1",
            skills: [
                { name: "Next.js", icon: "/assets/skills/nextjs.svg", category: "Frameworks/Libraries" },
                { name: "FastAPI", icon: "/assets/skills/fastapi.svg", category: "Frameworks/Libraries" },
                { name: "TailwindCSS", icon: "/assets/skills/tailwind.svg", category: "PFrameworks/Libraries" },
                { name: "JQuery", icon: "/assets/skills/jquery.svg", category: "Frameworks/Libraries" },
                { name: "Git", icon: "/assets/skills/git.svg", category: "Developer Tools/Platforms" },
                { name: "Gitlab", icon: "/assets/skills/gitlab.svg", category: "Developer Tools/Platforms" },
                { name: "Docker", icon: "/assets/skills/docker.svg", category: "Developer Tools/Platforms" },
                { name: "Linux", icon: "/assets/skills/linux.svg", category: "Developer Tools/Platforms" },
                { name: "Oracle Cloud", icon: "/assets/skills/oraclecloud.svg", category: "Developer Tools/Platforms" },
                { name: "REST APIs", icon: "/assets/skills/restapi.svg", category: "Developer Tools/Platforms" },
                { name: "Agile", icon: "/assets/skills/agile.svg", category: "Developer Tools/Platforms" },
                { name: "JSON", icon: "/assets/skills/json.svg", category: "Developer Tools/Platforms" },
            ],
        }
    ];
        return (
        <section id="skills" className="skill-section base-section">
            <div className="text-[clamp(1.25rem,3rem,3rem)] font-bold whitespace-nowrap content-wrapper">Skills        
            <SkillCarousel categories={skillCategories}/></div>
        </section>
    )
}