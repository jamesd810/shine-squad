import "dotenv/config";
import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import cors from "cors";
import ViteExpress from "vite-express";

const app = express();

// Configure CORS to only allow requests from your React frontend URL
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
// Multer handles multipart/form-data, so express.json() and express.urlencoded() are not needed here

// Configure Multer to store files in memory as a buffer
const upload = multer({
  storage: multer.memoryStorage(),
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
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

app.post("/apply", upload.single("resume"), async (req, res) => {
  const { firstName, lastName, phoneNumber, email: applicantEmail } = req.body;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const mailOptions = {
    from: applicantEmail,
    to: process.env.BUSINESS_EMAIL_ADDRESS,
    subject: `New Resume Submission: ${firstName} ${lastName}`,
    html: `<p>A new resume has been submitted.</p>
           <ul>
             <li>First Name: ${firstName}</li>
             <li>Last Name: ${lastName}</li>
             <li>Last Name: ${phoneNumber}</li>
           </ul>`,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer, // Use the buffer from memory storage
        contentType: req.file.mimetype, // Set the correct MIME type
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Resume submitted successfully!");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Error submitting resume.");
  }
});

app.get("/health", (_req, res) => {
  res.status(200).send("Server is healthy");
});

ViteExpress.listen(app, 5175, () => {
  console.log(`Server running...`);
});
