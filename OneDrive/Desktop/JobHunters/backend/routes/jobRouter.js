import express from 'express';
import { deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob } from "../controller/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router=express.Router();

router.get('/getalljobs',getAllJobs);
router.post('/postjob',isAuthorized,postJob);
router.get('/getmyjobs',isAuthorized,getMyJobs);
router.put('/updatejob/:id',isAuthorized,updateJob);
router.delete('/deletejob/:id',isAuthorized,deleteJob);
router.get("/:id", isAuthorized,getSingleJob);

export default router;