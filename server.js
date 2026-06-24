require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const merchantRoutes = require("./routes/merchantRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/merchants", merchantRoutes);

app.get("/", (req, res) => {
  res.send("Merchant Management API Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});