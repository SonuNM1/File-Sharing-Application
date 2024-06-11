
import express from 'express' ; 
const router = express.Router() ; 

import { uploadImage } from '../controllers/imageController';


router.post('/upload', uploadImage) ;  

export default router ; 