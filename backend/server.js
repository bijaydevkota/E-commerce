import express from "express";
import mongoose from "mongoose";

//Configure the server
const app = express();
app.use(express.json());

//Connect to MongoDB Database
try {
  mongoose.connect(
    "mongodb+srv://dbijay2058:MuJ3sHvEZ8ITroNg@cluster0.ftzef.mongodb.net/e-commerce-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB connection success");
} catch (error) {
  console.log("MongoDB connection error", error);
}

//Product Schema (items for the product table)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

//Make product table
const Product = mongoose.model("Product", productSchema);

//CRUD for product
//1.Create a product
app.post("/products", async (req, res) => {
  console.log(req.body);
  try {
    const newProduct = await new Product(req.body).save();
    console.log(newProduct)
  } catch (error) {
    console.log("Something went wrong", error);
  }
});

app.get("/", (req, res) => {
  res.send("100 students here hahahaah");
});

app.listen(4000, () => {
  console.log("Server Started at http://localhost:4000");
});
