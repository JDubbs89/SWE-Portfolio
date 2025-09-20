import SocialButton from "@components/buttons/socialButton";
import EmailSvg from "@assets/icons/email.svg";
import LinkedInSvg from "@assets/icons/linkedin.svg";
import GitHubSvg from "@assets/icons/github.svg";

export default function SocialsContainer() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1">
        <SocialButton props={{name: "Email", href: "mailto:jonathanwarnercs@gmail.com?subject=Portfolio%20Feedback", extra_styles: ""}}/>
        <SocialButton props={{name: "LinkedIn", href: "https://linkedin.com/in/jonathanwarnercs", extra_styles: ""}}/>
        <SocialButton props={{name: "GitHub", href: "https://github.com/JDubbs89", extra_styles: ""}}/>
      </div>
    </div>
  )
}