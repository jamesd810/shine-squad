import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import {
  corsOptions,
  transporter,
  upload,
} from "./helper/nodeMailerVariables.js";
import { mailOptions } from "./helper/nodeMailerVariables.js";

const __dirname = import.meta.dirname;
const app = express();
const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const port = process.env.NODE_ENV === "production" ? 8082 : 5175;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../build")));
}

app.get("/health", (_req, res) => {
  res.status(200).send("Server is healthy");
});

app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    await transporter.sendMail(mailOptions(req));
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

app.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}...`);
});
