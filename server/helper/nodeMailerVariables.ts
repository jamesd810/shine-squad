import { CorsOptions } from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import "dotenv/config";

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
export const upload = multer({
  storage: multer.memoryStorage(),
});
