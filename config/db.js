import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        if (!process.env.MONGOURL) {
            console.error("MongoDB connection string (MONGO) is not defined in the environment variables.");
            process.exit(1);
        }

        const connect = await mongoose.connect(process.env.MONGOURL); // Simplified without deprecated options
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default ConnectDB;
