import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const ChecklistItem = db.define('checklist_item',{
    itemName: DataTypes.STRING,
    status: DataTypes.BOOLEAN
},{
    freezeTableName:true
});

export default ChecklistItem;

(async ()=> {
    await db.sync();
})();