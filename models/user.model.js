const mongoose = require('mongoose')
const { promisify } = require('util')
const bcrypt = require('bcryptjs')

const genSalt = promisify(bcrypt.genSalt)
const hash = promisify(bcrypt.hash)


const UserSchema = new mongoose.Schema({
   username: { type: String, required: true, trim: true, lowercase: true },
   password: { type: String, min: 6, max: 24 },
   role: { type: String, enum: ["Quản trị viên", "Người dùng"] }
})
UserSchema.pre('save', function save(next) {
   const user = this
   if (!user.isModified("password")) return next()
   genSalt()
      .then(salt => hash(user.password, salt))
      .then(hashed => {
         user.password = hashed
         return next()
      })
      .catch(err => console.log(err))
})

const User = mongoose.model('User', UserSchema)


module.exports = User