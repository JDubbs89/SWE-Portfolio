// import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
// const key = process.env.API_KEY;

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: email,
//     pass: pass, // This should be Gmail App Password
//   },
// });

// export const mailOptions = {
//   from: email,
//   to: email,
// };

// import { Resend } from 'resend';

// export type ContactData = {
//   contactName: string;
//   contactEmail: string;
//   contactPhone?: string;
//   subject: string;
//   message: string;
// }

// const resend = new Resend(key);

// export async function sendEmail(data: ContactData): Promise<boolean> {
//   await resend.emails.send({
//       from: "contact@yourdomain.com", // must match your verified domain in Resend
//       to: "you@yourdomain.com",       // your personal email
//       subject: data.subject,
//       text: `From: ${data.contactEmail}\n\n${data.message}`,
//     });
//   return true;
// }