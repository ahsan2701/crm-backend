import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const createUser = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.create({ password, email });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const generateToken = async (user) => {
  const token = await jwt.sign({ user: user }, "mytokensecret", {
    expiresIn: "1d",
  });
  return token;
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  if (user.password == password) {
    const token = await generateToken(user);
    console.log(token);

    return res
      .cookie("token", token, { httpOnly: true, secure: true })
      .status(200)
      .json({ user, token });
  } else {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
};
const logoutUser = (req, res) => {
  return res
    .clearCookie("token", { httpOnly: true, secure: true })
    .json({ message: "logout seccuss" });
};
export { createUser, loginUser, logoutUser };
