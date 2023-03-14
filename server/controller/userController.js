import userService from "../service/userService.js";


const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "All input is required" })
  }
  const user = await userService.register(req.body)
  return res.status(201).json(user)
}

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "All input is required" })
  }
  const user = await userService.login(req.body)
  return res.status(200).json(user)
}

export default { login, register }