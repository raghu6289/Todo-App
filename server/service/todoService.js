import todoRepo from "../repo/todoRepo.js";

const createtodo = async (body) => {
  console.log(body);
  return await todoRepo.createtodo(body)
}


const getData = async () => {
  return await todoRepo.getData()
}

const update = async (id, body) => {
  return await todoRepo.update(id, body)

}

const deleteById = async (id) => {
  return await todoRepo.deleteById(id)
}

export default { createtodo, getData, update, deleteById }