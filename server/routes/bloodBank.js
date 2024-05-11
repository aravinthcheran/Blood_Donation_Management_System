import express from "express";
import {
  getBloodBanks,
  getBloodBank,
  createBloodBank,
  updateBloodBank,
  deleteBloodBank,
} from "../controllers/bloodBank.js";

const router = express.Router();
router.get("/", getBloodBanks);
router.get("/:id", getBloodBank);
router.post("/", createBloodBank);
router.patch("/:id", updateBloodBank);
router.delete("/:id", deleteBloodBank);

export default router;
