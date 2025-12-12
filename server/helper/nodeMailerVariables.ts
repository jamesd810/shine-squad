import multer from "multer";
import nodemailer from "nodemailer";
import { businessEmailAddress } from "./constants.js";

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
    user: businessEmailAddress,
    pass: "coDQ@3h#by7DWt3F",
  },
});

// Configure Multer to store files in memory as a buffer
export const upload = multer({
  storage: multer.memoryStorage(),
});
