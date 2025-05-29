const User = require("../models/userModel")

module.exports.getUser = async(req,res)=>{
    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json({message:"User found Successfully", user})
    }catch(err){
        res.status(501).json({message:"Failed to get user", error:err.message})
    }
}

module.exports.deleteUser = async(req,res)=>{
    try{
         const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({message:"User Deleted Successfully", user})
    }catch(err){
        res.status(501).json({message:"Failed to get user", error:err.message})
    }
}

module.exports.createUser = async(req,res)=>{
    try{
        const {username,password}= req.body
        const user = await User.create({username,password})
        res.status(200).json({message:"User created Successfully", user})
    }catch(err){
        res.status(501).json({message:"Failed to get user", error:err.message})
    }
}

module.exports.updateUser = async(req,res)=>{
    try{
        const {id}= req.params
         const {username, password} = req.body
        const user = await User.findByIdAndUpdate(id,{username, password},{new:true})
        res.status(200).json({message:"User Updated Successfully", user})
    }catch(err){
        res.status(501).json({message:"Failed to get user", error:err.message})
    }
}