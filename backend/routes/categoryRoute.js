import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { Category } from "./schema/categorySchema.js";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//Category CRUD
//create a product
export const createCategory = async (req, res) => {
  try {
    //Check if category name already taken or not
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({
        messege: "Name already taken",
      });
    }

    //Handle the image upload before esaving to database.
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResponse, "hello its cloudinary response");

    const newCategory = await new Category({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      messege: "Category Created Successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      messege: "Internal Server Error",
    });
  }
};

//get all categories
// app.get("/categories", async (req, res) => {
//   try {
//     const allCategories = await Category.find();
//     return res.status(200).json({
//       messege: "All Categories fetched successfully",
//       data: allCategories,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       messege: "Internal server error",
//       error,
//     });
//   }
// });

// //get Single category
// app.get("/categories/:id", async (req, res) => {
//   try {
//     const singleCategory = await Category.findById(req.params.id);
//     if (!singleCategory) {
//       return res.status(404).json({
//         messege: "Category Not Found",
//       });
//     }
//     return res.status(201).json({
//       messege: "single category fetched successfully",
//       data: singleCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       messege: "Internal server error",
//       error,
//     });
//   }
// });

// //update category
// app.patch("/categories/:id", async (req, res) => {
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//       }
//     );
//     return res.status(200).json({
//       messege: "Category updated successfully",
//       data: updatedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       messege: "Internal server error",
//       error,
//     });
//   }
// });

// //delete category
// app.delete("/categories/:id", async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) {
//       return res.status(404).json({
//         messege: "Category Not Found",
//       });
//     }
//     return res.status(200).json({
//       messege: "Categegory deleted successfully",
//       data: deletedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       messege: "Internal server error",
//     });
//   }
// });
