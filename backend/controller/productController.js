import cloudinary from "../lib/cloudinaryConfig.js";
import { Product } from "../schema/productSchema.js";

//CRUD for product
//1.Create a product
export const createProduct = async (req, res) => {
  try {
    console.log(req.file);

    //check if product name already taken or not
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) {
      return res.status(409).json({
        messege: "Name already taken",
      });
    }

    //Upload the image in cloudinary and get the url
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResponse, "hello its cloudinary response");

    const newProduct = await new Product({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
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
};

//get all products
export const getAllProduct = async (req, res) => {
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
};

//get single product
export const getProductById = async (req, res) => {
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
};

//Update a product
// 3) Update a particular product
export const updateProductById = async (req, res) => {
  try {
      
      
      // image (i.e., update gardaa image pathayo vaney) vako case maa  yesaree handle garney
      if (req.file) {
          const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
          const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { ...req.body, imageUrl: cloudinaryResponse.secure_url }, { new: true });

          if (!updatedProduct) {
              return res.status(404).json({ message: "Product not found" }); // if category not found while doing update operations
          }
          return res.status(200).json({
              message: "Product Updated Successfully",
              data: updatedProduct
          })
      }

      // if image is not uploaded then dont handle the image upload part
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
          return res.status(404).json({ message: "Product not found" })
      }
      return res.status(200).json({
          message: "Product Updated Successfully",
          data: updatedProduct
      })

  } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
  }
};

//Delete a product
export const deleteProductById = async (req, res) => {
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
};
