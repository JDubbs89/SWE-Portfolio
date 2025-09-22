import SocialButton from "@components/buttons/socialButton";

export default function SocialsContainer() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1">
        <SocialButton props={{name: "Resume", href: "/download/Jonathan-Warner-Resume.pdf", extra_styles: "", dl:true}}/>
        <SocialButton props={{name: "LinkedIn", href: "https://linkedin.com/in/jonathanwarnercs", extra_styles: "", dl:false}}/>
        <SocialButton props={{name: "GitHub", href: "https://github.com/JDubbs89", extra_styles: "", dl:false}}/>
      </div>
    </div>
  )
}