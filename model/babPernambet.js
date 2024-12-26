import mongoose from "mongoose";

const BabPernambetSchema = new mongoose.Schema(
    {
        directGHGId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DirectGHG", // Reference to DirectGHG schema
            required: true,
        },
        date: {
            type: Date, // Date type for storing date
            required: true, // Make it required
        },
        woodenPalletsKg: {
            type: Number, // Numeric field for Wooden Pallets in kg
            required: true, // Make it required
        },
        firewoodKg: {
            type: Number, // Numeric field for Firewood in kg
            required: true, // Make it required
        },
        dieselLitres: {
            type: Number, // Numeric field for Diesel in litres
            required: true, // Make it required
        },
    },
    {
        timestamps: true, // To automatically add createdAt and updatedAt fields
    }
);

const BabPernambet = mongoose.model("BabPernambet", BabPernambetSchema);
export default BabPernambet;
