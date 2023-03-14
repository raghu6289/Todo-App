import generateUniqueId from 'generate-unique-id';
import db from "../model/index.js";
const todolist = db.todolist

const createtodo = async (body) => {
  const data = body
  const id = generateUniqueId()
  return await todolist.create({ ...data, id: id })
}

const getData = async () => {
  return await todolist.findAll()
}

const update = async (id, body) => {
  return await todolist.update(body, { where: { id } })

}

const deleteById = async (id) => {
  return await todolist.destroy({ where: { id } })
}

export default { createtodo, getData, update, deleteById }
