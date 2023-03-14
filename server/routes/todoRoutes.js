import todoController from "../controller/todoController.js";
import { Router } from "express";

const router = Router()

router.post('/', todoController.createtodo)
router.get('/', todoController.getData)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.deleteById)


export default router
