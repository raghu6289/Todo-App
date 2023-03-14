import userController from "../controller/userController.js";
import { Router } from "express";

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)


export default router
