import express from "express"
const app = express()
const PORT = 3000
import cors from "cors"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"
import validator from "email-validator"
import User from "./models/user.js"
import dotenv from "dotenv"
import cookieParser  from "cookie-parser"
import { generateCookie, verifyCookie } from "./utils/jwtutil.js"
app.use(cors())
app.use(cookieParser())

dotenv.config()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("this shit dataBase connected")
})


app.post("/api/signin", async(req, res)=>{
    const {name, email, password} = req.body
   
    if (!name || !email || !password) {
        return res.json({message :"All Field Are Required"})
    }

  const realEmail = validator.validate(email)

  if(!realEmail){
  return  res.json({message: "invalid email"})
  }
  if (password.length < 8) {
    return res.json({message: "password must be at least 8 characters"})
  }
  
  const existUser = await User.findOne({email})

  if (existUser) {
    return res.json({message:"User already Exist"})
    
  }
  const hashPassword = await bcrypt.hash(password, 12)

  const newUser = new User({
    name,
    email,
    password: hashPassword,
  })

  await newUser.save()
  
  generateCookie(res, newUser._id)
  res.json({User: newUser})

})

app.get("/authme", verifyCookie, (req, res)=>{
    res.send({
      success: true,
      user: req.user,
    })
})

app.listen(PORT,()=>{
    console.log("pusyyyy")
})