import { Metadata } from "next";
import ContactFormSection from "@components/sections/contactFormSection";

export const metadata: Metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <div className="flex flex-col gap-5">
      <ContactFormSection/>
    </div>
  )
}