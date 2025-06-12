"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // Add this line at the top
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
// Email sender configuration using .env
const transporter = nodemailer_1.default.createTransport({
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
    }
    catch (error) {
        console.error("Email sending failed:", error);
        res.status(500).json({ error: "Failed to send email." });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
