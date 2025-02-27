import mongoose from "mongoose";
//Category Schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
  });
  
  //Category Table
  export const Category = mongoose.model("category", categorySchema);