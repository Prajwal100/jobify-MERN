import User from "../models/User.js";
const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
  user.save();
};

export { register, login, updateUser };
