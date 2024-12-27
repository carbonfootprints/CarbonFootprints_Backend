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

// Middleware
app.use(express.json());

// CORS Middleware Configuration
const corsOptions = {
    origin: ["http://localhost:5173", "https://your-frontend-production-domain.com"], // Add your frontend URL(s) here
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], // Add other custom headers if needed
};
app.use(cors(corsOptions));

// API Endpoints
app.get('/', (req, res) => {
    res.send("API is running");
});

app.use('/api/user', userRoutes);
app.use('/api/direct', directRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});
