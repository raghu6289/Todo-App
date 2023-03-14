
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/v1/todolist'

export async function getData() {
  return await axios.get()
}

export async function create(body) {
  return await axios.post('', body)
}

export async function update(id, body) {
  console.log(id, body);
  return await axios.put(`/${id}`, body)
}

export async function deleteById(id) {
  console.log(id);
  return await axios.delete(`/${id}`)
}

