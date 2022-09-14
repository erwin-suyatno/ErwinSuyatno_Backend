import ChecklistItem from "../models/ChecklisModel.js";

// Created new
export const createChecklistItem = async (req, res)=> {
    try{
        await ChecklistItem.create(req.body);
        res.status(201).json({msg: "Checklist New Is Created !!!"});
    } catch (error){
        console.log(error.message);
    }
}

// GetALL
export const getAllChecklistItem = async (req, res)=> {
    try{
        const response = await ChecklistItem.findAll();
        res.status(200).send(response);
    } catch (error){
        console.log(error.message);
    }
}

// GetById
export const getChecklistItemById = async (req, res)=> {
    try{
        const response = await ChecklistItem.findAll({
            where:{
                id: req.params.id
            }
        });
        res.status(200).send(response);
    } catch (error){
        console.log(error.message);
    }
}

// Update
export const updateChecklistItem = async(req, res) =>{
    try {
        await ChecklistItem.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Checklist Item Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

// Delete
export const deleteChecklistItem = async(req, res) =>{
    try {
        await ChecklistItem.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Checklist to Destroy !!!"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateChecklistItemName = async(req, res) =>{
    try {
        await ChecklistItem.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Checklist Item Updated"});
    } catch (error) {
        console.log(error.message);
    }
}