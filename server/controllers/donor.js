import Donor from "../models/Donor.js";
import mongoose from "mongoose";

// Get all donors
export const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    console.error("Error getting donors:", error);
    res.status(500).send("Internal server error");
  }
};

// Get a single donor
export const getDonor = async (req, res) => {
  const { id } = req.params;

  try {
    const donor = await Donor.findById(id);
    res.status(200).json(donor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a donor
export const createDonor = async (req, res) => {
  try {
    const donor = req.body;

    const newDonor = new Donor(donor);

    try {
      await newDonor.save();
      res.status(201).json(newDonor);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } catch (error) {
    console.error("Error creating donor:", error);
    res.status(500).send("Internal server error");
  }
};

// Update a donor
export const updateDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const donor = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No donor with that id");
    }

    const updatedDonor = await Donor.findByIdAndUpdate(id, donor, {
      new: true,
    });

    res.json(updatedDonor);
  } catch (error) {
    console.error("Error updating donor:", error);
    res.status(500).send("Internal server error");
  }
};

// Delete a donor
export const deleteDonor = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No donor with that id");
    }

    // Find and remove the donor by ID
    const removedDonor = await Donor.findByIdAndRemove(id);

    // Check if donor was found and removed
    if (!removedDonor) {
      return res.status(404).send("No donor found with that id");
    }

    // Respond with a success message
    res.json({ message: "Donor deleted successfully" });
  } catch (error) {
    console.error("Error deleting donor:", error);
    res.status(500).send("Internal server error");
  }
};
