import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Setup Multer for file uploads
const upload = multer({ dest: "uploads/" }); // saves to /uploads temporarily

// Setup Nodemailer transporter for Google Workspace
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Google App Password
  },
});

// POST /api/apply — handles form submission
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const resume = req.file; // Multer saves the uploaded file here

    if (!resume) {
      return res.status(400).json({ message: "Resume file is required." });
    }

    // Prepare the email
    const mailOptions = {
      from: process.env.EMAIL_USER, // must match transporter auth user
      to: process.env.EMAIL_USER, // sending to yourself
      replyTo: email, // replies go to applicant
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

    res.status(200).json({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Error sending application:", error);
    res.status(500).json({ message: "Failed to send application." });
  }
});

export default router;
