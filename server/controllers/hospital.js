import Hospital from "../models/Hospital.js";

// Get all hospitals
export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a single hospital
export const getHospital = async (req, res) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findById(id);
    res.status(200).json(hospital);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a hospital
export const createHospital = async (req, res) => {
  const hospital = req.body;

  const newHospital = new Hospital(hospital);

  try {
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a hospital
export const updateHospital = async (req, res) => {
  const { id } = req.params;
  const hospital = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No hospital with that id");
  }

  const updatedHospital = await Hospital.findByIdAndUpdate(id, hospital, {
    new: true,
  });

  res.json(updatedHospital);
};

// Delete a hospital
export const deleteHospital = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No hospital with that id");
  }

  await Hospital.findByIdAndRemove(id);

  res.json({ message: "Hospital deleted successfully" });
};
