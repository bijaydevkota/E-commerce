import { User } from "../schema/userSchema.js"



//create user
export const registerUser = async (req,res)=>{

}

//login user
export const loginUser = async (req,res)=>{

}

//Get all user
export const getAllUser = async (req,res)=>{
try {
    const allUsers = await User.find();
    return res.status(200).json({
        messege: "all users fetched successfully",
        data : allUsers,
    })
} catch (error) {
    return res.status(500).json({
        messege: "Error in fetching users",
        error : error,
    })
}
}
//get Single user
export const getUserById = async (req,res)=>{

}
//update user
export const updateUserById = async (req,res)=>{

}

//delete user
export const deleteUserById= async (req,res)=>{

}