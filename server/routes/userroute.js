import express from "express";
import { create,getAll,getOne,update,deleteUser } from "../controller/create.js";

const route=express.Router();

route.post("/create",create);

route.get("/get",getAll);

route.get("/getId/:id",getOne);

route.put("/update/:id",update);

route.delete("/delete/:id",deleteUser);
export default route;