const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// job routes
app.use("/api/jobs", jobRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
