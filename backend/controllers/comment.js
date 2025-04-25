import Video from "../models/video"
//add, edit, delete

export const getComments=async (req,res)=>{
    const userid=req.video._id;
    try{
        let comments = await Video.find({user:userid});
        res.status(200).json(comments);
    }
    catch(err){
        next(err);
    }
}

export const addComment=async (req,res)=>{
    let {title,description} = req.body;
    try{
        await Video.create({title,description,user:req.user});
        res.status(201).json({message:"Comment Added Successfully!"});
    }
    catch(err){
        next(err);
    }
}

export const editComment=async (req,res)=>{
    try{
        let comment = await Video.findById(req.params.id);
        if(!comment){
            return next(new ErrorHandler("Comment not found!",404))
        }
        await task.save();

        res.status(200).json({message:"comment updated!"});
    }
    catch(err){
        next(err);
    }
}

export const deleteComment=async (req,res)=>{
    try{
        let comment = await Video.findById(req.params.id);
        if(!comment){
            return next(new ErrorHandler("Comment not found!",404))
        }
        await comment.deleteOne();

        res.status(200).json({success:true,message:"comment removed!"});
    }
    catch(err){
        next(err);
    }
}