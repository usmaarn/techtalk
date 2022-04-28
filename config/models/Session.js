import {Model, DataTypes} from "sequelize";
import db from "../db";

class Session extends Model {}

Session.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    token: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    user:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'sessions'
});

export default Session;