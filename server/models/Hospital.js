import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const Hospital = mongoose.model("Hospital", HospitalSchema);
export default Hospital;
