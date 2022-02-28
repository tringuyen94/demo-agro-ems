const express= require('express')

const userRouter = require('./controllers/User/user.routes')

const router = express.Router()



router.use('/user',userRouter)


module.exports=router