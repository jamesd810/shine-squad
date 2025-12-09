import multer from "multer";
import nodemailer from "nodemailer";

// Configure CORS to only allow requests from your React frontend URL
export const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200, // For legacy browser support
};

// Configure Nodemailer transporter
export const transporter = nodemailer.createTransport({
  service: "smtp.dreamhost.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});

// Configure Multer to store files in memory as a buffer
export const upload = multer({
  storage: multer.memoryStorage(),
});
