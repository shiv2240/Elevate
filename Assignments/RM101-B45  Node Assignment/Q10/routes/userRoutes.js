const { getUser, deleteUser, createUser, updateUser } = require("../controllers/userController")

const userRouter = require("express").Router()


userRouter.get("/getUser/:id", getUser)
userRouter.delete("/deleteUser/:id",deleteUser)
userRouter.post("/createUser",createUser)
userRouter.put("/updateUser/:id",updateUser)
module.exports = userRouter