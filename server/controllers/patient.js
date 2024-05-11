import Patient from "../models/Patient.js";

// Get all patients
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error getting patients:", error);
    res.status(500).send("Internal server error");
  }
};

// Get a single patient
export const getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a patient
export const createPatient = async (req, res) => {
  const patient = req.body;

  const newPatient = new Patient(patient);

  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a patient
export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const patient = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  const updatedPatient = await Patient.findByIdAndUpdate(id, patient, {
    new: true,
  });

  res.json(updatedPatient);
};

// Delete a patient
export const deletePatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No patient with that id");
  }

  await Patient.findByIdAndRemove(id);

  res.json({ message: "Patient deleted successfully" });
};
