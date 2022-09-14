import express from "express";
import {
    createChecklistItem,
    getAllChecklistItem,
    getChecklistItemById,
    deleteChecklistItem,
    updateChecklistItem,
} from "../controller/ChecklistItemController.js";

const ChecklistRouter = express();

ChecklistRouter.get('/checklist', getAllChecklistItem);

ChecklistRouter.post('/checklist/:id/item', createChecklistItem);

ChecklistRouter.get('/checklist/item/:id', getChecklistItemById);

ChecklistRouter.put('/checklist/item/:id', updateChecklistItem);

ChecklistRouter.delete('/checklist/item/:id', deleteChecklistItem);

export default ChecklistRouter;