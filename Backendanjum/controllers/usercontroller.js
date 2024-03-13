import asyncHandler from "express-async-handler";
import User from "../schemas/userSchema.js";

export const register = asyncHandler(async (req, res) => {
  try {
    const { email, username, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json("User already exists!");
    }

    const user = await User.create({
      email,
      username,
      password,
      role,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
});

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    //check for email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Email not resgistered" });
    }

    //check for password
    if (user && (await user.password == password)) {
      res.status(201).json({
        _id: user._id,
        name: user.username,
        email: user.email,
        role: user.role,
      });
    }else{
        res.status(400).json({message:'Incorrect password.'});
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
