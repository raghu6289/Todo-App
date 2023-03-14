import 'dotenv/config'
import express from "express";
import db from "./model/index.js";
import router from "./routes/index.js";
import cors from "cors"


const app = express()

//middlewares
app.use(express.json())


app.use(cors({ origin: true }));

app.use('/api/v1', router)

//PORT
let PORT = 3001

// server
const start = async () => {
  try {
    await db.sequelize.sync({ alter: true })
    app.listen(PORT, () => { console.log("Server is running at port ", PORT); })
  } catch (error) {
    console.log(error);
  }
}

start()







