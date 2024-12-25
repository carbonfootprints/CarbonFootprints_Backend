import mongoose from "mongoose";

const BabConsumptionSchema = new mongoose.Schema(
    {
        directGHGId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DirectGHG", // Reference to DirectGHG schema
            required: true,
        },
        field1: {
            type: String,
            required: true,
        },
        field2: {
            type: String,
            required: true,
        },
        // Add more fields as needed
    },
    {
        timestamps: true,
    }
);

const BabConsumption = mongoose.model("BabConsumption", BabConsumptionSchema);
export default BabConsumption;
