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

// Enable CORS for all routes
const corsOptions = {
    origin: ["http://localhost:5173"], // Frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
};
app.use(cors(corsOptions));

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
