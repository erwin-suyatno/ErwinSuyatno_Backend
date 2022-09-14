import express from "express";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";
import ChecklistRouter from "./routes/ChecklistRoute.js";
import ChecklistItemRouter from "./routes/ChecklistItemRoute.js";
const app = express();

app.use(cors);
app.use(express.json());

app.use(UserRouter);
app.use(ChecklistRouter);
app.use(ChecklistItemRouter);

app.listen(5000, ()=> console.log("Server to the sky and running !!!"));