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
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@jonathanwarnercs.com", // must match your verified domain in Resend
        to: `${email}`,       // your personal email
        subject: `New form response from ${data.contactName}: ${data.subject}`,
        text: `From: ${data.contactEmail}\n\nPhone: ${data.contactPhone}\n\n${data.message}`,
      }),
    });

    // await resend.emails.send({
    //   from: "contact@jonathanwarnercs.com", // must match your verified domain in Resend
    //   to: `${email}`,       // your personal email
    //   subject: `New form response from ${data.contactName}: ${data.subject}`,
    //   text: `From: ${data.contactEmail}\n\nPhone: ${data.contactPhone}\n\n${data.message}`,
    // });
    
    if (!response.ok) {
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