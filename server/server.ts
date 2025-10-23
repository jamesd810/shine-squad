import express from "express";
import applyRoute from "./middleware/sendApplication.js";
import corsOrigin from "./helpers/corsOrigin.js";

const app = express();
app.use(corsOrigin());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes under /api
app.use("/api", applyRoute);

// Serve the React build as static files when available
import path from "path";
const buildPath = path.resolve(process.cwd(), "build");
app.use(express.static(buildPath));
// For any other route, serve index.html so client side routing works
app.get("/*", (_req, res) => {
  res.sendFile(path.join(buildPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Use environment PORT when provided (DreamHost/Passenger will set it), otherwise default to 3000
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
