import jwt from "jsonwebtoken";
import { User } from "../models/user.module.js";

const authverify = async (req, res, next) => {
  const token =
    (req.cookies.token || req.header("authorization")?.replace("bearer", ""));
    if(!token){
      res.status(401).send("Please login")
    }
  const decode =jwt.verify(token, process.env.TOKEN_SECRET_KEY);
  const { userId } = decode;
  const user = await User.findById(userId);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ message: "invalid access token" });
  }
};

export { authverify };
