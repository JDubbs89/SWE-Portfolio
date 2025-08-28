import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jonathan Warner - Software Engineering Portfolio",
  description: "Hello! I'm Jonathan, a computer science student and aspiring software engineer.",
};

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ slug: '1' }>
}) {
  const { slug } = await params
}