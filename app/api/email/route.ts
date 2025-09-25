// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { transporter, mailOptions } from '@/app/_lib/mailer'
import { checkRateLimit } from '@/app/_lib/limiter'

export const runtime = "edge"; // to make cloudflare happy

export type ContactData = {
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  subject: string;
  message: string;
}

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
    
    const emailBody = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.contactName}</p>
      <p><strong>Email:</strong> ${data.contactEmail}</p>
      ${data.contactPhone ? `<p><strong>Phone:</strong> ${data.contactPhone}</p>` : ''}
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
    
    await transporter.sendMail({
      ...mailOptions,
      subject: `Contact Form: ${data.subject}`,
      text: `
        Name: ${data.contactName}
        Email: ${data.contactEmail}
        ${data.contactPhone ? `Phone: ${data.contactPhone}` : ''}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
      html: emailBody,
      replyTo: data.contactEmail,
    });
    
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