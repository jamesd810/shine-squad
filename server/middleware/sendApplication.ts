import express, { type Router } from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";
import { test } from "vitest";

dotenv.config();

const router: Router = express.Router();
const testuser = "info@shinesquadchicago.com";

// Setup Multer for file uploads
const upload = multer({ dest: "uploads/" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    type: "OAuth2",
    user: testuser,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});

router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const resume = req.file;

    if (!resume) {
      return res.status(400).send({ message: "Resume file is required." });
    }

    // Prepare the email
    const mailOptions = {
      from: testuser,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Job Application: ${firstName} ${lastName}`,
      text: `
New job application received:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Resume is attached.
      `,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Resume:</strong> Attached PDF/DOC</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          path: resume.path,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Message:", error);
    res.status(500).send({ message: "Failed to send application." });
  }
});

router.get("/health", (_req, res) => {
  res.send("✅ GET /health is working!");
});

export default router;
