import mongoose from "mongoose";

const OrganisationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        sitename: {
            type: String,
            required: true,
        },
        registernumber: {
            type: String,
            required: true,
            unique: true,
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: function (v) {
                    return v.length === 2;
                },
                message: "Coordinates must be an array of two numbers [latitude, longitude].",
            },
        },
        address: {
            type: String,
            required: true,
        },
        contactperson: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                },
                message: "Please enter a valid email address.",
            },
        },
        phonenumber: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v);
                },
                message: "Phone number must be a 10-digit number.",
            },
        },
        noofemployees: {
            type: Number,
            required: true,
            default: 0,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Organisation = mongoose.model("Organisation", OrganisationSchema);
export default Organisation;
