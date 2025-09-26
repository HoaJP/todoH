import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRINGS);
    console.log("Ket noi thanh cong");
  } catch (error) {
    console.log(error);
    console.log("Ket noi that bai");
    process.exit(1); //exit with error
  }
};
