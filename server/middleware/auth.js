import Jwt from 'jsonwebtoken'
import 'dotenv/config'

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).send('Access Denied !');
  const token = authHeader.split(' ')[1]
  // console.log('auth token :', token);
  const verify = await Jwt.verify(token, process.env.JWT_SECRET)
  // console.log("verify: ", verify);
  req.user = { id: verify.userId, email: verify.email }
  next()
}

export default auth