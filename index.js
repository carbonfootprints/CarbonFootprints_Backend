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
// const corsOptions = {
//     origin: function (origin, callback) {
//       const allowedOrigins = ['http://localhost:5173', 'https://carbon-footprint-front-end.vercel.app'];
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//         callback(null, true); // Allow the request
//       } else {
//         callback(new Error('Not allowed by CORS')); // Reject the request
//       }
//     },
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   };
  
  // Enable CORS with options
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://carbon-footprint-front-end.vercel.app'], // Replace with your frontend's domain
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
  
  // Handle preflight requests for all routes
  // app.options('*', cors(corsOptions)); 
  
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
