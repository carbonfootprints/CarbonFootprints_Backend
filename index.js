import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import directRoutes from "./routes/DirectGHGRoutes.js";

dotenv.config();
ConnectDB();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: '*', // Allow only this origin
    credentials: true, // Allow credentials (cookies, headers, etc.)
  })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/direct", directRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
