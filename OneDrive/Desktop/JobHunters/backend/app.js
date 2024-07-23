import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleWare } from "./middlewares/error.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";

const app=express();

dotenv.config({path:'./.env'});

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:['GET', 'POST','DELETE','PUT'],
    credentials:true
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
})
);

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);

dbConnection();


app.use(errorMiddleWare);
export default app;