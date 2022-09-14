import express from "express";
import {
    createChecklist, 
    getAllChecklist,
    deleteChecklist
} from "../controller/ChecklistController.js";

const ChecklistRouter = express();

ChecklistRouter.get('/checklist', getAllChecklist);

ChecklistRouter.post('/checklist', createChecklist);

ChecklistRouter.delete('/checklist/:id', deleteChecklist);

export default ChecklistRouter;