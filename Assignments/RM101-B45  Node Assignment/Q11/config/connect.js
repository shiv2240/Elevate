const mongoose = require("mongoose")
require("dotenv").config()
const MONGODB_URI = process.env.MONGODB_URI
const connect = async()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to Server")
    }catch(err){
        console.log("Unable to connect to Server", err)
    }
}
module.exports = connect