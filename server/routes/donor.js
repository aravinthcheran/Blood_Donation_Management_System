import express from "express";
import { createDonor, getDonors } from "../controllers/donor.js";

const router = express.Router();
router.get("/", getDonors);
router.post("/", createDonor);

export default router;
