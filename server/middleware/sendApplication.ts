import express, { type Router } from "express";
import multer from "multer";
import dotenv from "dotenv";
import { sendEmail } from "../helpers/createTransporterHelper.js";
import axios from "axios";

dotenv.config();

const router: Router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const resume = req.file;
    if (!resume) {
      return res.status(400).send({ message: "Resume file is required." });
    }

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SENDER_EMAIL}>`,
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
    await sendEmail(mailOptions);

    res.status(200).send({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Message:", error);
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
    }
    res.status(500).send({ message: "Failed to send application." });
  }
});

router.get("/health", (_req, res) => {
  res.send("✅ GET /health is working!");
});

export default router;
