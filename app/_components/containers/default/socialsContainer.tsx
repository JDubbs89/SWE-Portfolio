import SocialButton from "@components/buttons/socialButton";

type props = {
  className?:string;
}

export default function SocialsContainer({ className = ""}: props) {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1">
        <SocialButton props={{name: "Resume", href: "/download/Jonathan-Warner-Resume.pdf", extra_styles: className, dl:true}}/>
        <SocialButton props={{name: "LinkedIn", href: "https://linkedin.com/in/jonathanwarnercs", extra_styles: className, dl:false}}/>
        <SocialButton props={{name: "GitHub", href: "https://github.com/JDubbs89", extra_styles: className, dl:false}}/>
      </div>
    </div>
  )
}