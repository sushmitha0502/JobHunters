import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGODB_URI,{
       dbName:'JOBHUNTER',

    })
   .then(()=>{
    console.log("JobHunter connected to MongoDB");
}).catch(err=>{
    console.log(`Some error occured while connecting to MongoDB - ${err}`);
})}