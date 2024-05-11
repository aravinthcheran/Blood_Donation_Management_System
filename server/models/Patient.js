import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
  bloodType: {
    type: String,
  },
  weight: {
    type: Number,
  },
});

const Patient = mongoose.model("Patient", PatientSchema);
export default Patient;
