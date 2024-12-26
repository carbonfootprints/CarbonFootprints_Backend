import mongoose from "mongoose";

const BabConsumptionSchema = new mongoose.Schema(
    {
        directGHGId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DirectGHG", // Reference to DirectGHG schema
            required: true,
        },
        date: {
            type: Date,
            required: true, // Date field
        },
        woodenPalletsKg: {
            type: Number,
            required: true, // Wooden Pallets in kg
        },
        firewoodKg: {
            type: Number,
            required: true, // Firewood in kg
        },
        dieselLitres: {
            type: Number,
            required: true, // Diesel in litres
        },
    },
    {
        timestamps: true, // Automatically creates createdAt and updatedAt fields
    }
);

const BabConsumption = mongoose.model("BabConsumption", BabConsumptionSchema);
export default BabConsumption;
