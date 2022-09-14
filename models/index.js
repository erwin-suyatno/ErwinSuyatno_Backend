import db from "../config/Database";
import Checklist from "./ChecklisModel";


db.Checklist.hasMany(db.ChecklistItem);