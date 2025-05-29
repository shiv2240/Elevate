const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())
const connect = require("./config/connect")
const userRouter = require("./routes/userRouter")
const PORT = process.env.PORT


app.use("/api",userRouter)
connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
})
.catch((err)=>{
    console.log("Unable to connect to server")
})