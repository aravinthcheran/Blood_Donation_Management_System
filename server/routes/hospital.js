import express from "express";
import {
  getHospitals,
  getHospital,
  createHospital,
  updateHospital,
  deleteHospital,
} from "../controllers/hospital.js";

const router = express.Router();
router.get("/", getHospitals);
router.get("/:id", getHospital);
router.post("/", createHospital);
router.patch("/:id", updateHospital);
router.delete("/:id", deleteHospital);

export default router;
