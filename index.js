import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db.js";
dotenv.config();
ConnectDB();
const PORT= 5000  || process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("API is running");
});
app.listen(PORT,console.log(`Server listening to port ${PORT}`));



//carbonfootprint882024
//1LGr2bJVZqgr9gmB