import sequelize from "../database/dbConnect.js"
import { DataTypes } from "sequelize"

export const users = sequelize.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    // unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamp: true,
  paranoid: true
})