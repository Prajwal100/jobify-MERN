import mongoose from "mongoose";

const connecttDB = (url) => {
  return mongoose.connect(url);
};

export default connecttDB;
