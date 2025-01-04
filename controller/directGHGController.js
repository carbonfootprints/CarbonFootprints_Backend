import DirectGHG from "../model/directGHGModel.js";
import BabPernambet from "../model/babPernambet.js";
import BabConsumption from "../model/babConsumption.js";
import BabThirumudivakkam from "../model/babThirumudivakkam.js";
import Organisation from "../model/organisationModel.js";





// Save Organisation data
export const saveOrganisation = async (req, res) => {
    try {
        const {
            organizationName, // Ensure these match
            siteName,
            registrationNumber,
            coordinates,
            address,
            contactPerson,
            email,
            telephone,
            numberOfEmployees,
            facilityDescription,
        } = req.body;

        const organisation = new Organisation({
            name: organizationName, // Map frontend to backend names
            sitename: siteName,
            registernumber: registrationNumber,
            coordinates,
            address,
            contactperson: contactPerson,
            email,
            phonenumber: telephone,
            noofemployees: numberOfEmployees,
            description: facilityDescription,
        });

        await organisation.save();

        const directGHG = new DirectGHG({
            organisationId: organisation._id,
            babThirumudivakkam: null,
            babConsumption: null,
            babPernambet: null,
        });

        await directGHG.save();

        return res.status(201).json({
            status: 201,
            message: "Organisation and corresponding Direct GHG record saved successfully.",
            data: organisation,
        });
    } catch (error) {
        console.error("Error saving Organisation and Direct GHG data:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error: " + error.message,
        });
    }
};


// // Create a new DirectGHG entry after Organisation is saved
// export const createDirectGHG = async (req, res) => {
//     try {
//         const { organisationId } = req.body;

//         // Check if the organisation exists
//         const organisation = await Organisation.findById(organisationId);
//         if (!organisation) {
//             return res.status(404).json({
//                 status: 404,
//                 message: "Organisation not found.",
//             });
//         }

//         // Create a new DirectGHG record with default values
//         const directGHG = new DirectGHG({
//             organisationId,
//             babThirumudivakkam: null,
//             babConsumption: null,
//             babPernambet: null,
//         });

//         await directGHG.save();

//         return res.status(201).json({
//             status: 201,
//             message: "Direct GHG record created successfully.",
//             data: directGHG,
//         });
//     } catch (error) {
//         console.error("Error creating Direct GHG record:", error);
//         return res.status(500).json({
//             status: 500,
//             message: "Server error: " + error.message,
//         });
//     }
// };

// Save BabPernambet data
export const saveBabPernambet = async (req, res) => {
    try {
        const { directGHGId, date, woodenPalletsKg, firewoodKg, dieselLitres } = req.body;

        // Check if DirectGHG exists
        const directGHG = await DirectGHG.findById(directGHGId);
        if (!directGHG) {
            return res.status(404).json({
                status: 404,
                message: "Direct GHG record not found.",
            });
        }

        // Validate the input values (optional, you can add more validation logic as needed)
        if (isNaN(woodenPalletsKg) || isNaN(firewoodKg) || isNaN(dieselLitres)) {
            return res.status(400).json({
                status: 400,
                message: "Wooden Pallets (kg), Firewood (kg), and Diesel (litres) must be numbers.",
            });
        }

        // Create and save Bab Pernambet record
        const babPernambet = new BabPernambet({
            directGHGId,
            date,
            woodenPalletsKg,
            firewoodKg,
            dieselLitres,
        });
        await babPernambet.save();

        // Update the DirectGHG record with the new BabPernambet reference
        directGHG.babPernambet = babPernambet._id;
        await directGHG.save();

        return res.status(201).json({
            status: 201,
            message: "Bab Pernambet data saved successfully.",
            data: babPernambet,
        });
    } catch (error) {
        console.error("Error saving Bab Pernambet data:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error: " + error.message,
        });
    }
};

// Save BabConsumption data
export const saveBabConsumption = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { directGHGId, date, woodenPalletsKg, firewoodKg, dieselLitres } = req.body;

        // Check if the DirectGHG record exists
        const directGHG = await DirectGHG.findById(directGHGId);
        if (!directGHG) {
            return res.status(404).json({
                status: 404,
                message: "Direct GHG record not found.",
            });
        }

        // Create a new BabConsumption record with the provided fields
        const babConsumption = new BabConsumption({
            directGHGId,
            date,
            woodenPalletsKg,
            firewoodKg,
            dieselLitres,
        });

        // Save the BabConsumption record to the database
        await babConsumption.save();

        // Update the DirectGHG record with the babConsumption reference
        directGHG.babConsumption = babConsumption._id;
        await directGHG.save();

        // Return the success response
        return res.status(201).json({
            status: 201,
            message: "Bab Consumption data saved successfully.",
            data: babConsumption,
        });
    } catch (error) {
        console.error("Error saving Bab Consumption data:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error: " + error.message,
        });
    }
};


// Save BabThirumudivakkam data
export const saveBabThirumudivakkam = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { directGHGId, date, woodenPalletsKg, firewoodKg, dieselLitres } = req.body;

        // Check if the DirectGHG record exists
        const directGHG = await DirectGHG.findById(directGHGId);
        if (!directGHG) {
            return res.status(404).json({
                status: 404,
                message: "Direct GHG record not found.",
            });
        }

        // Create a new BabThirumudivakkam record with the provided fields
        const babThirumudivakkam = new BabThirumudivakkam({
            directGHGId,
            date,
            woodenPalletsKg,
            firewoodKg,
            dieselLitres,
        });

        // Save the BabThirumudivakkam record to the database
        await babThirumudivakkam.save();

        // Update the DirectGHG record with the babThirumudivakkam reference
        directGHG.babThirumudivakkam = babThirumudivakkam._id;
        await directGHG.save();

        // Return the success response
        return res.status(201).json({
            status: 201,
            message: "Bab Thirumudivakkam data saved successfully.",
            data: babThirumudivakkam,
        });
    } catch (error) {
        console.error("Error saving Bab Thirumudivakkam data:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error: " + error.message,
        });
    }
};

// Get all DirectGHG data with populated details
export const getDirectGHGDetails = async (req, res) => {
    try {
        const { organisationId } = req.params;

        const directGHG = await DirectGHG.findOne({ organisationId })
            .populate("babPernambet")
            .populate("babConsumption")
            .populate("babThirumudivakkam");

        if (!directGHG) {
            return res.status(404).json({
                status: 404,
                message: "Direct GHG record not found.",
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Direct GHG details retrieved successfully.",
            data: directGHG,
        });
    } catch (error) {
        console.error("Error retrieving Direct GHG details:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error: " + error.message,
        });
    }
};
