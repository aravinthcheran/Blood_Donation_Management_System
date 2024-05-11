import mongoose from "mongoose";

const BloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  availableTypes: {
    type: [String],
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const BloodBank = mongoose.model("BloodBank", BloodBankSchema);
export default BloodBank;
