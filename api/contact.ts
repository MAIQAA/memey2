import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, subject, message, honeypot } = req.body;

  // Check honeypot for spam
  if (honeypot) {
    return res.status(400).json({ message: "Spam detected." });
  }

  // Validate required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Sanitize inputs
  const sanitizedName = sanitizeHtml(name, {
    allowedTags: [],
    allowedAttributes: {},
  });
  const sanitizedEmail = sanitizeHtml(email, {
    allowedTags: [],
    allowedAttributes: {},
  });
  const sanitizedPhone = phone
    ? sanitizeHtml(phone, { allowedTags: [], allowedAttributes: {} })
    : "";
  const sanitizedSubject = subject
    ? sanitizeHtml(subject, { allowedTags: [], allowedAttributes: {} })
    : "";
  const sanitizedMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {},
  });

  // Email transporter configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: `"MeMeY Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL || "support@memey.cloud",
    replyTo: sanitizedEmail,
    subject:
      sanitizedSubject || `New Contact Form Submission from ${sanitizedName}`,
    text: `
      Name: ${sanitizedName}
      Email: ${sanitizedEmail}
      ${phone ? `Phone: ${sanitizedPhone}` : ""}
      ${subject ? `Subject: ${sanitizedSubject}` : ""}
      Message: ${sanitizedMessage}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${sanitizedName}</p>
      <p><strong>Email:</strong> ${sanitizedEmail}</p>
      ${phone ? `<p><strong>Phone:</strong> ${sanitizedPhone}</p>` : ""}
      ${subject ? `<p><strong>Subject:</strong> ${sanitizedSubject}</p>` : ""}
      <p><strong>Message:</strong> ${sanitizedMessage}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send message." });
  }
}
