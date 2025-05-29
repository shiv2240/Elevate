const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    }
})
const User = mongoose.model("User", userSchema)
module.exports = User