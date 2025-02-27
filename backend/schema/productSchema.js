import mongoose from "mongoose";
//Product Schema (items for the product table)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

//Make product table
export const Product = mongoose.model("Product", productSchema);