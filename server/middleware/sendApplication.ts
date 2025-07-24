import express, { type Router } from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const router: Router = express.Router();

// Setup Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Setup Nodemailer transporter for Google Workspace
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/apply — handles form submission
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, phone } = req.body;

    const resume = req.file;

    if (!resume) {
      return res.status(400).send({ message: "Resume file is required." });
    }

    // Prepare the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
    console.error("Error sending application:", error);
    res.status(500).send({ message: "Failed to send application." });
  }
});

router.get("/apply", (req, res) => {
  res.send("✅ GET /apply is working!");
});

export default router;
