import express from 'express';
import { employerGetAllApplication, jobseekerDeleteApplication, jobseekerGetAllApplication, postApplication } from '../controller/applicationController.js';
import { isAuthorized } from '../middlewares/auth.js';

const router=express.Router();

router.post('/postapplication',isAuthorized,postApplication);
router.get('/employer/getall',isAuthorized,employerGetAllApplication);
router.get('/jobseeker/getall',isAuthorized,jobseekerGetAllApplication);
router.delete('/jobseeker/delete/:id',isAuthorized,jobseekerDeleteApplication);

export default router;