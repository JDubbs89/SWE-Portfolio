import NavButton from "../../buttons/navButton";
type SideNavContainerProps = {
  collapsed: boolean;
  onMouseLeave: Function;
};

export default function SideNavContainer(
  { collapsed, onMouseLeave }: SideNavContainerProps
){
  const navLinks = [
        {name: "Home", href: "/home"},
        {name: "About", href: "/about"},
        {name: "Projects", href: "/projects"},
        {name: "Blog", href: "/blog"},
        {name: "Contact", href: "/contact"}
    ]


     return(
      <div onMouseLeave={() => onMouseLeave()} className={`nav-bar-vertical transition-all duration-300 ${collapsed ? "translate-x-full pointer-events-none" : "translate-x-0"}`}>
        {navLinks.map((link) => (
          <NavButton key={link.name} props={{ name: link.name, href: link.href }} />
        ))}
      </div>
    )


  }