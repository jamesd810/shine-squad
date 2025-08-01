import nodemailer, { TransportOptions } from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import Mail from "nodemailer/lib/mailer";

dotenv.config();

const Oauth2 = google.auth.OAuth2;

// Create SMTP transporter
const createTransporter = async () => {
  const oauth2Client = new Oauth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const { token } = await oauth2Client.getAccessToken();
  if (!token) throw new Error("Access token retrieval failed");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SENDER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: token,
    },
  } as TransportOptions);

  return transporter;
};

// Send email with the given options.
export const sendEmail = async (emailOptions: Mail.Options) => {
  try {
    const transporter = await createTransporter();
    await transporter.sendMail(emailOptions);
    console.log("Success sending email!");
  } catch (err) {
    console.log("Email send failed: ", err);
  }
};
