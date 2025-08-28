import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jonathan Warner - Software Engineering Portfolio",
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
};

export default function Layout(props: LayoutProps<'/about'>) {
  return (
    <section>
      {props.children}
      {/* If you have app/dashboard/@analytics, it appears as a typed slot: */}
      {/* {props.analytics} */}
    </section>
  )
}
