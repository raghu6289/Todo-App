import userRepo from "../repo/userRepo.js";

const register = async (data) => {
  return await userRepo.register(data)
}


const login = async (data) => {
  return await userRepo.login(data)
}

export default { register, login }