import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        select:false,
        required:true,

    },
    avatar:{
        type:String,
        required:true,
    },
    channels:{
        type:[String],
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",userSchema);

export default User;