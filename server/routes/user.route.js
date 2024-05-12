import express from "express";
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
// router.get('/listings/:id', verifyToken, getUserListings)
router.get("/:id", verifyToken, getUser);

export default router;
