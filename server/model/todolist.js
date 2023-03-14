import sequelize from "../database/dbConnect.js";
import { DataTypes } from "sequelize";

export const todolist = sequelize.define("todolist", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},
  {
    timestamp: true,
    paranoid: true
  }
)