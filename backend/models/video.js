import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    videoId:{
        type:String,
        required:true,
    },
    commentId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        unique:true,
        required:true,
    },
    text:{
        type:String,
        select:false,
        required:true,

    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const videoSchema = new mongoose.Schema({
    videoId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    thumbnailURL:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    channelId:{
        type:String,
        required:true,
    },
    uploader:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0,
        required:true,
    },
    likes:{
        type:Number,
        default:0,
        required:true,
    },
    dislikes:{
        type:Number,
        default:0,
        required:true,
    },
    uploadDate:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    comments:{
        type:commentSchema,
    },

})

const Video = mongoose.model("Video",videoSchema);

export default Video;


 