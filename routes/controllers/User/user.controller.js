const bcryptjs = require('bcryptjs')
const User = require('../../../models/user.model')
const bcrypt = require('bcryptjs')
const { promisify } = require('util')
const jsonwebtoken = require('jsonwebtoken')
const comparePassword = promisify(bcryptjs.compare)
const jwtSign = promisify(jsonwebtoken.sign)

const register = (req, res, next) => {
   const { username, password, role } = req.body
   User.findOne({ username })
      .then(result => {
         if (result) return Promise.reject({ status: 409, message: "Tài khoản đã tồn tại" })
         let newUser = new User({ username, password, role })
         return newUser.save()
      })
      .then(newUser => res.status(201).json({ newUser, message: "Thêm tài khoản thành công" }))
      .catch(err => {
         if (err.status) return res.status(err.status).json(err.message)
         return res.status(500).json(err)
      })

}
const login = (req, res, next) => {
   const { username, password } = req.body
   User.findOne({ username })
      .then(user => {
         if (!user) return Promise.reject({ status: 404, message: "Người dùng không tồn tại" })
         return Promise.all([comparePassword(password, user.password), user])
      })
      .then(result => {
         let isMatch = result[0]
         if (!isMatch) return Promise.reject({ status: 403, message: "Sai mật khẩu" })
         let payload = {
            username: result[1].username,
            role: result[1].role
         }
         return jwtSign(payload, "agro-ems")
      })
      .then(jwt => res.status(200).json({ token: jwt, message: "Đăng nhập thành công" }))
      .catch(err => {
         if (err.status) return res.status(err.status).json(err.message)
         return res.status(500).json(err)
      })
}

module.exports = { register, login }