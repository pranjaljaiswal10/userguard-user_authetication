import bcrypt from "bcrypt";
import express from "express"
import { User } from "../models/user.module.js";

const userRouter=express.Router()

userRouter.post("/signup",async(req,res)=>{
    const {email,username,password,profilePictureUrl}=req.body
    if([username,email,password].some(item=>item?.trim()==="")){
  res.status(401).json({message:"All field are required"})
    }
    const user=await User.findOne({
        $or:[{email},{username}]
    })
    if(user){
        res.status(401).json({message:"User is already exist"})
    }
        const hashPassword=await bcrypt.hash(password,10)
        const newUser=new User({
            username,email,password:hashPassword,profilePictureUrl
        })
        const savedUser=await newUser.save()
        const token=savedUser.getJWT()
        const option={
            httpOnly:true,
            secure:true
        }
        res.cookie("token",token,option)
        res.status(201).json({message:"Registration successful",data:{user:savedUser,token}})
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
       return res.status(400).json({message:"User  not found,first create account"})
    }
    const checkPassword=await user.validatePassword(password)
    if(!checkPassword){
      throw new Error("Invalid Credential")
    }
    const token=user.getJWT()
    const option={
        secure:true,
        httpOnly:true
    }
    res.cookie("token",token,option)
    res.status(200).json({message:"User logged in successfully",data:user,token})
})

userRouter.post("/logout",async(req,res)=>{
    res.clearCookie("token")
    res.status(200).send({message:"logout successfully"})
})

userRouter.post("")

export {userRouter}


