import express from "express";
import applyRoute from "./middleware/sendApplication.js";
import corsOrigin from "./helpers/corsOrigin.js";

const app = express();
app.use(corsOrigin());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", applyRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
