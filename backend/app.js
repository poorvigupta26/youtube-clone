import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user";
import commentRouter from "./routes/comment";

mongoose.connect("mongodb://localhost:27017",{
    dbName:"ytclone",
})
.then(()=>console.log("mongodb works!"))
.catch((err)=>console.log("some error occured!",err))

const app=express();

app.use(express.json());
app.use(cors({
    origin:[process.env.FRONTEND_URL, "http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

//routes

app.use('/user/v1',userRouter);
app.use('/comment/v1/',commentRouter);

app.get('/',(req,res)=>{
    res.send("off you go!");
})

app.listen(3000,()=>{
    console.log("app is live at 3000!")
})