import express from "express";
import {
  saveOrganisation,
  saveBabPernambet,
  saveBabConsumption,
  saveBabThirumudivakkam,
  getDirectGHGDetails,
} from "../controller/directGHGController.js";

const router = express.Router();
router.post("/organisation", saveOrganisation);
// router.post("/create", createDirectGHG);
router.post("/babPernambet", saveBabPernambet);
router.post("/babConsumption", saveBabConsumption);
router.post("/babThirumudivakkam", saveBabThirumudivakkam);
router.get("/:organisationId", getDirectGHGDetails);

export default router;
