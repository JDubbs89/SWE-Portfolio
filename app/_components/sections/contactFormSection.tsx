"use client"

import Form from "next/form";
import { sendEmail } from '@/app/api/send-email';
import { useState } from "react";
import SlideUpElement from "@components/containers/default/slideUpElement";

export type ContactData = {
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  subject: string;
  message: string;
}

export default function ContactForm(){
  const [hasError, setHasError] = useState(false);
  const submit = (data:FormData) => {
    try {
      sendEmail(data);
      setHasError(false);
    } catch (err){
      setHasError(true);
    };
  }
  
  return(
    <div id="contact" className="contact-form-section base-section">
      <SlideUpElement opacityM={{ scroll:[0, 0.75, 1],value:[1, 1, 0] }} transformYM={{ scroll:[0, 0.75, 1],value:[0, 0, 100] }} className="flex flex-start content-wrapper-px w-full">
        <div className="section-title-text">Get in Contact</div>
      </SlideUpElement>
      {hasError ? <div className="alert alert-text">Error processing result. Please try again.</div> : null}
      <SlideUpElement opacityM={{ scroll:[0, 0.75, 1],value:[1, 1, 0] }} transformYM={{ scroll:[0, 0.75, 1],value:[0, 0, 100] }}>
      <Form action={submit} className="flex flex-col content-wrapper-px gap-5 h-fit">
        <input id="name" name="name" type="text" placeholder={"Name"} required className="form-input" />
  
        <input id="email" name="email" type="email" placeholder={"E-mail address"} required className="form-input" />
  
        <input id="phone" name="phone" type="tel" placeholder={"Phone number (optional)"} className="form-input" />
  
        <input id="subject" name="subject" type="text" placeholder={"Why are you reaching out?"} required className="form-input" />

        <textarea id="message" name="message" placeholder={"What would you like to say?"} required className="form-textarea" />
  
        <div className="flex justify-end w-full text-[1rem]"><button type="submit" className="ghost-button">Send!</button></div>
      </Form>
      </SlideUpElement>
    </div>
  )
}