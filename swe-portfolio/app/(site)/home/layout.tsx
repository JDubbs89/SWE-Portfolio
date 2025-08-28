import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Jonathan Warner - Software Engineering Portfolio",
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
};

export default function Layout(props: LayoutProps<'/home'>) {
  return (
    <section>
      {props.children}
      {/* If you have app/dashboard/@analytics, it appears as a typed slot: */}
      {/* {props.analytics} */}
    </section>
  )
}
