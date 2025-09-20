import SocialButton from "@components/buttons/socialButton";

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