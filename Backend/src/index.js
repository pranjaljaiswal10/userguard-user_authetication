import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;

connectDB
  .then(() => {
    app.listen((port) => {
      console.log(`Server running on PORT:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed!!", err);
  });

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
