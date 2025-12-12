import { CorsOptions } from "cors";
import multer from "multer";
import nodemailer from "nodemailer";

// Configure CORS to only allow requests from your React frontend URL
export const corsOptions = {
  origin: "http://localhost:5173",
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
