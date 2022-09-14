import Checklist from "../models/ChecklisModel.js";

// Created
export const createChecklist = async (req, res)=> {
    try{
        await Checklist.create(req.body);
        res.status(201).json({msg: "Checklist Created !!!"});
    } catch (error){
        console.log(error.message);
    }
}

// Get
export const getAllChecklist = async (req, res)=> {
    try{
        const response = await Checklist.findAll();
        res.status(200).send(response);
    } catch (error){
        console.log(error.message);
    }
}

// Delete
export const deleteChecklist = async(req, res) =>{
    try {
        await Checklist.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Checklist to Destroy !!!"});
    } catch (error) {
        console.log(error.message);
    }
}