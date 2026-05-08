import express from 'express'
import {createSR} from '../controllers/createSR.js'

const router = express.Router();

router.post("/create" , createSR);

export default router;