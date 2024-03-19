const mongoose=require("mongoose");

const student=mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Mobile:
    {
        type:String,
        required:true,
    },
    Date:
    {
        type:Date,
        required:false,
    }
}
)

const user=mongoose.model("Info",student);
module.exports = user;

