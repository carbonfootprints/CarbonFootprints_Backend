import mongoose from "mongoose";

const BabThirumudivakkamSchema = new mongoose.Schema(
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
            type: Number,
            required: true,
        },
        // Add more fields as needed
    },
    {
        timestamps: true,
    }
);

const BabThirumudivakkam = mongoose.model("BabThirumudivakkam", BabThirumudivakkamSchema);
export default BabThirumudivakkam;
