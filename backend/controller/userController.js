import { User } from "../schema/userSchema.js"
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {
    //check if user already exist
    const userExist = await User.findOne({email : req.body.email})
    if(userExist){
        return res.status(409).json({
            messege : "email already taken, please choose another email"
        })
    }

    // Hash the before daving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword)

    const newRegisteredUser = await new User({...req.body, password:hashedPassword}).save();
    return res.status(201).json({
      message: "User registered successfully",
      data: newRegisteredUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while registering user",
      error: error,
    });
  }
};


//login user
export const loginUser = async (req,res)=>{
    try {
        //check if user exist or not
        const userExist = await User.findOne({email : req.body.email})
        if(!userExist){
            return res.status(409).json({
                messege : "You are not registered yet, please register"
            })
        }

        //if user is registered, compare the password
        const isPasswordMatched = await bcrypt.compare(req.body.password, userExist.password)
        if(!isPasswordMatched){
            return res.status(401).json({
                messege: "Passwors is incorrect"
            })
        }
        
        //if password matched then generate the JWT token
        const myToken = jwt.sign({email:userExist.email}, "this_is_private_key", {expiresIn:'24h'})
        console.log(myToken)
        return res.status(200).json({
            messege: "User logedin successfully",
            token: myToken,
            user : userExist
        })
        
    } catch (error) {
        return res.status(500).json({
            messege:"error while login",
            error : error 
        })
    }
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