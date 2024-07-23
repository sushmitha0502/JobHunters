
import jwt from 'jsonwebtoken';
import { User } from '../models/userSchema.js';
import { catchAsyncErrors } from './catchAsyncError.js';
import ErrorHandler from './error.js';


export const isAuthorized=catchAsyncErrors(async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
    return next(new ErrorHandler("User not authorized",400));
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user= await User.findById(decoded.id);
    next();
});