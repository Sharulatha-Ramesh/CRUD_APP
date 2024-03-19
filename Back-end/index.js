/*const express=require("express");
const app=express();
const DB=require('./Database/connection');

const Info=require("./Components/create");

app.use(express.json());
DB();



app.get('/',(req,res)=>{
    res.send("this is from API");
})

app.get('/api/details',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.get('/api/display',Info.display);

app.post('/api/create',Info.create);

app.put('/api/update',Info.update)

app.delete('/api/delete/:id',Info.delete);

app.listen(4000,() =>{
    console.log("server is running");
});*/

