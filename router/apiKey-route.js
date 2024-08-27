const express = require("express");
const apiKey = require("../models/apikey-model");
const router = express.Router();

router.route('/').get(async(req,res)=>{
   try{
    const data = await apiKey.find()
    res.status(200).json({isSucessfull:true,data})
   }catch(e){
    res.status(400).json({isSucessfull:false,message:'error while fatching api key data'})
   }
})

router.route('/create').post(async(req,res)=>{
    try{
        const newKey = new apiKey(req.body);
        await newKey.save();
        res.status(200).json({isSucessfull:true,message:'sucessfully added'})
    }catch(e){
        res.status(400).json({isSucessfull:false,message:'error while creating new api key data'})
    }  
})
router.route('/:id/update').put(async(req,res)=>{
   try{
    const newKey = await apiKey.findByIdAndUpdate( req.params.id,{ $set: {...req.body} },
        { new: true })
        res.status(200).json({isSucessfull:true,message:'record updated sucessfully'})
   }catch{
        res.status(400).json({isSucessfull:false,message:'error while updating record'})
   }
})


router.route('/:id/delete').delete(async(req,res)=>{
     try{
        await apiKey.findByIdAndDelete(req.params.id);
        res.status(200).json({isSucessfull:true,message:'record Deleted sucessfully'})
     }catch{
        res.status(400).json({isSucessfull:false,message:'error while deleting record'})
     }
})

module.exports = router;