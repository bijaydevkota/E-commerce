import { Product } from "../schema/productSchema.js";
import { app } from "../server.js";

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
