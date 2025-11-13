import cors from "cors";

const allowedOrigins =
  process.env.NODE_ENV === "production" ? ["https://www.shinesquadchicago.com", "https://shinesquadchicago.com"] : ["http://localhost:5000"];

const corsOrigin = () =>
  cors({origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn(`Blocked by CORS: ${origin}`);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  });

export default corsOrigin;
