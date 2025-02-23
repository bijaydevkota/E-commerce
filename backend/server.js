import express from "express";
import mongoose from "mongoose";

//Configure the server
const app = express();
//Middleware
app.use(express.json());

//Connect to MongoDB Database
try {
  mongoose.connect(
    "mongodb+srv://dbijay2058:bijay123@cluster0.zdt3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log("MongoDB connection error", error);
}

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
const Product = mongoose.model("Product", productSchema);

//Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

//Category Table
const Category = mongoose.model("category", categorySchema);

//Category CRUD
//create a product
app.post("/categories", async (req, res) => {
  try {
    //Check if category name already taken or not
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({
        messege: "Name already taken",
      });
    }
    const newCategory = await new Category(req.body).save();
    return res.status(201).json({
      messege: "Category Created Successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
});

//get all categories
app.get("/categories", async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json({
      messege: "All Categories fetched successfully",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal server error",
      error,
    });
  }
});

//get Single category
app.get("/categories/:id", async (req, res) => {
  try {
    const singleCategory = await Category.findById(req.params.id);
    if (!singleCategory) {
      return res.status(404).json({
        messege: "Category Not Found",
      });
    }
    return res.status(201).json({
      messege: "single category fetched successfully",
      data: singleCategory,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal server error",
      error,
    });
  }
});

//update category
app.patch("/categories/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      messege: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal server error",
      error,
    });
  }
});

//dete category
app.delete("/categories/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id)
    if(!deletedCategory){
      return res.status(404).json({
        messege:"Category Not Found"
      })
    }
    return res.status(200).json({
      messege: "Categegory deleted successfully",
      data: deletedCategory
    })
  } catch (error) {
    return res.status(500).json({
      messege: "Internal server error"
    })
  }
});

//CRUD for product
//1.Create a product
app.post("/products", async (req, res) => {
  try {
    //check if product name already taken or not
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) {
      return res.status(409).json({
        messege: "Name already taken",
      });
    }

    const newProduct = await new Product(req.body).save();
    return res.status(201).json({
      messege: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      messege: "Internal server error",
    });
  }
});

//get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json({
      messege: "ALl product fetch successfully",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
});

//get single product
app.get("/products/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.status(200).json({
      messege: "Single product fetch successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
});

//Update a product
app.patch("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      messege: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
});

//Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const productExist = await Product.findOne({ id: req.body.id });
    if (productExist) {
      return res.status(409).json({
        messege: "Product already deleted",
      });
    }

    const deletedProducts = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      messege: "Product Deleted Successfully",
      data: deletedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("100 students here hahahaah");
});

app.listen(4000, () => {
  console.log("Server Started at http://localhost:4000");
});
