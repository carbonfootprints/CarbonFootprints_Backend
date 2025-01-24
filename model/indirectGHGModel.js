import mongoose from "mongoose";

// Schema for purchased electricity
const PurchasedElectricitySchema = new mongoose.Schema({
    bab_pernambut: {
        date: { type: String, required: true },
        KWH_Tannery: { type: String, required: true },
        KWH_CEBT: { type: String, required: true },
    },
    bab_thirumudivakkam: {
        date: { type: String, required: true },
        KWH_Tannery: { type: String, required: true },
        KWH_CEBT: { type: String, required: true },
    },
});

// Schema for transportation
const TransportationSchema = new mongoose.Schema({
    upstream: {
        date: { type: String, required: true },
        invoice_number: { type: String, required: true },
        supplier: { type: String, required: true },
        area: { type: String, required: true },
        weight: { type: String, required: true },
        location_of_supplier: { type: String, required: true },
        distance: { type: String, required: true },
        t_km: { type: Number, required: true },
    },
    downstream: {
        date: { type: String, required: true },
        invoice_number: { type: String, required: true },
        customer: { type: String, required: true },
        area: { type: String, required: true },
        weight: { type: String, required: true },
        location_of_customer: { type: String, required: true },
        distance: { type: String, required: true },
        t_km: { type: Number, required: true },
    },
    vehicle: {
        company_owned_vehicle_no: { type: String, required: true },
        type_of_vehicle: { type: String, required: true },
        distance_travelled_km: { type: Number, required: true },
    },
});

// Schema for products used
const ProductsUsedSchema = new mongoose.Schema({
    bab_pernambut: {
        date: { type: String, required: true },
        KWH_Tannery: { type: String, required: true },
        KWH_CEBT: { type: String, required: true },
    },
});

// Main schema for indirect collection
const IndirectGHGSchema = new mongoose.Schema(
    {
        organisationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organisation", // Reference to Organisation schema
            required: true,
        },
        purchased_electricity: PurchasedElectricitySchema,
        purchased_transportation: TransportationSchema,
        products_used: ProductsUsedSchema,
    },
    {
        timestamps: true,
    }
);

const IndirectGHG = mongoose.model("IndirectGHG", IndirectGHGSchema);

export default IndirectGHG;
