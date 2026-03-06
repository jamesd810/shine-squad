import { CorsOptions } from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import "dotenv/config";
import { Request } from "express";

// Configure CORS to only allow requests for localhost and the specified frontend URLs
export const corsOptions: CorsOptions = {
  origin: [
    process.env.VITE_LOCALHOST_URL || "http://localhost:5173",
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_TWO,
  ].filter(Boolean) as string[],
  optionsSuccessStatus: 200,
};

// Configure Nodemailer transporter
export const transporter = nodemailer.createTransport({
  host: "smtp.dreamhost.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Configure Multer to store files in memory as a buffer
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

export const mailOptions = (req: Request) => {
  const { firstName, lastName, phone, email } = req.body;

  // Ensure req.file exists (requires multer middleware)
  if (!req.file) {
    throw new Error("No file uploaded");
  }

  const { originalname, buffer, mimetype } = req.file;

  return {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Resume Submission: ${firstName} ${lastName}`,
    html: `
      <p>A new resume has been submitted.</p>
      <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
      </ul>`,
    attachments: [
      {
        filename: originalname,
        content: buffer,
        contentType: mimetype,
      },
    ],
  };
};
