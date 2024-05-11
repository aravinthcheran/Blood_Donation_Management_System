import Donor from "../models/Donor.js";

// Get all donors
export const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(404).json({ message: error.message });
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
  const donor = req.body;

  const newDonor = new Donor(donor);

  try {
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a donor
export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const donor = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No donor with that id");
  }

  const updatedDonor = await Donor.findByIdAndUpdate(id, donor, { new: true });

  res.json(updatedDonor);
};

// Delete a donor
export const deleteDonor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No donor with that id");
  }

  await Donor.findByIdAndRemove(id);

  res.json({ message: "Donor deleted successfully" });
};
