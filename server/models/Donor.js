import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
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
  conatct: {
    type: String,
  },
  bloodType: {
    type: String,
  },
  weight: {
    type: Number,
  },
  healthCondition: {
    type: String,
  },
  donationHistory: {
    type: Array(mongoose.Schema.Types.ObjectId),
    ref: "Donation",
  },
  lastDonationDate: {
    type: Date,
  },
});

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;
