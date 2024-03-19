import mongoose from "mongoose";

const user=new mongoose.Schema({
    fname:{
        type:String,
    required:true   
},
lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requird:true
    },
    password:{
        type:String,
        requied:true
    }
})

export default mongoose.model("USER",user);
