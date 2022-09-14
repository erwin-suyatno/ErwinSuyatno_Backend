import User from "../models/UserModel.js";

// register
export const createUser = async (req, res)=> {
    try{
        await User.create(req.body);
        res.status(201).json({msg: "Account Created !!!"});
    } catch (error){
        console.log(error.message);
    }
}