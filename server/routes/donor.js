import express from "express";
import {
  getDonors,
  getDonor,
  createDonor,
  updateDonor,
  deleteDonor,
} from "../controllers/donor.js";

const router = express.Router();
router.get("/", getDonors);
router.get("/:id", getDonor);
router.post("/", createDonor);
router.patch("/:id", updateDonor);
router.delete("/:id", deleteDonor);

export default router;
