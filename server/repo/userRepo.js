import 'dotenv/config'
import db from "../model/index.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import generateUniqueId from 'generate-unique-id';
const User = db.users


const register = async (userinfo) => {
  const { email, password } = userinfo
  const user = await User.findOne({ where: { email: email } })
  if (user) return ("user already exisit please register")
  const salt = await bcryptjs.genSalt(10);
  const id = generateUniqueId({
    length: 15,
    useLetters: false
  });
  const encryptPass = await bcryptjs.hash(password, salt)
  const createuser = { id: id, email, password: encryptPass }
  await User.create(createuser)
  return "successfully created"
}


const login = async (userinfo) => {
  const { email, password } = userinfo
  // console.log(email, password);
  const user = await User.findOne({ where: { email: email } })
  if (!user) return ("user not found please register")
  const pass = await findByCredentials(password, user.password)
  if (!pass) return ("password incorrect please try again")
  const token = await genToken(user)
  return { username: user.username, token }
}


// Password Compare
async function findByCredentials(pass, userpass) {
  return await bcryptjs.compare(pass, userpass)
}


// Generate Token
async function genToken(user) {
  const payload = {
    userId: user.id,
    email: user.email
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET)
  return token
}


export default { register, login }
