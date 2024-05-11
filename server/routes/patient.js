import express from "express";
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.js";

const router = express.Router();
router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/", createPatient);
router.patch("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;
