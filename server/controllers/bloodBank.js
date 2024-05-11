import BloodBank from "../models/BloodBank";

// Get all blood banks
export const getBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a single blood bank
export const getBloodBank = async (req, res) => {
  const { id } = req.params;

  try {
    const bloodBank = await BloodBank.findById(id);
    res.status(200).json(bloodBank);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a blood bank
export const createBloodBank = async (req, res) => {
  const bloodBank = req.body;

  const newBloodBank = new BloodBank(bloodBank);

  try {
    await newBloodBank.save();
    res.status(201).json(newBloodBank);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a blood bank
export const updateBloodBank = async (req, res) => {
  const { id } = req.params;
  const bloodBank = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No blood bank with that id");
  }

  const updatedBloodBank = await BloodBank.findByIdAndUpdate(id, bloodBank, {
    new: true,
  });

  res.json(updatedBloodBank);
};

// Delete a blood bank
export const deleteBloodBank = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No blood bank with that id");
  }

  await BloodBank.findByIdAndRemove(id);

  res.json({ message: "Blood bank deleted successfully" });
};
