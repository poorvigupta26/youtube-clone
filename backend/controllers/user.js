import User from "../models/user";
import bcrypt from "bcrypt";
export const register = async(req,res,next)=>{
    try{
        const {name, email, password} = req.body;

    let user = await User.findOne({email});

    if(user) return next(new ErrorHandler("User Already exists!",400));

    const hashedPass = await bcrypt.hash(password,8);

    user = await User.create({name,email,password:hashedPass});

    }
    catch(err){
        next(err);
    }
}

export const login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
    let user = await User.findOne({email:email}).select("+password");

    if(!user) return next(new ErrorHandler("User doesnt exist!",400));


    let isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch) return next(new ErrorHandler("invalid email or password!",400));

    }
    catch(err){
        next(err)
    }
}