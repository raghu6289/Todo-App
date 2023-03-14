import todoRoutes from "./todoRoutes.js";
import userRoutes from "./userRoutes.js";
import { Router } from "express";
import authenticationUser from '../middleware/auth.js'

const mainRoute = Router()

mainRoute.use("/todolist", todoRoutes)
mainRoute.use("/user", userRoutes)

export default mainRoute
