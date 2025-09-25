// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/app/_lib/limiter'

const email = process.env.EMAIL;
const key = process.env.API_KEY;

export const runtime = "edge"; // to make cloudflare happy

export type ContactData = {
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  subject: string;
  message: string;
}


// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    const rateLimit = checkRateLimit(ip, 3, 15 * 60 * 1000) // 3 emails per 15 minutes
  
    // rate limiting check
    if (!rateLimit.allowed) {
      const resetMinutes = rateLimit.resetIn !== undefined
      ? Math.ceil(rateLimit.resetIn / 60000)
      : "a few";
      return NextResponse.json(
      { error: `Rate limit exceeded. Try again in ${resetMinutes} minutes.` },
      { status: 429 }
    );
    }
    const data: ContactData = await request.json()
    
    // Basic validation
    if (!data.contactName || !data.contactEmail || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.contactEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      )
    }
    
    const response = await fetch("https://api.resend.com/emails", {// Notification Email upon message sent.
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@jonathanwarnercs.com",
        to: `${email}`,       
        subject: `Message from ${data.contactName}`,
        text: `From: ${data.contactEmail}\nPhone: ${data.contactPhone}\n\n${data.subject}\n\n${data.message}`,
      }),
    });

    const firstName:string = data.contactName.split(" ")[0];
    const response1 = await fetch("https://api.resend.com/emails", {// Thank you email for contact
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@jonathanwarnercs.com",
        to: `${data.contactEmail}`,       
        subject: `Thanks for reaching out!`,
        text: `Hey ${firstName},\n\nThank you for taking the time to send me a message! If you have any more questions regarding myself or my projects, don't hesitate to contact me again!\n\nThank you,\nJonathan Warner`,
      }),
    });


    if (!response.ok || !response1.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
    
  } catch (error: unknown) {
    if (error instanceof Error) {
    console.error(error.message);
    } else {
    console.error(error);
    }
    // If error has a message, include it for debugging
    return NextResponse.json(
      { error: 'Failed to send message.', details: String(error) },
      { status: 500 }
    );
  }
}