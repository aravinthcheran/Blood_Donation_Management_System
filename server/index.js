import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
console.log(process.env.MONGO);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });