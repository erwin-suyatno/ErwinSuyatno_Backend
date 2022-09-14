import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Checklist = db.define('checklist',{
    name: DataTypes.STRING
},{
    freezeTableName:true
});

export default Checklist;

(async ()=> {
    await db.sync();
})();