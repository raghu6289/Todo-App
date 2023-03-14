import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todolist", 'root', 'password', {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize.authenticate().then(() => {
  console.log("Database connected");
}).catch(() => {
  console.log("Failed to connect Database");
})

export default sequelize