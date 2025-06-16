"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
// Setup Multer for file uploads
const upload = (0, multer_1.default)({ dest: "uploads/" }); // saves to /uploads temporarily
// Setup Nodemailer transporter for Google Workspace
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// POST /api/apply — handles form submission
router.post("/apply", upload.single("resume"), async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.body;
        const resume = req.file;
        if (!resume) {
            return res.status(400).json({ message: "Resume file is required." });
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
        res.status(200).json({ message: "Application sent successfully!" });
    }
    catch (error) {
        console.error("Error sending application:", error);
        res.status(500).json({ message: "Failed to send application." });
    }
});
router.get("/apply", (req, res) => {
    res.send("✅ GET /apply is working!");
});
exports.default = router;
