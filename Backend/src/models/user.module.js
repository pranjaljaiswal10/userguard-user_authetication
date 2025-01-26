import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    }
    
    ,    profilePictureUrl: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword=async function (passwordByUser) {
  const user=this;
  const hashedPassword=user.password;
  const isPasswordValid=await bcrypt.compare(passwordByUser,hashedPassword)
  return isPasswordValid
}

userSchema.methods.getJWT=function () {
  const user=this
  const token=jwt.sign({userId:user._id},process.env.TOKEN_SECRET_KEY,{expiresIn:"1d"})
  return token;
}


export const User=mongoose.model("User",userSchema)