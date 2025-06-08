require("dotenv").config(); // Add this line at the top

import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email sender configuration using .env
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/apply", upload.single("resume"), async (req, res) => {
  const { firstName, lastName, email, phone, experience } = req.body;
  // @ts-ignore
  const resume = req.file;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Job Application from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nExperience: ${experience} years`,
    attachments: resume
      ? [
          {
            filename: resume.originalname,
            content: resume.buffer,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application sent successfully." });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
