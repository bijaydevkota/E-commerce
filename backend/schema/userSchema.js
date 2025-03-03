import mongoose from "mongoose";
//user Schema (items for the user table)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 
});

//Make user table
export const User = mongoose.model("User", userSchema);