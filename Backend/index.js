import express from "express";
const app = express();
const PORT = 3000;
import cors from "cors";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import validator from "email-validator";
import User from "./models/user.js";
import BlogPost from "./models/blog.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { generateCookie, verifyCookie } from "./utils/jwtutil.js";
app.use(cors());
app.use(cookieParser());

dotenv.config();
app.use(express.json({ limit: "10mb" })); // Adjust size as needed

mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("this shit dataBase connected");
});

app.post("/api/posts", async(req, res) => {
  const { content, title, location, tags, banner } = req.body;
  console.log(content, title);
 const data = new BlogPost({
   content,
   title,
   location,
   tags,
   banner
 });

  await data.save() 
   res.json({ message: "post created", data });

});
app.get("/api/blogs",async(req, res)=>{
  const content = await BlogPost.find({})
  res.json({message:"here is your data in this bitch", content})
})
app.get("/api/read/:id", async(req,res)=>{
  const {id} = req.params
  const content = await BlogPost.findById(id)
  res.json(content)
  console.log(content)
})

app.listen(PORT, () => {
  console.log("pusyyyy");
});
