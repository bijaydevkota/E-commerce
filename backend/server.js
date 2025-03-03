import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js"

//App Config (Configure the server)
const app = express();
//Middleware
app.use(express.json());

//Connect to MongoDB Database
try {
  mongoose.connect(
    process.env.MONGO_URI
  );
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log("MongoDB connection error", error);
}

app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("e-commerce ko backend ho hai bhai");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server Started at http://localhost:${process.env.APP_PORT}`);
});
