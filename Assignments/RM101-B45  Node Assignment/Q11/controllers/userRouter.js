const User = require("../models/userModel")

module.exports.homepage = async(req,res)=>{
    try{
        res.status(200).json({message:"Welcome to My Server"})
    }        catch(err){
        res.status(501).json({message:"Unable to get Homepoage", error:err.message})
    }
}
module.exports.aboutpage = async(req,res)=>{
    try{
        res.status(200).json({message:"This is an about page."})
    }        catch(err){
        res.status(501).json({message:"Unable to get About page", error:err.message})
    }
}
module.exports.datasend = async(req,res)=>{
    try{
        const {data} = req.body
        const newData = new User({data});
        await newData.save()
        res.status(201).json({message:"Data has been received", newData})
    }        catch(err){
        res.status(501).json({message:"Unable to send data", error:err.message})
    }
}