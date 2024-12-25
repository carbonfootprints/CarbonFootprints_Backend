import mongoose from "mongoose";

const DirectGHGSchema = new mongoose.Schema(
    {
        organisationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organisation", // Reference to Organisation schema
            required: true,
        },
        babPernambet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BabPernambet", // Reference to Bab Pernambet schema
            default: null, // Set default value to null
        },
        babConsumption: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BabConsumption", // Reference to Bab Consumption schema
            default: null, // Set default value to null
        },
        babThirumudivakkam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BabThirumudivakkam", // Reference to Bab Thirumudivakkam schema
            default: null, // Set default value to null
        },
    },
    {
        timestamps: true,
    }
);

const DirectGHG = mongoose.model("DirectGHG", DirectGHGSchema);
export default DirectGHG;
