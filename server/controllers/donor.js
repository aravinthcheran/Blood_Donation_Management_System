import Donor from "../models/Donor.js";

export const createDonor = async (req, res) => {
  const donor = new Donor(req.body);
  try {
    await donor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
