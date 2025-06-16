import express from "express";
import applyRoute from "./sendApplication.js"; // adjust path if needed

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", applyRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
