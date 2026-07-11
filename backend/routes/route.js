import express from "express"
import { createresume,experience } from "../controllers/usercontroller.js";


//this file contains the create-resume api and experience api which will require ids 
const router=express.Router()
router.post("/createresume", createresume);
router.post("/experience/:id",experience)

export default router