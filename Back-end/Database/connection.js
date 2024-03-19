const mongoose=require("mongoose");

function DBConnect()
{
    mongoose.connect("mongodb+srv://21ita47:05sharu@backend.urfrtib.mongodb.net/CRUD?retryWrites=true&w=majority&appName=backend")
    .then((conn)=>{
        console.log("connected to db!");
    })
    .catch((error)=>{
        console.log("error",error);
    })
}

module.exports = DBConnect;