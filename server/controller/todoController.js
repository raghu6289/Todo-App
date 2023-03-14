import todoService from "../service/todoService.js";

const createtodo = async (req, res) => {
  const todo = await todoService.createtodo(req.body)
  return res.status(201).json(todo)
}

const getData = async (req, res) => {
  const todoData = await todoService.getData()
  return res.status(200).json(todoData)
}

const update = async (req, res) => {
  let id = req.params.id
  const todoData = await todoService.update(id, req.body)
  return res.status(200).json(todoData)
}

const deleteById = async (req, res) => {
  let id = req.params.id
  const todoData = await todoService.deleteById(id)
  return res.status(200).json(todoData)
}

export default { createtodo, getData, update, deleteById }