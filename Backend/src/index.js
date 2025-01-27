import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";
import { userRouter } from "./route/user.router.js";
import { profileRouter } from "./route/profile.router.js";


dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,
}))

app.use("/api",userRouter)
app.use("/api",profileRouter)

app.get("/", (req, res) => {
  res.send({message:"welcome to userguard"});
});

app.use(async(err,req,res,next)=>{
  console.log(err.stack)
  res.status(500).json({ success: false, errorMessage: err.message });
})

const port = process.env.PORT || 4000;
connectDB()
  .then(() => {
    app.listen(port,() => {
      console.log(`Server running on PORT:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed!!", err);
  });




