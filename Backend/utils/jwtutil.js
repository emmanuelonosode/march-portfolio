import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const generateCookie = (res, id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: "true",
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  });
};

export const verifyCookie = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ message: "Unathorised User Get the fuck out" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const currentUser = await User.findById(decoded.id)
    req.user = currentUser
    next();
  } catch (error) {
    return res.json({message:error})
  }
};
