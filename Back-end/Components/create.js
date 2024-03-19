const student=require("../Model/model");


exports.create=async(req,res)=>{
    console.log(req.body)
    const data=new student(req.body)
    await data.save()
    res.send({message:"data saved"})
};

exports.display=async(req,res)=>{
    const data=await student.find({});
    res.json({success:true , data:data})
};

exports.update=async(req,res)=>{
    console.log(req.body)
    const {id,...rest}=req.body
    console.log(rest)
    const data=await student.updateOne({_id:id},rest)
    res.send({message:"data updates",data:data})
};

exports.delete=async(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    const data=await student.deleteOne({_id:id})
    res.send({success:"true",message:"deleted successfully",data:data})
};