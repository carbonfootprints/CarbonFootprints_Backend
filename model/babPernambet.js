import mongoose from "mongoose";

const BabPernambetSchema = new mongoose.Schema(
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

const BabPernambet = mongoose.model("BabPernambet", BabPernambetSchema);
export default BabPernambet;
