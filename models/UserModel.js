import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async ()=> {
    await db.sync();
})();