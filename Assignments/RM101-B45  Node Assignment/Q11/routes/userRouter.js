const { homepage, aboutpage, datasend } = require("../controllers/userRouter")

const userRouter = require("express").Router()

userRouter.get("/",homepage)
userRouter.get("/about",aboutpage)
userRouter.post("/data",datasend)

module.exports = userRouter