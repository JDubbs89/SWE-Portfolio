"use client"

import { useState, useEffect, FormEvent } from "react";
import SlideUpElement from "@components/containers/default/slideUpElement";

export default function ContactForm(){
  const [hasError, setHasError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    // This will now properly trigger re-render
    setIsPending(true);
    setHasError(false);
    setIsSuccess(false);

    const contactData = {
      contactName: formData.get("name") as string,
      contactEmail: formData.get("email") as string,
      contactPhone: formData.get("phone") as string | undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset(); // Reset form
      } else {
        // Fail silently
        setHasError(true);
      }
    } catch (error) {
      //console.log(error);
      // We will just have it fail silently.
      setHasError(false);
    } finally {
      setIsPending(false);
    }
  };

  return(
    <div id="contact" className="contact-form-section base-section">
      <div className="content-wrapper-px flex flex-col w-full">
          <div className={`alert alert-success w-full dt ${hasError ? "opacity-100 translate-x-0" : "-translate-x-100 opacity-0"}`}>
            Error processing request. Please try again.
          </div>
          <div className={`alert-good alert-success dt ${isSuccess ? "opacity-100 translate-x-0" : "-translate-x-100 opacity-0"}`}>
            Message sent successfully!
          </div></div>
      <SlideUpElement className="flex flex-start content-wrapper-px w-full">
        <div className="section-title-text">Get in Contact</div>
      </SlideUpElement>
      <SlideUpElement className="content-wrapper-px w-full">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-fit">
          <input name="name" type="text" placeholder="Name" required className={`form-input ${isPending ? "opacity-0 h-0 m-0 p-0" : "opacity-100"}`}/>
          <input name="email" type="email" placeholder="E-mail address" required className={`form-input ${isPending ? "opacity-0 h-0 m-0 p-0" : "opacity-100"}`}/>
          <input name="phone" type="tel" placeholder="Phone number (optional)" className={`form-input ${isPending ? "opacity-0 h-0 m-0 p-0" : "opacity-100"}`}/>
          <input name="subject" type="text" placeholder="Why are you reaching out?" required className={`form-input ${isPending ? "opacity-0 h-0 m-0 p-0" : "opacity-100"}`}/>
          <textarea name="message" placeholder="What would you like to say?" required className={`form-textarea ${isPending ? "opacity-0 h-0 m-0 p-0" : "opacity-100"}`}/>
          
          <div className="flex justify-end w-full text-[1rem]">
            <button 
              type="submit" 
              disabled={isPending}
              className={`ghost-button ${isPending ? "pointer-events-none cursor-progress opacity-20" : ""}`}
            >
              {isPending ? "Sending..." : isSuccess ? "Sent!" : "Send!"}
            </button>
          </div>
        </form>
      </SlideUpElement>
    </div>
  )
}