import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import {
  corsOptions,
  transporter,
  upload,
} from "./helper/nodeMailerVariables.js";

const __dirname = import.meta.dirname;
const app = express();

app.use(cors(corsOptions));

// Serve static files from the build directory in production
// __dirname in the compiled JS lives in dist/server, so we need to step
// up two levels to reach the top‑level build folder.
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../build")));
}

app.get("/health", (_req, res) => {
  res.status(200).send("Server is healthy");
});

app.post("/apply", upload.single("resume"), async (req, res) => {
  const {
    firstName,
    lastName,
    phone: phoneNumber,
    email: applicantEmail,
  } = req.body;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Resume Submission: ${firstName} ${lastName}`,
    html: `<p>A new resume has been submitted.</p>
           <ul>
             <li>First Name: ${firstName}</li>
             <li>Last Name: ${lastName}</li>
             <li>Email: ${applicantEmail}</li>
             <li>Phone Number: ${phoneNumber}</li>
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

// SPA fallback - serve index.html for non-asset, HTML GET requests
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    // only handle GET requests that accept HTML
    if (req.method !== "GET") return next();
    const accept = req.headers.accept || "";
    if (!accept.includes("text/html")) return next();

    res.sendFile(path.join(__dirname, "../../build/index.html"));
  });
}

const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const port = process.env.NODE_ENV === "production" ? 8082 : 5175;

app.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}...`);
});
