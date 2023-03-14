import config from "../database/dbConnect.js";
import { Sequelize } from "sequelize";
import { users } from "./users.js";
import { todolist } from "./todolist.js";

const db = {}

db.sequelize = config
db.Sequelize = Sequelize

db.users = users
db.todolist = todolist

// Relationship
// db.users.hasMany(db.todolist, {
//   foreignKey: "userId", sourceKey: "id"
// })

export default db