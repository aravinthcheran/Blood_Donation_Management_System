// Libraries: express, dotenv, mongoose
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import donorRoutes from "./routes/donor.js";
import hospitalRoutes from "./routes/hospital.js";
import bloodBankRoutes from "./routes/bloodBank.js";
import patientRoutes from "./routes/patients.js";

// Mongo configuration
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// Express configuration
const app = express();
app.use(express.json());
app.use("/donors", donorRoutes);
app.use("/hospitals", hospitalRoutes);
app.use("/bloodbanks", bloodBankRoutes);
app.use("/patients", patientRoutes);

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
