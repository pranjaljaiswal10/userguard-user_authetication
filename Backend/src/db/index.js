import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant";

const connectDB=async()=>{
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`\nMONGODB connected!! DB HOST:${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MONGODB connection FAILED",error)
    process.exit(1)
  }
}

export default connectDB;
