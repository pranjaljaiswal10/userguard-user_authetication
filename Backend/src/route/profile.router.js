import express from "express"
import { authverify } from "../middleware/auth.middleware.js"
const profileRouter=express.Router()

profileRouter.get("/profile",authverify,async(req,res)=>{
   const user=req.user;
   res.status(200).json(user)
})

export {profileRouter}