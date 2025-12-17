const express = require("express");
const cors = require("cors");

// Import equipment API routes
const equipmentRoutes = require("./routes/equipment.routes");

const app = express();

// Enable CORS so frontend can call backend APIs
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Register equipment routes under /api/equipment
app.use("/api/equipment", equipmentRoutes);

// Simple health check endpoint to verify server is running
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
